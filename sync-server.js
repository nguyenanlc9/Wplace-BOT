const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' })); // Tăng limit để handle large paintedMap data
app.use(express.static('public'));

// In-memory storage for sync data (in production, use a database)
let syncData = {};

// API Routes
app.get('/sync', (req, res) => {
  res.status(405).json({ 
    error: 'Method not allowed', 
    message: 'Use POST /sync to send sync data, GET /poll to receive sync data',
    endpoints: {
      'POST /sync': 'Send progress data to server',
      'GET /poll': 'Receive progress data from other profiles',
      'GET /status': 'Get server status'
    }
  });
});

app.post('/sync', (req, res) => {
  try {
    const { ipAddress, profileId, sourceSlot, progress, apiKey } = req.body;
    
    if (apiKey !== 'wplace_sync_2024') {
      return res.status(401).json({ error: 'Invalid API key' });
    }

    const syncKey = `${ipAddress}_${sourceSlot}`;
    
    if (!syncData[syncKey]) {
      syncData[syncKey] = [];
    }

    // Add timestamp
    const syncEntry = {
      ...req.body,
      timestamp: Date.now(),
      receivedAt: new Date().toISOString()
    };

    // Remove old entries (keep only last 10 entries per IP+slot)
    syncData[syncKey] = syncData[syncKey].filter(entry => 
      Date.now() - entry.timestamp < 60000 // Keep entries from last minute
    );

    syncData[syncKey].push(syncEntry);

    console.log(`📥 Sync received from ${profileId} (IP: ${ipAddress}, Slot: ${sourceSlot}): ${progress.paintedPixels}/${progress.totalPixels} pixels`);
    
    res.json({ success: true, message: 'Sync data stored' });
  } catch (error) {
    console.error('❌ Error storing sync data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/poll', (req, res) => {
  try {
    const { ip, slot, profile, multiIp } = req.query;
    
    if (!ip || !slot || !profile) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    let allData = [];

    if (multiIp === 'true') {
      // Poll tất cả IP cho cùng slot
      Object.keys(syncData).forEach(syncKey => {
        const [dataIp, dataSlot] = syncKey.split('_');
        if (dataSlot === slot) {
          allData = allData.concat(syncData[syncKey] || []);
        }
      });
    } else {
      // Chỉ poll cùng IP
      const syncKey = `${ip}_${slot}`;
      allData = syncData[syncKey] || [];
    }

    // Filter out data from the same profile and return only recent data
    const filteredData = allData.filter(entry => 
      entry.profileId !== profile && 
      Date.now() - entry.timestamp < 60000 // Return data from last 60 seconds (longer window)
    );

    // Sắp xếp theo progress cao nhất trước
    filteredData.sort((a, b) => {
      const progressA = a.progress ? a.progress.paintedPixels : 0;
      const progressB = b.progress ? b.progress.paintedPixels : 0;
      return progressB - progressA; // Cao nhất trước
    });

    if (filteredData.length > 0) {
      const mode = multiIp === 'true' ? 'Multi-IP' : 'Same-IP';
      console.log(`📤 ${mode} poll response for ${profile} (IP: ${ip}, Slot: ${slot}): ${filteredData.length} entries, highest progress: ${filteredData[0].progress?.paintedPixels || 0}`);
    }

    res.json(filteredData);
  } catch (error) {
    console.error('❌ Error polling sync data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Status endpoint
app.get('/status', (req, res) => {
  const stats = {
    totalSyncKeys: Object.keys(syncData).length,
    totalEntries: Object.values(syncData).reduce((sum, entries) => sum + entries.length, 0),
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  };
  
  res.json(stats);
});

// Clear old data endpoint
app.post('/clear', (req, res) => {
  const { apiKey } = req.body;
  
  if (apiKey !== 'wplace_sync_2024') {
    return res.status(401).json({ error: 'Invalid API key' });
  }

  const beforeCount = Object.values(syncData).reduce((sum, entries) => sum + entries.length, 0);
  
  // Clear data older than 5 minutes
  Object.keys(syncData).forEach(key => {
    syncData[key] = syncData[key].filter(entry => 
      Date.now() - entry.timestamp < 300000 // 5 minutes
    );
    if (syncData[key].length === 0) {
      delete syncData[key];
    }
  });

  const afterCount = Object.values(syncData).reduce((sum, entries) => sum + entries.length, 0);
  
  console.log(`🧹 Cleaned sync data: ${beforeCount} -> ${afterCount} entries`);
  res.json({ success: true, cleaned: beforeCount - afterCount });
});

// Serve a simple status page
app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>WPlace Sync Server</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; background: #f0f0f0; }
        .container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .status { background: #e8f5e8; padding: 15px; border-radius: 5px; margin: 10px 0; }
        .endpoint { background: #f0f0f0; padding: 10px; margin: 5px 0; border-radius: 3px; font-family: monospace; }
        button { background: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; }
        button:hover { background: #0056b3; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🔄 WPlace Sync Server</h1>
        <div class="status">
          <h3>Server Status</h3>
          <p><strong>Status:</strong> <span id="status">Loading...</span></p>
          <p><strong>Uptime:</strong> <span id="uptime">-</span></p>
          <p><strong>Total Sync Keys:</strong> <span id="keys">-</span></p>
          <p><strong>Total Entries:</strong> <span id="entries">-</span></p>
        </div>
        
        <h3>API Endpoints</h3>
        <div class="endpoint">POST /sync - Store sync data</div>
        <div class="endpoint">GET /poll - Retrieve sync data</div>
        <div class="endpoint">GET /status - Server status</div>
        <div class="endpoint">POST /clear - Clear old data</div>
        
        <button onclick="clearData()">Clear Old Data</button>
        <button onclick="refreshStatus()">Refresh Status</button>
      </div>

      <script>
        async function refreshStatus() {
          try {
            const response = await fetch('/status');
            const data = await response.json();
            
            document.getElementById('status').textContent = 'Running';
            document.getElementById('uptime').textContent = Math.floor(data.uptime) + 's';
            document.getElementById('keys').textContent = data.totalSyncKeys;
            document.getElementById('entries').textContent = data.totalEntries;
          } catch (error) {
            document.getElementById('status').textContent = 'Error: ' + error.message;
          }
        }

        async function clearData() {
          try {
            const response = await fetch('/clear', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ apiKey: 'wplace_sync_2024' })
            });
            const data = await response.json();
            alert('Cleared ' + data.cleaned + ' old entries');
            refreshStatus();
          } catch (error) {
            alert('Error: ' + error.message);
          }
        }

        // Auto-refresh every 5 seconds
        refreshStatus();
        setInterval(refreshStatus, 5000);
      </script>
    </body>
    </html>
  `;
  res.send(html);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 WPlace Sync Server running on http://localhost:${PORT}`);
  console.log(`📊 Status page: http://localhost:${PORT}/`);
  console.log(`🔧 API endpoints:`);
  console.log(`   POST http://localhost:${PORT}/sync`);
  console.log(`   GET  http://localhost:${PORT}/poll`);
  console.log(`   GET  http://localhost:${PORT}/status`);
  console.log(`   POST http://localhost:${PORT}/clear`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down sync server...');
  process.exit(0);
});
