(async () => {
    // CONFIGURATION CONSTANTS
    const CONFIG = {
      COOLDOWN_DEFAULT: 31000,
      TRANSPARENCY_THRESHOLD: 100,
      WHITE_THRESHOLD: 250,
      LOG_INTERVAL: 10,
      THEME: {
        primary: "#000000",
        secondary: "#111111",
        accent: "#222222",
        text: "#ffffff",
        highlight: "#775ce3",
        success: "#00ff00",
        error: "#ff0000",
        warning: "#ffaa00",
      },
    };
  
    // BILINGUAL TEXT STRINGS
    const TEXTS = {
      pt: {
        title: "WPlace Auto-Image",
        initBot: "Iniciar Auto-BOT",
        uploadImage: "Upload da Imagem",
        resizeImage: "Redimensionar Imagem",
        selectPosition: "Selecionar Posição",
        startPainting: "Iniciar Pintura",
        stopPainting: "Parar Pintura",
        checkingColors: "🔍 Verificando cores disponíveis...",
        noColorsFound: "❌ Abra a paleta de cores no site e tente novamente!",
        colorsFound: "✅ {count} cores disponíveis encontradas",
        loadingImage: "🖼️ Carregando imagem...",
        imageLoaded: "✅ Imagem carregada com {count} pixels válidos",
        imageError: "❌ Erro ao carregar imagem",
        selectPositionAlert:
          "Pinte o primeiro pixel na localização onde deseja que a arte comece!",
        waitingPosition: "👆 Aguardando você pintar o pixel de referência...",
        positionSet: "✅ Posição definida com sucesso!",
        positionTimeout: "❌ Tempo esgotado para selecionar posição",
        startPaintingMsg: "🎨 Iniciando pintura...",
        paintingProgress: "🧱 Progresso: {painted}/{total} pixels...",
        noCharges: "⌛ Sem cargas. Aguardando {time}...",
        paintingStopped: "⏹️ Pintura interrompida pelo usuário",
        paintingComplete: "✅ Pintura concluída! {count} pixels pintados.",
        paintingError: "❌ Erro durante a pintura",
        missingRequirements:
          "❌ Carregue uma imagem e selecione uma posição primeiro",
        progress: "Progresso",
        pixels: "Pixels",
        charges: "Cargas",
        estimatedTime: "Tempo estimado",
        initMessage: "Clique em 'Iniciar Auto-BOT' para começar",
        waitingInit: "Aguardando inicialização...",
        resizeSuccess: "✅ Imagem redimensionada para {width}x{height}",
        paintingPaused: "⏸️ Pintura pausada na posição X: {x}, Y: {y}",
        captchaNeeded:
          "❗ Token CAPTCHA necessário. Pinte um pixel manualmente para continuar.",
        saveData: "Salvar Progresso",
        loadData: "Carregar Progresso", 
        autoSaved: "✅ Progresso salvo automaticamente",
        dataLoaded: "✅ Progresso carregado com sucesso",
        noSavedData: "❌ Nenhum progresso salvo encontrado",
        savedDataFound: "✅ Progresso salvo encontrado! Carregar para continuar?",
        savedDate: "Salvo em: {date}",
        clickLoadToContinue: "Clique em 'Carregar Progresso' para continuar.",
        exportProgress: "Exportar Progresso",
        importProgress: "Importar Progresso",
        progressExported: "✅ Progresso exportado com sucesso!",
        progressImported: "✅ Progresso importado com sucesso!",
        invalidProgressFile: "❌ Arquivo de progresso inválido",
        noProgressFileSelected: "❌ Nenhum arquivo selecionado",
        saveSlot: "Salvar Slot",
        loadSlot: "Carregar Slot",
        slotSaved: "✅ Salvo no slot {slot}!",
        slotLoaded: "✅ Carregado do slot {slot}!",
        slotEmpty: "❌ Slot {slot} está vazio",
        selectSlot: "Selecionar Slot (1-5):",
        autoSync: "Auto-Sync",
        autoSyncEnabled: "✅ Auto-sync habilitado",
        autoSyncDisabled: "❌ Auto-sync desabilitado",
        syncInterval: "Sincronizar a cada {seconds}s",
        realTimeSave: "Salvamento em Tempo Real",
      },
      en: {
        title: "WPlace Auto-Image",
        initBot: "Start Auto-BOT",
        uploadImage: "Upload Image",
        resizeImage: "Resize Image",
        selectPosition: "Select Position",
        startPainting: "Start Painting",
        stopPainting: "Stop Painting",
        checkingColors: "🔍 Checking available colors...",
        noColorsFound: "❌ Open the color palette on the site and try again!",
        colorsFound: "✅ {count} available colors found",
        loadingImage: "🖼️ Loading image...",
        imageLoaded: "✅ Image loaded with {count} valid pixels",
        imageError: "❌ Error loading image",
        selectPositionAlert:
          "Paint the first pixel at the location where you want the art to start!",
        waitingPosition: "👆 Waiting for you to paint the reference pixel...",
        positionSet: "✅ Position set successfully!",
        positionTimeout: "❌ Timeout for position selection",
        startPaintingMsg: "🎨 Starting painting...",
        paintingProgress: "🧱 Progress: {painted}/{total} pixels...",
        noCharges: "⌛ No charges. Waiting {time}...",
        paintingStopped: "⏹️ Painting stopped by user",
        paintingComplete: "✅ Painting complete! {count} pixels painted.",
        paintingError: "❌ Error during painting",
        missingRequirements: "❌ Load an image and select a position first",
        progress: "Progress",
        pixels: "Pixels",
        charges: "Charges",
        estimatedTime: "Estimated time",
        initMessage: "Click 'Start Auto-BOT' to begin",
        waitingInit: "Waiting for initialization...",
        resizeSuccess: "✅ Image resized to {width}x{height}",
        paintingPaused: "⏸️ Painting paused at position X: {x}, Y: {y}",
        captchaNeeded:
          "❗ CAPTCHA token needed. Paint one pixel manually to continue.",
        saveData: "Save Progress",
        loadData: "Load Progress",
        autoSaved: "✅ Progress saved automatically", 
        dataLoaded: "✅ Progress loaded successfully",
        noSavedData: "❌ No saved progress found",
        savedDataFound: "✅ Saved progress found! Load to continue?",
        savedDate: "Saved on: {date}",
        clickLoadToContinue: "Click 'Load Progress' to continue.",
        exportProgress: "Export Progress",
        importProgress: "Import Progress",
        progressExported: "✅ Progress exported successfully!",
        progressImported: "✅ Progress imported successfully!",
        invalidProgressFile: "❌ Invalid progress file",
        noProgressFileSelected: "❌ No file selected",
        saveSlot: "Save Slot",
        loadSlot: "Load Slot",
        slotSaved: "✅ Saved to slot {slot}!",
        slotLoaded: "✅ Loaded from slot {slot}!",
        slotEmpty: "❌ Slot {slot} is empty",
        selectSlot: "Select Slot (1-5):",
        autoSync: "Auto-Sync",
        autoSyncEnabled: "✅ Auto-sync enabled",
        autoSyncDisabled: "❌ Auto-sync disabled", 
        syncInterval: "Sync every {seconds}s",
        realTimeSave: "Real-time Save",
      },
    };
  
      // GLOBAL STATE
         const state = {
         running: false,
         imageLoaded: false,
         processing: false,
         totalPixels: 0,
         paintedPixels: 0,
         availableColors: [],
         currentCharges: 0,
         cooldown: CONFIG.COOLDOWN_DEFAULT,
         imageData: null,
         stopFlag: false,
         colorsChecked: false,
         startPosition: null,
         selectingPosition: false,
         region: null,
         minimized: false,
         lastPosition: { x: 0, y: 0 },
         estimatedTime: 0,
         language: "en",
         autoSync: true, // THÊM: Auto-sync enabled
         syncInterval: 5, // THÊM: Sync every 5 seconds
         currentSlot: 1, // THÊM: Current active slot
         ipAddress: null, // THÊM: IP address
         profileId: null, // THÊM: Unique profile ID
         multiIpSync: true, // THÊM: Allow sync between different IPs
         startTime: null, // THÊM: Timestamp khi bắt đầu painting
         lastSyncTime: null, // THÊM: Timestamp của lần sync cuối
   };
  
    // Global variable to store the captured CAPTCHA token.
    let capturedCaptchaToken = null;
  
    // Intercept the original window.fetch function to "listen" for network requests.
    const originalFetch = window.fetch;
    window.fetch = async (url, options) => {
      // Check if the request is for painting a pixel on wplace.
      if (
        typeof url === "string" &&
        url.includes("https://backend.wplace.live/s0/pixel/")
      ) {
        try {
          const payload = JSON.parse(options.body);
          // If the request body contains the 't' field, it's our CAPTCHA token.
          if (payload.t) {
            console.log("✅ CAPTCHA Token Captured:", payload.t);
            // Store the token for our bot to use.
            capturedCaptchaToken = payload.t;
            // Notify the user that the token is captured and they can start the bot.
            if (
              document
                .querySelector("#statusText")
                ?.textContent.includes("CAPTCHA")
            ) {
              Utils.showAlert(
                "Token captured successfully! You can start the bot now.",
                "success"
              );
              updateUI("colorsFound", "success", {
                count: state.availableColors.length,
              });
            }
          }
        } catch (e) {
          /* Ignore errors if the request body isn't valid JSON */
        }
      }
      // Finally, execute the original request, whether we inspected it or not.
      return originalFetch(url, options);
    };
  
    async function detectLanguage() {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        state.language = data.country === "BR" ? "pt" : "en";
      } catch {
        state.language = "en";
      }
    }
  
    // UTILITY FUNCTIONS
    const Utils = {
      sleep: (ms) => new Promise((r) => setTimeout(r, ms)),
  
      colorDistance: (a, b) =>
        Math.sqrt(
          Math.pow(a[0] - b[0], 2) +
            Math.pow(a[1] - b[1], 2) +
            Math.pow(a[2] - b[2], 2)
        ),
  
      createImageUploader: () =>
        new Promise((resolve) => {
          const input = document.createElement("input");
          input.type = "file";
          input.accept = "image/png,image/jpeg";
          input.onchange = () => {
            const fr = new FileReader();
            fr.onload = () => resolve(fr.result);
            fr.readAsDataURL(input.files[0]);
          };
          input.click();
        }),
  
      extractAvailableColors: () => {
        const colorElements = document.querySelectorAll('[id^="color-"]');
        return Array.from(colorElements)
          .filter((el) => !el.querySelector("svg"))
          .filter((el) => {
            const id = parseInt(el.id.replace("color-", ""));
            return id !== 0 && id !== 5;
          })
          .map((el) => {
            const id = parseInt(el.id.replace("color-", ""));
            const rgbStr = el.style.backgroundColor.match(/\d+/g);
            const rgb = rgbStr ? rgbStr.map(Number) : [0, 0, 0];
            return { id, rgb };
          });
      },
  
      formatTime: (ms) => {
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / (1000 * 60)) % 60);
        const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
        const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  
        let result = "";
        if (days > 0) result += `${days}d `;
        if (hours > 0 || days > 0) result += `${hours}h `;
        if (minutes > 0 || hours > 0 || days > 0) result += `${minutes}m `;
        result += `${seconds}s`;
  
        return result;
      },
  
      // Save/Load Progress Functions
      saveProgress: () => {
        try {
          const progressData = {
            version: "1.0",
            timestamp: Date.now(),
            state: {
              imageLoaded: state.imageLoaded,
              totalPixels: state.totalPixels,
              paintedPixels: state.paintedPixels,
              lastPosition: state.lastPosition,
              startPosition: state.startPosition,
              region: state.region,
              paintedMap: state.paintedMap,
              imageData: state.imageData,
              availableColors: state.availableColors,
              colorsChecked: state.colorsChecked,
              language: state.language
            }
          };
          
          localStorage.setItem('wplace-auto-image-progress', JSON.stringify(progressData));
          console.log('✅ Progress saved successfully');
          return true;
        } catch (error) {
          console.error('❌ Error saving progress:', error);
          return false;
        }
      },
  
      loadProgress: () => {
        try {
          const savedData = localStorage.getItem('wplace-auto-image-progress');
          if (!savedData) {
            return null;
          }
          
          const progressData = JSON.parse(savedData);
          
          // Validate data structure
          if (!progressData.version || !progressData.state) {
            return null;
          }
          
          return progressData;
        } catch (error) {
          console.error('❌ Error loading progress:', error);
          return null;
        }
      },
  
      restoreProgress: (progressData) => {
        try {
          const savedState = progressData.state;
          
          // Restore state
          state.imageLoaded = savedState.imageLoaded;
          state.totalPixels = savedState.totalPixels;
          state.paintedPixels = savedState.paintedPixels;
          state.lastPosition = savedState.lastPosition || { x: 0, y: 0 };
          state.startPosition = savedState.startPosition;
          state.region = savedState.region;
          state.paintedMap = savedState.paintedMap;
          state.imageData = savedState.imageData;
          state.availableColors = savedState.availableColors;
          state.language = savedState.language;
          state.colorsChecked = savedState.availableColors && savedState.availableColors.length > 0;
          
          // Update UI to reflect restored state
          if (state.imageLoaded) {
            const initBotBtn = document.querySelector("#initBotBtn");
            const uploadBtn = document.querySelector("#uploadBtn");
            const resizeBtn = document.querySelector("#resizeBtn");
            const selectPosBtn = document.querySelector("#selectPosBtn");
            const startBtn = document.querySelector("#startBtn");
            const saveBtn = document.querySelector("#saveBtn");
            const exportBtn = document.querySelector("#exportBtn");
            const progressBar = document.querySelector("#progressBar");
            
            // Show/hide appropriate buttons based on state
            if (state.colorsChecked) {
              initBotBtn.style.display = "none";
              uploadBtn.disabled = false;
              selectPosBtn.disabled = false;
            } else {
              initBotBtn.style.display = "block";
              uploadBtn.disabled = true;
              selectPosBtn.disabled = true;
            }
            
            resizeBtn.disabled = false;
            saveBtn.disabled = false;
            if (exportBtn) exportBtn.disabled = false;
            if (saveSlotBtn) saveSlotBtn.disabled = false;
            
            if (state.startPosition && state.region) {
              selectPosBtn.disabled = false;
              startBtn.disabled = false;
            }
            
            // Update progress bar
            const progress = state.totalPixels > 0 ? Math.round((state.paintedPixels / state.totalPixels) * 100) : 0;
            progressBar.style.width = `${progress}%`;
            
            // Update status message based on progress
            if (state.paintedPixels > 0) {
              if (state.lastPosition.x > 0 || state.lastPosition.y > 0) {
                updateUI("paintingPaused", "warning", { 
                  x: state.lastPosition.x, 
                  y: state.lastPosition.y 
                });
              } else {
                updateUI("paintingProgress", "default", {
                  painted: state.paintedPixels,
                  total: state.totalPixels,
                });
              }
            } else {
              updateUI("imageLoaded", "success", { count: state.totalPixels });
            }
          }
          
          // Update stats to show current progress
          updateStats();
          return true;
        } catch (error) {
          console.error('❌ Error restoring progress:', error);
          return false;
        }
      },
  
      clearProgress: () => {
        try {
          localStorage.removeItem('wplace-auto-image-progress');
          console.log('✅ Progress data cleared');
          return true;
        } catch (error) {
          console.error('❌ Error clearing progress:', error);
          return false;
        }
      },
  
      hasSavedProgress: () => {
        return localStorage.getItem('wplace-auto-image-progress') !== null;
      },

      // THÊM: Save to specific slot (1-5)
      saveToSlot: (slotNumber) => {
        try {
          if (slotNumber < 1 || slotNumber > 5) {
            console.error('❌ Invalid slot number. Must be 1-5');
            return false;
          }
          
          const progressData = {
            version: "1.0",
            timestamp: Date.now(),
            slotNumber: slotNumber,
            state: {
              imageLoaded: state.imageLoaded,
              totalPixels: state.totalPixels,
              paintedPixels: state.paintedPixels,
              lastPosition: state.lastPosition,
              startPosition: state.startPosition,
              region: state.region,
              paintedMap: state.paintedMap,
              imageData: state.imageData,
              availableColors: state.availableColors,
              colorsChecked: state.colorsChecked,
              language: state.language
            }
          };
          
          const slotKey = `wplace-slot-${slotNumber}`;
          localStorage.setItem(slotKey, JSON.stringify(progressData));
          console.log(`✅ Progress saved to slot ${slotNumber}`);
          return true;
        } catch (error) {
          console.error(`❌ Error saving to slot ${slotNumber}:`, error);
          return false;
        }
      },

      // THÊM: Load from specific slot (1-5)
      loadFromSlot: (slotNumber) => {
        try {
          if (slotNumber < 1 || slotNumber > 5) {
            console.error('❌ Invalid slot number. Must be 1-5');
            return null;
          }
          
          const slotKey = `wplace-slot-${slotNumber}`;
          const savedData = localStorage.getItem(slotKey);
          if (!savedData) {
            console.log(`❌ Slot ${slotNumber} is empty`);
            return null;
          }
          
          const progressData = JSON.parse(savedData);
          
          // Validate data structure
          if (!progressData.version || !progressData.state) {
            console.error(`❌ Invalid data in slot ${slotNumber}`);
            return null;
          }
          
          console.log(`✅ Loaded progress from slot ${slotNumber}`);
          return progressData;
        } catch (error) {
          console.error(`❌ Error loading from slot ${slotNumber}:`, error);
          return null;
        }
      },

      // THÊM: Get slot info (for UI display)
      getSlotInfo: (slotNumber) => {
        try {
          const slotKey = `wplace-slot-${slotNumber}`;
          const savedData = localStorage.getItem(slotKey);
          if (!savedData) {
            return null;
          }
          
          const progressData = JSON.parse(savedData);
          return {
            slotNumber: slotNumber,
            timestamp: progressData.timestamp,
            totalPixels: progressData.state?.totalPixels || 0,
            paintedPixels: progressData.state?.paintedPixels || 0,
            imageLoaded: progressData.state?.imageLoaded || false
          };
        } catch (error) {
          return null;
        }
      },

      // THÊM: Get all slots info
      getAllSlotsInfo: () => {
        const slotsInfo = [];
        for (let i = 1; i <= 5; i++) {
          const info = Utils.getSlotInfo(i);
          slotsInfo.push(info);
        }
        return slotsInfo;
      },

      // THÊM: Real-time Auto Save (save current progress to current slot)
      autoSaveCurrentSlot: () => {
        if (state.imageLoaded && state.currentSlot >= 1 && state.currentSlot <= 5) {
          const success = Utils.saveToSlot(state.currentSlot);
          if (success) {
            console.log(`🔄 Auto-saved to slot ${state.currentSlot} (${state.paintedPixels}/${state.totalPixels} pixels)`);
          }
          return success;
        }
        return false;
      },

             // THÊM: Sync progress to all other profiles/tabs và theo IP
       syncToAllProfiles: () => {
         try {
           // Update last sync time
           state.lastSyncTime = Date.now();
           
           // Broadcast current progress to other tabs/profiles
           const syncData = {
             type: 'wplace_sync',
             timestamp: Date.now(),
             sourceSlot: state.currentSlot,
             profileId: state.profileId || 'unknown',
             ipAddress: state.ipAddress || 'unknown',
             progress: {
               paintedPixels: state.paintedPixels,
               totalPixels: state.totalPixels,
               lastPosition: state.lastPosition,
               paintedMap: state.paintedMap
             }
           };
           
           // Use localStorage events to sync between tabs cùng browser
           localStorage.setItem('wplace-sync-broadcast', JSON.stringify(syncData));
           localStorage.removeItem('wplace-sync-broadcast'); // Trigger storage event
           
           // THÊM: Sync qua WebSocket hoặc Server nếu có
           Utils.syncToNetwork(syncData);
           
           console.log(`📡 Broadcasted progress: ${state.paintedPixels}/${state.totalPixels} pixels to other profiles (IP: ${state.ipAddress})`);
           return true;
         } catch (error) {
           console.error('❌ Error syncing to other profiles:', error);
           return false;
         }
       },

      // THÊM: Sync qua localhost server
      syncToNetwork: async (syncData) => {
        try {
          // Gửi sync data đến localhost server
          const response = await fetch('http://localhost:3000/sync', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...syncData,
              apiKey: 'wplace_sync_2024',
              version: '1.0'
            })
          });
          
          if (response.ok) {
            console.log('🌐 Localhost sync successful');
          } else {
            throw new Error(`Server responded with ${response.status}`);
          }
        } catch (error) {
          console.log('🌐 Localhost sync failed: ' + error.message);
          console.log('💡 Make sure sync server is running: npm start in sync-server folder');
        }
      },

             // THÊM: Detect IP và Profile ID
       detectNetworkInfo: async () => {
         try {
           // Detect IP address - sử dụng ipify.org thay vì ipapi.co (tránh lỗi 429)
           const ipResponse = await fetch('https://api.ipify.org?format=json');
           const ipData = await ipResponse.json();
           state.ipAddress = ipData.ip;
           
           // Generate unique profile ID
           state.profileId = `profile_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
           
           console.log(`🌐 Network info: IP=${state.ipAddress}, Profile=${state.profileId}`);
           
           // Update sync tab if it's active
           const activeTab = document.querySelector(".wplace-tab.active");
           if (activeTab && activeTab.getAttribute("data-tab") === "sync") {
             updateSyncTab();
           }
           
           return true;
         } catch (error) {
           console.error('❌ Error detecting network info:', error);
           // Fallback IP detection
           try {
             const fallbackResponse = await fetch('https://httpbin.org/ip');
             const fallbackData = await fallbackResponse.json();
             state.ipAddress = fallbackData.origin;
           } catch (fallbackError) {
             state.ipAddress = 'unknown';
           }
           state.profileId = `profile_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
           console.log(`🌐 Fallback network info: IP=${state.ipAddress}, Profile=${state.profileId}`);
           
           // Update sync tab if it's active
           const activeTab = document.querySelector(".wplace-tab.active");
           if (activeTab && activeTab.getAttribute("data-tab") === "sync") {
             updateSyncTab();
           }
           
           return false;
         }
       },

      // THÊM: Listen for sync from other profiles (theo IP)
      startSyncListener: () => {
        // LocalStorage listener cho cùng browser
        window.addEventListener('storage', (e) => {
          if (e.key === 'wplace-sync-broadcast' && e.newValue) {
            Utils.processSyncData(JSON.parse(e.newValue));
          }
        });
        
        // THÊM: Network listener cho cùng IP
        Utils.startNetworkListener();
        
        console.log('👂 Sync listener started - will receive updates from other profiles (IP: ' + state.ipAddress + ')');
      },

             // THÊM: Process sync data (common function) - ƯU TIÊN PROFILE CÓ PROGRESS CAO NHẤT
       processSyncData: (syncData) => {
         try {
           // Kiểm tra slot và profile (cho phép sync giữa các IP khác nhau nếu bật multiIpSync)
           const ipMatch = state.multiIpSync || syncData.ipAddress === state.ipAddress;
           if (syncData.type === 'wplace_sync' && 
               syncData.sourceSlot === state.currentSlot &&
               ipMatch &&
               syncData.profileId !== state.profileId) {
            
                         console.log(`📥 Received sync from ${syncData.profileId} (IP: ${syncData.ipAddress}): ${syncData.progress.paintedPixels}/${syncData.progress.totalPixels} pixels`);
             
             // Update current progress if we're on the same project (cho phép sync giữa IP khác nhau)
             if (state.imageLoaded && state.totalPixels === syncData.progress.totalPixels) {
              const oldPainted = state.paintedPixels;
              
              // LUÔN LUÔN sync nếu profile khác có progress cao hơn
              if (syncData.progress.paintedPixels > state.paintedPixels) {
                console.log(`🔄 Profile ${syncData.profileId} has higher progress (${syncData.progress.paintedPixels} > ${state.paintedPixels}), syncing...`);
                
                state.paintedPixels = syncData.progress.paintedPixels;
                state.lastPosition = syncData.progress.lastPosition;
                
                // Merge painted maps
                if (syncData.progress.paintedMap && state.paintedMap) {
                  for (let y = 0; y < state.paintedMap.length; y++) {
                    for (let x = 0; x < state.paintedMap[y].length; x++) {
                      if (syncData.progress.paintedMap[y] && syncData.progress.paintedMap[y][x]) {
                        state.paintedMap[y][x] = true;
                      }
                    }
                  }
                }
                
                // Update UI
                updateStats();
                const progress = state.totalPixels > 0 ? Math.round((state.paintedPixels / state.totalPixels) * 100) : 0;
                const progressBar = document.querySelector("#progressBar");
                if (progressBar) progressBar.style.width = `${progress}%`;
                
                Utils.showAlert(`🔄 Synced +${state.paintedPixels - oldPainted} pixels from ${syncData.profileId}`, "success");
                
                // Auto-save the synced progress
                Utils.autoSaveCurrentSlot();
                
                // Nếu đang paint, dừng lại để tránh conflict
                if (state.running) {
                  console.log(`⏸️ Stopping current painting to sync with ${syncData.profileId}`);
                  state.running = false;
                  updateUI();
                }
              } else if (syncData.progress.paintedPixels < state.paintedPixels) {
                // Nếu profile này có progress cao hơn, gửi sync ngược lại
                console.log(`📤 Profile ${state.profileId} has higher progress (${state.paintedPixels} > ${syncData.progress.paintedPixels}), sending sync back`);
                Utils.syncToAllProfiles();
              } else {
                console.log(`⚖️ Both profiles have same progress (${state.paintedPixels}), no sync needed`);
              }
            }
          }
        } catch (error) {
          console.error('❌ Error processing sync data:', error);
        }
      },

      // THÊM: Network listener (polling method) - SYNC NGAY LẬP TỨC
      startNetworkListener: () => {
        // Clear existing network interval if any
        if (window.networkInterval) {
          clearInterval(window.networkInterval);
        }
        
        // Poll localhost server với interval bằng 1/2 sync interval để nhận sync từ profiles khác
        const pollInterval = Math.max(5, Math.floor(state.syncInterval / 2)); // Tối thiểu 5s, tối đa 1/2 sync interval
                 window.networkInterval = setInterval(async () => {
           if (state.autoSync && state.imageLoaded) {
             try {
               const multiIpParam = state.multiIpSync ? '&multiIp=true' : '';
               const response = await fetch(`http://localhost:3000/poll?ip=${state.ipAddress}&slot=${state.currentSlot}&profile=${state.profileId}${multiIpParam}`);
               if (response.ok) {
                 const syncData = await response.json();
                 if (syncData && syncData.length > 0) {
                   console.log(`📥 Received ${syncData.length} sync entries from server`);
                   syncData.forEach(data => Utils.processSyncData(data));
                 }
               }
             } catch (error) {
               // Fallback to localStorage only
               console.log('🌐 Localhost polling failed: ' + error.message);
             }
           }
         }, pollInterval * 1000); // Poll with configurable interval
        
        console.log(`🌐 Localhost listener started - polling for updates from other profiles every ${pollInterval}s`);
      },

      // THÊM: Start real-time sync intervals - SYNC LIÊN TỤC
      startAutoSync: () => {
        if (window.syncInterval) {
          clearInterval(window.syncInterval);
        }
        
        window.syncInterval = setInterval(() => {
          if (state.autoSync && state.imageLoaded) {
            // Luôn luôn sync, không chỉ khi đang running
            Utils.autoSaveCurrentSlot();
            Utils.syncToAllProfiles();
          }
        }, state.syncInterval * 1000);
        
        console.log(`🔄 Auto-sync started: syncing every ${state.syncInterval}s (always, not just when running)`);
      },

      // THÊM: Stop auto-sync
      stopAutoSync: () => {
        if (window.syncInterval) {
          clearInterval(window.syncInterval);
          window.syncInterval = null;
          console.log('⏹️ Auto-sync stopped');
        }
        if (window.networkInterval) {
          clearInterval(window.networkInterval);
          window.networkInterval = null;
          console.log('⏹️ Network listener stopped');
        }
      },

      // THÊM: Check initial sync khi khởi động
      checkInitialSync: async () => {
        if (!state.autoSync || !state.imageLoaded) return;
        
                 try {
           console.log('🔍 Checking for existing sync data on startup...');
           const multiIpParam = state.multiIpSync ? '&multiIp=true' : '';
           const response = await fetch(`http://localhost:3000/poll?ip=${state.ipAddress}&slot=${state.currentSlot}&profile=${state.profileId}${multiIpParam}`);
           if (response.ok) {
            const syncData = await response.json();
            if (syncData && syncData.length > 0) {
              console.log(`📥 Found ${syncData.length} existing sync entries on startup`);
              
              // Tìm profile có progress cao nhất
              let highestProgress = 0;
              let bestSyncData = null;
              
              syncData.forEach(data => {
                if (data.progress && data.progress.paintedPixels > highestProgress) {
                  highestProgress = data.progress.paintedPixels;
                  bestSyncData = data;
                }
              });
              
              // Sync với profile có progress cao nhất
              if (bestSyncData && highestProgress > state.paintedPixels) {
                console.log(`🏆 Found profile with higher progress: ${bestSyncData.profileId} (${highestProgress} > ${state.paintedPixels})`);
                Utils.processSyncData(bestSyncData);
              }
            }
          }
        } catch (error) {
          console.log('🌐 Initial sync check failed: ' + error.message);
        }
      },

      // THÊM: Export Progress Function
      exportProgress: () => {
        try {
          const progressData = {
            version: "1.0",
            type: "wplace_progress_export",
            timestamp: Date.now(),
            exportTime: new Date().toISOString(),
            state: {
              imageLoaded: state.imageLoaded,
              totalPixels: state.totalPixels,
              paintedPixels: state.paintedPixels,
              lastPosition: state.lastPosition,
              startPosition: state.startPosition,
              region: state.region,
              paintedMap: state.paintedMap,
              imageData: state.imageData,
              availableColors: state.availableColors,
              colorsChecked: state.colorsChecked,
              language: state.language
            }
          };
          
          const dataStr = JSON.stringify(progressData, null, 2);
          const dataBlob = new Blob([dataStr], {type: 'application/json'});
          const url = URL.createObjectURL(dataBlob);
          
          const link = document.createElement('a');
          link.href = url;
          link.download = `wplace-progress-${new Date().toISOString().slice(0,19).replace(/[:.]/g, '-')}.json`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          
          console.log('✅ Progress exported successfully');
          return true;
        } catch (error) {
          console.error('❌ Error exporting progress:', error);
          return false;
        }
      },

      // THÊM: Import Progress Function  
      importProgress: () => {
        return new Promise((resolve) => {
          const input = document.createElement('input');
          input.type = 'file';
          input.accept = '.json';
          input.onchange = (event) => {
            const file = event.target.files[0];
            if (!file) {
              resolve(null);
              return;
            }
            
            const reader = new FileReader();
            reader.onload = (e) => {
              try {
                const progressData = JSON.parse(e.target.result);
                console.log('📥 Imported data:', progressData);
                
                // Validate data structure - chấp nhận cả file export và localStorage format
                if (progressData.version && progressData.state) {
                  // Chấp nhận cả 2 format: export file hoặc localStorage
                  if (progressData.type === "wplace_progress_export" || !progressData.type) {
                    resolve(progressData);
                    return;
                  }
                }
                
                throw new Error("Invalid progress file format");
              } catch (error) {
                console.error('❌ Error parsing progress file:', error);
                resolve(null);
              }
            };
            reader.readAsText(file);
          };
          input.click();
        });
      },


  
      showAlert: (message, type = "info") => {
        const alert = document.createElement("div");
        alert.style.position = "fixed";
        alert.style.top = "20px";
        alert.style.left = "50%";
        alert.style.transform = "translateX(-50%)";
        alert.style.padding = "15px 20px";
        alert.style.background = CONFIG.THEME[type] || CONFIG.THEME.accent;
        alert.style.color = CONFIG.THEME.text;
        alert.style.borderRadius = "5px";
        alert.style.zIndex = "10000";
        alert.style.boxShadow = "0 3px 10px rgba(0,0,0,0.3)";
        alert.style.display = "flex";
        alert.style.alignItems = "center";
        alert.style.gap = "10px";
  
        const icons = {
          error: "exclamation-circle",
          success: "check-circle",
          warning: "exclamation-triangle",
          info: "info-circle",
        };
  
        alert.innerHTML = `
          <i class="fas fa-${icons[type] || "info-circle"}"></i>
          <span>${message}</span>
        `;
  
        document.body.appendChild(alert);
  
        setTimeout(() => {
          alert.style.opacity = "0";
          alert.style.transition = "opacity 0.5s";
          setTimeout(() => alert.remove(), 500);
        }, 3000);
      },
  
      calculateEstimatedTime: (remainingPixels, currentCharges, cooldown) => {
        const pixelsPerCharge = currentCharges > 0 ? currentCharges : 0;
        const fullCycles = Math.ceil(
          (remainingPixels - pixelsPerCharge) / Math.max(currentCharges, 1)
        );
        return fullCycles * cooldown + (remainingPixels - 1) * 100;
      },
  
      isWhitePixel: (r, g, b) => {
        return (
          r >= CONFIG.WHITE_THRESHOLD &&
          g >= CONFIG.WHITE_THRESHOLD &&
          b >= CONFIG.WHITE_THRESHOLD
        );
      },
  
      t: (key, params = {}) => {
        let text = TEXTS[state.language][key] || TEXTS.en[key] || key;
        for (const [k, v] of Object.entries(params)) {
          text = text.replace(`{${k}}`, v);
        }
        return text;
      },
    };
  
    // WPLACE API SERVICE
    const WPlaceService = {
      async paintPixelInRegion(regionX, regionY, pixelX, pixelY, color) {
        try {
          // Construct the payload including the captured 't' token.
          const payload = {
            coords: [pixelX, pixelY],
            colors: [color],
            t: capturedCaptchaToken,
          };
          const res = await fetch(
            `https://backend.wplace.live/s0/pixel/${regionX}/${regionY}`,
            {
              method: "POST",
              headers: { "Content-Type": "text/plain;charset=UTF-8" },
              credentials: "include",
              body: JSON.stringify(payload),
            }
          );
  
          // If we get a 403 Forbidden error, our token is likely expired.
          if (res.status === 403) {
            console.error(
              "❌ 403 Forbidden. CAPTCHA token might be invalid or expired."
            );
            capturedCaptchaToken = null; // Invalidate our stored token.
            return "token_error"; // Return a special status to stop the bot.
          }
  
          const data = await res.json();
          return data?.painted === 1;
        } catch (e) {
          console.error("Paint request failed:", e);
          return false;
        }
      },
  
      async getCharges() {
        try {
          const res = await fetch("https://backend.wplace.live/me", {
            credentials: "include",
          });
          const data = await res.json();
          return {
            charges: data.charges?.count || 0,
            cooldown: data.charges?.cooldownMs || CONFIG.COOLDOWN_DEFAULT,
          };
        } catch {
          return { charges: 0, cooldown: CONFIG.COOLDOWN_DEFAULT };
        }
      },
    };
  
    class ImageProcessor {
      constructor(imageSrc) {
        this.imageSrc = imageSrc;
        this.img = new Image();
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.previewCanvas = document.createElement("canvas");
        this.previewCtx = this.previewCanvas.getContext("2d");
      }
  
      async load() {
        return new Promise((resolve, reject) => {
          this.img.onload = () => {
            this.canvas.width = this.img.width;
            this.canvas.height = this.img.height;
            this.ctx.drawImage(this.img, 0, 0);
            resolve();
          };
          this.img.onerror = reject;
          this.img.src = this.imageSrc;
        });
      }
  
      getPixelData() {
        return this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
          .data;
      }
  
      getDimensions() {
        return { width: this.canvas.width, height: this.canvas.height };
      }
  
      resize(newWidth, newHeight) {
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = newWidth;
        tempCanvas.height = newHeight;
        const tempCtx = tempCanvas.getContext("2d");
  
        tempCtx.drawImage(this.img, 0, 0, newWidth, newHeight);
  
        this.canvas.width = newWidth;
        this.canvas.height = newHeight;
        this.ctx.drawImage(tempCanvas, 0, 0);
  
        return this.getPixelData();
      }
  
      generatePreview(newWidth, newHeight) {
        this.previewCanvas.width = newWidth;
        this.previewCanvas.height = newHeight;
        this.previewCtx.imageSmoothingEnabled = false;
        this.previewCtx.drawImage(this.img, 0, 0, newWidth, newHeight);
        return this.previewCanvas.toDataURL();
      }
    }
  
    function findClosestColor(rgb, palette) {
      return palette.reduce(
        (closest, current) => {
          const currentDistance = Utils.colorDistance(rgb, current.rgb);
          return currentDistance < closest.distance
            ? { color: current, distance: currentDistance }
            : closest;
        },
        { color: palette[0], distance: Utils.colorDistance(rgb, palette[0].rgb) }
      ).color.id;
    }
  
    async function createUI() {
      await detectLanguage();
  
      const fontAwesome = document.createElement("link");
      fontAwesome.rel = "stylesheet";
      fontAwesome.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
      document.head.appendChild(fontAwesome);
  
      const style = document.createElement("style");
      style.textContent = `
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 255, 0, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(0, 255, 0, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 255, 0, 0); }
        }
        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        #wplace-image-bot-container {
          position: fixed;
          top: 20px;
          left: 20px;
          width: 320px;
          background: ${CONFIG.THEME.primary};
          border: 1px solid ${CONFIG.THEME.accent};
          border-radius: 8px;
          padding: 0;
          box-shadow: 0 5px 15px rgba(0,0,0,0.5);
          z-index: 9998;
          font-family: 'Segoe UI', Roboto, sans-serif;
          color: ${CONFIG.THEME.text};
          animation: slideIn 0.4s ease-out;
          overflow: hidden;
        }
        .wplace-header {
          padding: 8px 12px;
          background: ${CONFIG.THEME.secondary};
          color: ${CONFIG.THEME.highlight};
          font-size: 14px;
          font-weight: 600;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: move;
          user-select: none;
        }
        
        .wplace-tabs {
          display: flex;
          background: ${CONFIG.THEME.accent};
          border-bottom: 1px solid ${CONFIG.THEME.accent};
        }
        
        .wplace-tab {
          flex: 1;
          padding: 8px 12px;
          background: ${CONFIG.THEME.secondary};
          color: ${CONFIG.THEME.text};
          border: none;
          cursor: pointer;
          font-size: 12px;
          font-weight: 600;
          transition: all 0.2s;
          border-right: 1px solid ${CONFIG.THEME.accent};
        }
        
        .wplace-tab:last-child {
          border-right: none;
        }
        
        .wplace-tab.active {
          background: ${CONFIG.THEME.highlight};
          color: black;
        }
        
        .wplace-tab:hover {
          background: ${CONFIG.THEME.accent};
        }
        
        .wplace-tab-content {
          display: none;
          padding: 12px;
        }
        
        .wplace-tab-content.active {
          display: block;
        }
        .wplace-header-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .wplace-header-controls {
          display: flex;
          gap: 10px;
        }
        .wplace-header-btn {
          background: none;
          border: none;
          color: ${CONFIG.THEME.text};
          cursor: pointer;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .wplace-header-btn:hover {
          opacity: 1;
        }
        .wplace-content {
          display: block;
        }
        .wplace-controls {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 12px;
        }
        .wplace-controls-row {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        .wplace-controls-row .wplace-btn {
          flex: 1;
          min-width: 0;
          padding: 8px 6px;
          font-size: 12px;
        }
        .wplace-btn {
          padding: 8px 10px;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s;
          font-size: 13px;
        }
        .wplace-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        .wplace-btn-primary {
          background: ${CONFIG.THEME.accent};
          color: white;
        }
        .wplace-btn-upload {
          background: ${CONFIG.THEME.secondary};
          color: white;
          border: 1px dashed ${CONFIG.THEME.text};
        }
        .wplace-btn-start {
          background: ${CONFIG.THEME.success};
          color: white;
        }
        .wplace-btn-stop {
          background: ${CONFIG.THEME.error};
          color: white;
        }
        .wplace-btn-select {
          background: ${CONFIG.THEME.highlight};
          color: black;
        }
        .wplace-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none !important;
        }
        .wplace-stats {
          background: ${CONFIG.THEME.secondary};
          padding: 8px;
          border-radius: 6px;
          margin-bottom: 10px;
        }
        
        .wplace-progress-detail {
          background: ${CONFIG.THEME.secondary};
          padding: 10px;
          border-radius: 6px;
          margin-bottom: 10px;
        }
        
        .wplace-progress-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4px 0;
          font-size: 12px;
        }
        
        .wplace-progress-label {
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0.8;
        }
        
        .wplace-progress-value {
          font-weight: 600;
          color: ${CONFIG.THEME.highlight};
        }
        .wplace-stat-item {
          display: flex;
          justify-content: space-between;
          padding: 4px 0;
          font-size: 12px;
        }
        .wplace-stat-label {
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0.8;
        }
        .wplace-progress {
          width: 100%;
          background: ${CONFIG.THEME.secondary};
          border-radius: 4px;
          margin: 8px 0;
          overflow: hidden;
        }
        .wplace-progress-bar {
          height: 8px;
          background: ${CONFIG.THEME.highlight};
          transition: width 0.3s;
        }
        .wplace-status {
          padding: 6px;
          border-radius: 4px;
          text-align: center;
          font-size: 12px;
        }
        .status-default {
          background: rgba(255,255,255,0.1);
        }
        .status-success {
          background: rgba(0, 255, 0, 0.1);
          color: ${CONFIG.THEME.success};
        }
        .status-error {
          background: rgba(255, 0, 0, 0.1);
          color: ${CONFIG.THEME.error};
        }
        .status-warning {
          background: rgba(255, 165, 0, 0.1);
          color: orange;
        }
        #paintEffect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          border-radius: 8px;
        }
        .position-info {
          font-size: 13px;
          margin-top: 5px;
          padding: 5px;
          background: ${CONFIG.THEME.secondary};
          border-radius: 4px;
          text-align: center;
        }
        .wplace-minimized .wplace-content {
          display: none;
        }
        .resize-container {
          display: none;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: ${CONFIG.THEME.primary};
          padding: 20px;
          border-radius: 8px;
          z-index: 10000;
          box-shadow: 0 0 20px rgba(0,0,0,0.5);
          max-width: 90%;
          max-height: 90%;
          overflow: auto;
        }
        .resize-preview {
          max-width: 100%;
          max-height: 300px;
          margin: 10px 0;
          border: 1px solid ${CONFIG.THEME.accent};
        }
        .resize-controls {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 15px;
        }
        .resize-slider {
          width: 100%;
        }
        .resize-buttons {
          display: flex;
          gap: 10px;
        }
        .resize-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.7);
          z-index: 9999;
          display: none;
        }
      `;
      document.head.appendChild(style);
  
             const container = document.createElement("div");
       container.id = "wplace-image-bot-container";
       container.innerHTML = `
         <div class="wplace-header">
           <div class="wplace-header-title">
             <i class="fas fa-image"></i>
             <span>${Utils.t("title")}</span>
           </div>
           <div class="wplace-header-controls">
             <button id="minimizeBtn" class="wplace-header-btn" title="${Utils.t(
               "minimize"
             )}">
               <i class="fas fa-minus"></i>
             </button>
           </div>
         </div>
         
         <div class="wplace-tabs">
           <button class="wplace-tab active" data-tab="main">
             <i class="fas fa-cogs"></i> Main
           </button>
           <button class="wplace-tab" data-tab="progress">
             <i class="fas fa-chart-line"></i> Progress
           </button>
           <button class="wplace-tab" data-tab="sync">
             <i class="fas fa-sync"></i> Sync
           </button>
         </div>
         
         <div class="wplace-content">
           <!-- Main Tab -->
           <div id="mainTab" class="wplace-tab-content active">
             <div class="wplace-controls">
               <div class="wplace-controls-row">
                 <button id="initBotBtn" class="wplace-btn wplace-btn-primary">
                   <i class="fas fa-robot"></i>
                   <span>Init</span>
                 </button>
                 <button id="uploadBtn" class="wplace-btn wplace-btn-upload" disabled>
                   <i class="fas fa-upload"></i>
                   <span>Upload</span>
                 </button>
               </div>
               
               <div class="wplace-controls-row">
                 <button id="resizeBtn" class="wplace-btn wplace-btn-primary" disabled>
                   <i class="fas fa-expand"></i>
                   <span>Resize</span>
                 </button>
                 <button id="selectPosBtn" class="wplace-btn wplace-btn-select" disabled>
                   <i class="fas fa-crosshairs"></i>
                   <span>Position</span>
                 </button>
               </div>
               
               <div class="wplace-controls-row">
                 <button id="startBtn" class="wplace-btn wplace-btn-start" disabled>
                   <i class="fas fa-play"></i>
                   <span>Start</span>
                 </button>
                 <button id="stopBtn" class="wplace-btn wplace-btn-stop" disabled>
                   <i class="fas fa-stop"></i>
                   <span>Stop</span>
                 </button>
               </div>
               
               <div class="wplace-controls-row">
                 <button id="startBtn2" class="wplace-btn wplace-btn-start" disabled>
                   <i class="fas fa-play"></i>
                   <span>Start 2</span>
                 </button>
                 <button id="startBtn3" class="wplace-btn wplace-btn-start" disabled>
                   <i class="fas fa-play"></i>
                   <span>Start 3</span>
                 </button>
               </div>
               
               <div class="wplace-controls-row">
                 <button id="saveBtn" class="wplace-btn wplace-btn-primary" disabled>
                   <i class="fas fa-save"></i>
                   <span>Save</span>
                 </button>
                 <button id="loadBtn" class="wplace-btn wplace-btn-primary">
                   <i class="fas fa-folder-open"></i>
                   <span>Load</span>
                 </button>
               </div>
               
               <div class="wplace-controls-row">
                 <button id="exportBtn" class="wplace-btn wplace-btn-primary" disabled>
                   <i class="fas fa-download"></i>
                   <span>Export</span>
                 </button>
                 <button id="importBtn" class="wplace-btn wplace-btn-primary">
                   <i class="fas fa-upload"></i>
                   <span>Import</span>
                 </button>
               </div>
               
               <div class="wplace-controls-row">
                 <button id="saveSlotBtn" class="wplace-btn wplace-btn-primary" disabled>
                   <i class="fas fa-save"></i>
                   <span>Save Slot</span>
                 </button>
                 <button id="loadSlotBtn" class="wplace-btn wplace-btn-primary">
                   <i class="fas fa-folder-open"></i>
                   <span>Load Slot</span>
                 </button>
               </div>
             </div>
             
             <div class="wplace-progress">
               <div id="progressBar" class="wplace-progress-bar" style="width: 0%"></div>
             </div>
             
             <div class="wplace-stats">
               <div id="statsArea">
                 <div class="wplace-stat-item">
                   <div class="wplace-stat-label"><i class="fas fa-info-circle"></i> ${Utils.t(
                     "initMessage"
                   )}</div>
                 </div>
               </div>
             </div>
             
             <div id="statusText" class="wplace-status status-default">
               ${Utils.t("waitingInit")}
             </div>
           </div>
           
           <!-- Progress Tab -->
           <div id="progressTab" class="wplace-tab-content">
             <div class="wplace-progress-detail">
               <div class="wplace-progress-item">
                 <div class="wplace-progress-label">
                   <i class="fas fa-image"></i>
                   <span>Total Pixels</span>
                 </div>
                 <div class="wplace-progress-value" id="totalPixelsValue">0</div>
               </div>
               <div class="wplace-progress-item">
                 <div class="wplace-progress-label">
                   <i class="fas fa-paint-brush"></i>
                   <span>Painted Pixels</span>
                 </div>
                 <div class="wplace-progress-value" id="paintedPixelsValue">0</div>
               </div>
               <div class="wplace-progress-item">
                 <div class="wplace-progress-label">
                   <i class="fas fa-percentage"></i>
                   <span>Progress</span>
                 </div>
                 <div class="wplace-progress-value" id="progressPercentValue">0%</div>
               </div>
               <div class="wplace-progress-item">
                 <div class="wplace-progress-label">
                   <i class="fas fa-bolt"></i>
                   <span>Current Charges</span>
                 </div>
                 <div class="wplace-progress-value" id="currentChargesValue">0</div>
               </div>
               <div class="wplace-progress-item">
                 <div class="wplace-progress-label">
                   <i class="fas fa-clock"></i>
                   <span>Estimated Time</span>
                 </div>
                 <div class="wplace-progress-value" id="estimatedTimeValue">--</div>
               </div>
               <div class="wplace-progress-item">
                 <div class="wplace-progress-label">
                   <i class="fas fa-map-marker-alt"></i>
                   <span>Last Position</span>
                 </div>
                 <div class="wplace-progress-value" id="lastPositionValue">X: 0, Y: 0</div>
               </div>
               <div class="wplace-progress-item">
                 <div class="wplace-progress-label">
                   <i class="fas fa-palette"></i>
                   <span>Available Colors</span>
                 </div>
                 <div class="wplace-progress-value" id="availableColorsValue">0</div>
               </div>
             </div>
             
             <div class="wplace-progress-detail">
               <div class="wplace-progress-item">
                 <div class="wplace-progress-label">
                   <i class="fas fa-calendar"></i>
                   <span>Started At</span>
                 </div>
                 <div class="wplace-progress-value" id="startedAtValue">--</div>
               </div>
               <div class="wplace-progress-item">
                 <div class="wplace-progress-label">
                   <i class="fas fa-tachometer-alt"></i>
                   <span>Pixels/Second</span>
                 </div>
                 <div class="wplace-progress-value" id="pixelsPerSecondValue">0</div>
               </div>
               <div class="wplace-progress-item">
                 <div class="wplace-progress-label">
                   <i class="fas fa-hourglass-half"></i>
                   <span>Time Remaining</span>
                 </div>
                 <div class="wplace-progress-value" id="timeRemainingValue">--</div>
               </div>
             </div>
           </div>
           
           <!-- Sync Tab -->
           <div id="syncTab" class="wplace-tab-content">
             <div class="wplace-controls" style="padding: 8px; background: ${CONFIG.THEME.secondary}; border-radius: 6px; margin-bottom: 10px;">
               <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                 <label style="display: flex; align-items: center; gap: 6px; color: ${CONFIG.THEME.text}; cursor: pointer; font-size: 12px;">
                   <input type="checkbox" id="autoSyncCheckbox" ${state.autoSync ? 'checked' : ''} style="accent-color: ${CONFIG.THEME.highlight};">
                   <i class="fas fa-sync"></i>
                   <span>Auto-Sync</span>
                 </label>
                 <div style="display: flex; align-items: center; gap: 4px;">
                   <span style="color: ${CONFIG.THEME.text}; font-size: 11px;">Slot:</span>
                   <select id="currentSlotSelect" style="background: ${CONFIG.THEME.primary}; color: ${CONFIG.THEME.text}; border: 1px solid ${CONFIG.THEME.accent}; border-radius: 3px; padding: 1px 3px; font-size: 11px;">
                     <option value="1" ${state.currentSlot === 1 ? 'selected' : ''}>1</option>
                     <option value="2" ${state.currentSlot === 2 ? 'selected' : ''}>2</option>
                     <option value="3" ${state.currentSlot === 3 ? 'selected' : ''}>3</option>
                     <option value="4" ${state.currentSlot === 4 ? 'selected' : ''}>4</option>
                     <option value="5" ${state.currentSlot === 5 ? 'selected' : ''}>5</option>
                   </select>
                 </div>
               </div>
               
               <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                 <label style="display: flex; align-items: center; gap: 6px; color: ${CONFIG.THEME.text}; cursor: pointer; font-size: 12px;">
                   <input type="checkbox" id="multiIpSyncCheckbox" ${state.multiIpSync ? 'checked' : ''} style="accent-color: ${CONFIG.THEME.highlight};">
                   <i class="fas fa-globe"></i>
                   <span>Multi-IP</span>
                 </label>
                 <div style="display: flex; align-items: center; gap: 4px;">
                   <span style="color: ${CONFIG.THEME.text}; font-size: 11px;">Interval:</span>
                   <select id="syncIntervalSelect" style="background: ${CONFIG.THEME.primary}; color: ${CONFIG.THEME.text}; border: 1px solid ${CONFIG.THEME.accent}; border-radius: 3px; padding: 1px 3px; font-size: 11px;">
                     <option value="5" ${state.syncInterval === 5 ? 'selected' : ''}>5s</option>
                     <option value="10" ${state.syncInterval === 10 ? 'selected' : ''}>10s</option>
                     <option value="30" ${state.syncInterval === 30 ? 'selected' : ''}>30s</option>
                     <option value="60" ${state.syncInterval === 60 ? 'selected' : ''}>1m</option>
                     <option value="300" ${state.syncInterval === 300 ? 'selected' : ''}>5m</option>
                   </select>
                 </div>
               </div>
             </div>
             
             <div class="wplace-controls-row">
               <button id="loadSyncBtn" class="wplace-btn wplace-btn-primary">
                 <i class="fas fa-sync"></i>
                 <span>Manual Sync</span>
               </button>
             </div>
             
             <div class="wplace-progress-detail">
               <div class="wplace-progress-item">
                 <div class="wplace-progress-label">
                   <i class="fas fa-network-wired"></i>
                   <span>IP Address</span>
                 </div>
                 <div class="wplace-progress-value" id="ipAddressValue">--</div>
               </div>
               <div class="wplace-progress-item">
                 <div class="wplace-progress-label">
                   <i class="fas fa-user"></i>
                   <span>Profile ID</span>
                 </div>
                 <div class="wplace-progress-value" id="profileIdValue">--</div>
               </div>
               <div class="wplace-progress-item">
                 <div class="wplace-progress-label">
                   <i class="fas fa-sync-alt"></i>
                   <span>Sync Status</span>
                 </div>
                 <div class="wplace-progress-value" id="syncStatusValue">Disabled</div>
               </div>
               <div class="wplace-progress-item">
                 <div class="wplace-progress-label">
                   <i class="fas fa-clock"></i>
                   <span>Last Sync</span>
                 </div>
                 <div class="wplace-progress-value" id="lastSyncValue">--</div>
               </div>
             </div>
           </div>
         </div>
       `;
  
      const resizeContainer = document.createElement("div");
      resizeContainer.className = "resize-container";
      resizeContainer.innerHTML = `
        <h3 style="margin-top: 0; color: ${CONFIG.THEME.text}">${Utils.t(
        "resizeImage"
      )}</h3>
        <div class="resize-controls">
          <label style="color: ${CONFIG.THEME.text}">
            ${Utils.t("width")}: <span id="widthValue">0</span>px
            <input type="range" id="widthSlider" class="resize-slider" min="10" max="500" value="100">
          </label>
          <label style="color: ${CONFIG.THEME.text}">
            ${Utils.t("height")}: <span id="heightValue">0</span>px
            <input type="range" id="heightSlider" class="resize-slider" min="10" max="500" value="100">
          </label>
          <label style="color: ${CONFIG.THEME.text}">
            <input type="checkbox" id="keepAspect" checked>
            ${Utils.t("keepAspect")}
          </label>
          <img id="resizePreview" class="resize-preview" src="">
          <div class="resize-buttons">
            <button id="confirmResize" class="wplace-btn wplace-btn-primary">
              <i class="fas fa-check"></i>
              <span>${Utils.t("apply")}</span>
            </button>
            <button id="cancelResize" class="wplace-btn wplace-btn-stop">
              <i class="fas fa-times"></i>
              <span>${Utils.t("cancel")}</span>
            </button>
          </div>
        </div>
      `;
  
      const resizeOverlay = document.createElement("div");
      resizeOverlay.className = "resize-overlay";
  
      document.body.appendChild(container);
      document.body.appendChild(resizeOverlay);
      document.body.appendChild(resizeContainer);
  
      const header = container.querySelector(".wplace-header");
      let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
  
      header.onmousedown = dragMouseDown;
  
      function dragMouseDown(e) {
        if (e.target.closest(".wplace-header-btn")) return;
  
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      }
  
      function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        container.style.top = container.offsetTop - pos2 + "px";
        container.style.left = container.offsetLeft - pos1 + "px";
      }
  
      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
  
      const initBotBtn = container.querySelector("#initBotBtn");
      const uploadBtn = container.querySelector("#uploadBtn");
      const resizeBtn = container.querySelector("#resizeBtn");
      const selectPosBtn = container.querySelector("#selectPosBtn");
      const startBtn = container.querySelector("#startBtn");
      const startBtn2 = container.querySelector("#startBtn2");
      const startBtn3 = container.querySelector("#startBtn3");
      const stopBtn = container.querySelector("#stopBtn");
      const saveBtn = container.querySelector("#saveBtn");
      const loadBtn = container.querySelector("#loadBtn");
      const exportBtn = container.querySelector("#exportBtn");
      const importBtn = container.querySelector("#importBtn");
      const saveSlotBtn = container.querySelector("#saveSlotBtn");
      const loadSlotBtn = container.querySelector("#loadSlotBtn");
             const loadSyncBtn = container.querySelector("#loadSyncBtn");
       const autoSyncCheckbox = container.querySelector("#autoSyncCheckbox");
       const currentSlotSelect = container.querySelector("#currentSlotSelect");
       const multiIpSyncCheckbox = container.querySelector("#multiIpSyncCheckbox");
       const minimizeBtn = container.querySelector("#minimizeBtn");
       const statusText = container.querySelector("#statusText");
       const progressBar = container.querySelector("#progressBar");
       const statsArea = container.querySelector("#statsArea");
       const content = container.querySelector(".wplace-content");
       
       // Tab elements
       const tabs = container.querySelectorAll(".wplace-tab");
       const tabContents = container.querySelectorAll(".wplace-tab-content");
       
       // Progress tab elements
       const totalPixelsValue = container.querySelector("#totalPixelsValue");
       const paintedPixelsValue = container.querySelector("#paintedPixelsValue");
       const progressPercentValue = container.querySelector("#progressPercentValue");
       const currentChargesValue = container.querySelector("#currentChargesValue");
       const estimatedTimeValue = container.querySelector("#estimatedTimeValue");
       const lastPositionValue = container.querySelector("#lastPositionValue");
       const availableColorsValue = container.querySelector("#availableColorsValue");
       const startedAtValue = container.querySelector("#startedAtValue");
       const pixelsPerSecondValue = container.querySelector("#pixelsPerSecondValue");
       const timeRemainingValue = container.querySelector("#timeRemainingValue");
       
       // Sync tab elements
       const ipAddressValue = container.querySelector("#ipAddressValue");
       const profileIdValue = container.querySelector("#profileIdValue");
       const syncStatusValue = container.querySelector("#syncStatusValue");
       const lastSyncValue = container.querySelector("#lastSyncValue");
  
      const widthSlider = resizeContainer.querySelector("#widthSlider");
      const heightSlider = resizeContainer.querySelector("#heightSlider");
      const widthValue = resizeContainer.querySelector("#widthValue");
      const heightValue = resizeContainer.querySelector("#heightValue");
      const keepAspect = resizeContainer.querySelector("#keepAspect");
      const resizePreview = resizeContainer.querySelector("#resizePreview");
      const confirmResize = resizeContainer.querySelector("#confirmResize");
      const cancelResize = resizeContainer.querySelector("#cancelResize");
  
             // Tab switching logic
       tabs.forEach(tab => {
         tab.addEventListener("click", () => {
           const targetTab = tab.getAttribute("data-tab");
           
           // Remove active class from all tabs and contents
           tabs.forEach(t => t.classList.remove("active"));
           tabContents.forEach(content => content.classList.remove("active"));
           
           // Add active class to clicked tab and corresponding content
           tab.classList.add("active");
           document.getElementById(targetTab + "Tab").classList.add("active");
           
           // Update data when switching to progress tab
           if (targetTab === "progress") {
             updateProgressTab();
           } else if (targetTab === "sync") {
             updateSyncTab();
           }
         });
       });
       
                // Function to update progress tab data
         function updateProgressTab() {
           if (totalPixelsValue) totalPixelsValue.textContent = state.totalPixels || 0;
           if (paintedPixelsValue) paintedPixelsValue.textContent = state.paintedPixels || 0;
           
           const progress = state.totalPixels > 0 ? Math.round((state.paintedPixels / state.totalPixels) * 100) : 0;
           if (progressPercentValue) progressPercentValue.textContent = progress + "%";
           
           if (currentChargesValue) currentChargesValue.textContent = Math.floor(state.currentCharges) || 0;
           if (estimatedTimeValue) estimatedTimeValue.textContent = state.estimatedTime > 0 ? Utils.formatTime(state.estimatedTime) : "--";
           
           const lastPos = state.lastPosition || { x: 0, y: 0 };
           if (lastPositionValue) lastPositionValue.textContent = `X: ${lastPos.x}, Y: ${lastPos.y}`;
           
           if (availableColorsValue) availableColorsValue.textContent = state.availableColors?.length || 0;
           
           // Update started at time
           if (state.startTime) {
             if (startedAtValue) startedAtValue.textContent = new Date(state.startTime).toLocaleTimeString();
           } else {
             if (startedAtValue) startedAtValue.textContent = "--";
           }
           
           // Calculate pixels per second
           if (state.startTime && state.paintedPixels > 0) {
             const elapsed = (Date.now() - state.startTime) / 1000;
             const pixelsPerSecond = Math.round(state.paintedPixels / elapsed);
             if (pixelsPerSecondValue) pixelsPerSecondValue.textContent = pixelsPerSecond;
           } else {
             if (pixelsPerSecondValue) pixelsPerSecondValue.textContent = "0";
           }
           
           // Update time remaining
           if (state.estimatedTime > 0) {
             if (timeRemainingValue) timeRemainingValue.textContent = Utils.formatTime(state.estimatedTime);
           } else {
             if (timeRemainingValue) timeRemainingValue.textContent = "--";
           }
         }
       
       // Function to update sync tab data
       function updateSyncTab() {
         if (ipAddressValue) ipAddressValue.textContent = state.ipAddress || "--";
         if (profileIdValue) profileIdValue.textContent = state.profileId ? state.profileId.substring(0, 20) + "..." : "--";
         if (syncStatusValue) syncStatusValue.textContent = state.autoSync ? "Enabled" : "Disabled";
         if (lastSyncValue) lastSyncValue.textContent = state.lastSyncTime ? new Date(state.lastSyncTime).toLocaleTimeString() : "--";
       }
       
       // Update sync tab when sync status changes
       const originalUpdateSyncTab = updateSyncTab;
       updateSyncTab = function() {
         originalUpdateSyncTab();
         // Update sync tab if it's active
         const activeTab = container.querySelector(".wplace-tab.active");
         if (activeTab && activeTab.getAttribute("data-tab") === "sync") {
           originalUpdateSyncTab();
         }
       };
       
       minimizeBtn.addEventListener("click", () => {
         state.minimized = !state.minimized;
         if (state.minimized) {
           container.classList.add("wplace-minimized");
           minimizeBtn.innerHTML = '<i class="fas fa-expand"></i>';
         } else {
           container.classList.remove("wplace-minimized");
           minimizeBtn.innerHTML = '<i class="fas fa-minus"></i>';
         }
       });
  
      window.updateUI = (messageKey, type = "default", params = {}) => {
        const message = Utils.t(messageKey, params);
        statusText.textContent = message;
        statusText.className = `wplace-status status-${type}`;
        statusText.style.animation = "none";
        void statusText.offsetWidth;
        statusText.style.animation = "slideIn 0.3s ease-out";
      };
  
                         window.updateStats = async () => {
         if (!state.colorsChecked || !state.imageLoaded) return;

         const { charges, cooldown } = await WPlaceService.getCharges();
         state.currentCharges = Math.floor(charges);
         state.cooldown = cooldown;
         
         console.log(`⚡ Charges updated: ${state.currentCharges} (batch size will be: ${Math.floor(state.currentCharges)})`);

         const progress =
           state.totalPixels > 0
             ? Math.round((state.paintedPixels / state.totalPixels) * 100)
             : 0;
         const remainingPixels = state.totalPixels - state.paintedPixels;

         state.estimatedTime = Utils.calculateEstimatedTime(
           remainingPixels,
           state.currentCharges,
           state.cooldown
         );

         progressBar.style.width = `${progress}%`;

         statsArea.innerHTML = `
           <div class="wplace-stat-item">
             <div class="wplace-stat-label"><i class="fas fa-image"></i> ${Utils.t(
               "progress"
             )}</div>
             <div>${progress}%</div>
           </div>
           <div class="wplace-stat-item">
             <div class="wplace-stat-label"><i class="fas fa-paint-brush"></i> ${Utils.t(
               "pixels"
             )}</div>
             <div>${state.paintedPixels}/${state.totalPixels}</div>
           </div>
           <div class="wplace-stat-item">
             <div class="wplace-stat-label"><i class="fas fa-bolt"></i> ${Utils.t(
               "charges"
             )}</div>
             <div>${Math.floor(state.currentCharges)}</div>
           </div>
           ${
             state.imageLoaded
               ? `
           <div class="wplace-stat-item">
             <div class="wplace-stat-label"><i class="fas fa-clock"></i> ${Utils.t(
               "estimatedTime"
             )}</div>
             <div>${Utils.formatTime(state.estimatedTime)}</div>
           </div>
           `
               : ""
           }
         `;
         
         // Update progress tab data if it's active
         const activeTab = container.querySelector(".wplace-tab.active");
         if (activeTab && activeTab.getAttribute("data-tab") === "progress") {
           updateProgressTab();
         }
       };
  
      function showResizeDialog(processor) {
        const { width, height } = processor.getDimensions();
        const aspectRatio = width / height;
  
        widthSlider.value = width;
        heightSlider.value = height;
        widthValue.textContent = width;
        heightValue.textContent = height;
        resizePreview.src = processor.img.src;
  
        resizeOverlay.style.display = "block";
        resizeContainer.style.display = "block";
  
        const updatePreview = () => {
          const newWidth = parseInt(widthSlider.value);
          const newHeight = parseInt(heightSlider.value);
  
          widthValue.textContent = newWidth;
          heightValue.textContent = newHeight;
  
          resizePreview.src = processor.generatePreview(newWidth, newHeight);
        };
  
        widthSlider.addEventListener("input", () => {
          if (keepAspect.checked) {
            const newWidth = parseInt(widthSlider.value);
            const newHeight = Math.round(newWidth / aspectRatio);
            heightSlider.value = newHeight;
          }
          updatePreview();
        });
  
        heightSlider.addEventListener("input", () => {
          if (keepAspect.checked) {
            const newHeight = parseInt(heightSlider.value);
            const newWidth = Math.round(newHeight * aspectRatio);
            widthSlider.value = newWidth;
          }
          updatePreview();
        });
  
        confirmResize.onclick = () => {
          const newWidth = parseInt(widthSlider.value);
          const newHeight = parseInt(heightSlider.value);
  
          const newPixels = processor.resize(newWidth, newHeight);
  
          let totalValidPixels = 0;
          for (let y = 0; y < newHeight; y++) {
            for (let x = 0; x < newWidth; x++) {
              const idx = (y * newWidth + x) * 4;
              const r = newPixels[idx];
              const g = newPixels[idx + 1];
              const b = newPixels[idx + 2];
              const alpha = newPixels[idx + 3];
  
              if (alpha < CONFIG.TRANSPARENCY_THRESHOLD) continue;
              if (Utils.isWhitePixel(r, g, b)) continue;
  
              totalValidPixels++;
            }
          }
  
          state.imageData.pixels = newPixels;
          state.imageData.width = newWidth;
          state.imageData.height = newHeight;
          state.imageData.totalPixels = totalValidPixels;
          state.totalPixels = totalValidPixels;
          state.paintedPixels = 0;
  
          updateStats();
          updateUI("resizeSuccess", "success", {
            width: newWidth,
            height: newHeight,
          });
  
          closeResizeDialog();
        };
  
        cancelResize.onclick = closeResizeDialog;
      }
  
      function closeResizeDialog() {
        resizeOverlay.style.display = "none";
        resizeContainer.style.display = "none";
      }
  
      initBotBtn.addEventListener("click", async () => {
        try {
          updateUI("checkingColors", "default");
  
          state.availableColors = Utils.extractAvailableColors();
  
          if (state.availableColors.length === 0) {
            Utils.showAlert(Utils.t("noColorsFound"), "error");
            updateUI("noColorsFound", "error");
            return;
          }
  
          state.colorsChecked = true;
          uploadBtn.disabled = false;
          selectPosBtn.disabled = false;
          initBotBtn.style.display = "none";
  
          updateUI("colorsFound", "success", {
            count: state.availableColors.length,
          });
          updateStats();
        } catch {
          updateUI("imageError", "error");
        }
      });
  
      uploadBtn.addEventListener("click", async () => {
        try {
          updateUI("loadingImage", "default");
          const imageSrc = await Utils.createImageUploader();
  
          const processor = new ImageProcessor(imageSrc);
          await processor.load();
  
          const { width, height } = processor.getDimensions();
          const pixels = processor.getPixelData();
  
          let totalValidPixels = 0;
          for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
              const idx = (y * width + x) * 4;
              const r = pixels[idx];
              const g = pixels[idx + 1];
              const b = pixels[idx + 2];
              const alpha = pixels[idx + 3];
  
              if (alpha < CONFIG.TRANSPARENCY_THRESHOLD) continue;
              if (Utils.isWhitePixel(r, g, b)) continue;
  
              totalValidPixels++;
            }
          }
  
          state.imageData = {
            width,
            height,
            pixels,
            totalPixels: totalValidPixels,
            processor,
          };
  
          state.totalPixels = totalValidPixels;
          state.paintedPixels = 0;
          state.imageLoaded = true;
          state.lastPosition = { x: 0, y: 0 };
  
                  resizeBtn.disabled = false;
        saveBtn.disabled = false;
        exportBtn.disabled = false;
        saveSlotBtn.disabled = false;
  
          if (state.startPosition) {
            startBtn.disabled = false;
            startBtn2.disabled = false;
            startBtn3.disabled = false;
          }
  
          updateStats();
          updateUI("imageLoaded", "success", { count: totalValidPixels });
        } catch {
          updateUI("imageError", "error");
        }
      });
  
      resizeBtn.addEventListener("click", () => {
        if (state.imageLoaded && state.imageData.processor) {
          showResizeDialog(state.imageData.processor);
        }
      });
  
      selectPosBtn.addEventListener("click", async () => {
        if (state.selectingPosition) return;
  
        state.selectingPosition = true;
        state.startPosition = null;
        state.region = null;
        startBtn.disabled = true;
        startBtn2.disabled = true;
        startBtn3.disabled = true;
  
        Utils.showAlert(Utils.t("selectPositionAlert"), "info");
        updateUI("waitingPosition", "default");
  
        const originalFetch = window.fetch;
  
        window.fetch = async (url, options) => {
          if (
            typeof url === "string" &&
            url.includes("https://backend.wplace.live/s0/pixel/") &&
            options?.method?.toUpperCase() === "POST"
          ) {
            try {
              const response = await originalFetch(url, options);
              const clonedResponse = response.clone();
              const data = await clonedResponse.json();
  
              if (data?.painted === 1) {
                const regionMatch = url.match(/\/pixel\/(\d+)\/(\d+)/);
                if (regionMatch && regionMatch.length >= 3) {
                  state.region = {
                    x: parseInt(regionMatch[1]),
                    y: parseInt(regionMatch[2]),
                  };
                }
  
                const payload = JSON.parse(options.body);
                if (payload?.coords && Array.isArray(payload.coords)) {
                  state.startPosition = {
                    x: payload.coords[0],
                    y: payload.coords[1],
                  };
                  state.lastPosition = { x: 0, y: 0 };
  
                  if (state.imageLoaded) {
                    startBtn.disabled = false;
                    startBtn2.disabled = false;
                    startBtn3.disabled = false;
                  }
  
                  window.fetch = originalFetch;
                  state.selectingPosition = false;
                  updateUI("positionSet", "success");
                }
              }
  
              return response;
            } catch {
              return originalFetch(url, options);
            }
          }
          return originalFetch(url, options);
        };
  
        setTimeout(() => {
          if (state.selectingPosition) {
            window.fetch = originalFetch;
            state.selectingPosition = false;
            updateUI("positionTimeout", "error");
            Utils.showAlert(Utils.t("positionTimeout"), "error");
          }
        }, 120000);
      });
  
      startBtn.addEventListener("click", async () => {
        if (!state.imageLoaded || !state.startPosition || !state.region) {
          updateUI("missingRequirements", "error");
          return;
        }
        if (!capturedCaptchaToken) {
          updateUI("captchaNeeded", "error");
          Utils.showAlert(Utils.t("captchaNeeded"), "error");
          return;
        }
  
                 state.running = true;
         state.stopFlag = false;
         state.startTime = Date.now(); // Set start time
         startBtn.disabled = true;
         startBtn2.disabled = true;
         startBtn3.disabled = true;
         stopBtn.disabled = false;
         uploadBtn.disabled = true;
         selectPosBtn.disabled = true;
         resizeBtn.disabled = true;
         saveBtn.disabled = true;

         updateUI("startPaintingMsg", "success");
  
        try {
          await processImage();
        } catch {
          updateUI("paintingError", "error");
        } finally {
          state.running = false;
          stopBtn.disabled = true;
          saveBtn.disabled = false;
  
          if (!state.stopFlag) {
            startBtn.disabled = true;
            startBtn2.disabled = true;
            startBtn3.disabled = true;
            uploadBtn.disabled = false;
            selectPosBtn.disabled = false;
            resizeBtn.disabled = false;
          } else {
            startBtn.disabled = false;
            startBtn2.disabled = false;
            startBtn3.disabled = false;
          }
        }
      });
  
      stopBtn.addEventListener("click", () => {
        state.stopFlag = true;
        state.running = false;
        stopBtn.disabled = true;
        updateUI("paintingStopped", "warning");
        
        // Auto save when stopping
        if (state.imageLoaded && state.paintedPixels > 0) {
          Utils.saveProgress();
          Utils.showAlert(Utils.t("autoSaved"), "success");
        }
      });

      // THÊM: Start Button 2 Event Listener (Alternative start method)
      startBtn2.addEventListener("click", async () => {
        if (!state.imageLoaded || !state.startPosition || !state.region) {
          updateUI("missingRequirements", "error");
          return;
        }
        if (!capturedCaptchaToken) {
          updateUI("captchaNeeded", "error");
          Utils.showAlert(Utils.t("captchaNeeded"), "error");
          return;
        }

        state.running = true;
        state.stopFlag = false;
        state.startTime = Date.now(); // Set start time
        startBtn.disabled = true;
        startBtn2.disabled = true;
        startBtn3.disabled = true;
        stopBtn.disabled = false;
        uploadBtn.disabled = true;
        selectPosBtn.disabled = true;
        resizeBtn.disabled = true;
        saveBtn.disabled = true;

        updateUI("startPaintingMsg", "success");

        try {
          await processImage();
        } catch (error) {
          console.error("Start 2 error:", error);
          updateUI("paintingError", "error");
        } finally {
          state.running = false;
          stopBtn.disabled = true;
          saveBtn.disabled = false;

          if (!state.stopFlag) {
            startBtn.disabled = true;
            startBtn2.disabled = true;
            startBtn3.disabled = true;
            uploadBtn.disabled = false;
            selectPosBtn.disabled = false;
            resizeBtn.disabled = false;
          } else {
            startBtn.disabled = false;
            startBtn2.disabled = false;
            startBtn3.disabled = false;
          }
        }
      });

      // THÊM: Start Button 3 Event Listener (Alternative start method)
      startBtn3.addEventListener("click", async () => {
        if (!state.imageLoaded || !state.startPosition || !state.region) {
          updateUI("missingRequirements", "error");
          return;
        }
        if (!capturedCaptchaToken) {
          updateUI("captchaNeeded", "error");
          Utils.showAlert(Utils.t("captchaNeeded"), "error");
          return;
        }

        state.running = true;
        state.stopFlag = false;
        state.startTime = Date.now(); // Set start time
        startBtn.disabled = true;
        startBtn2.disabled = true;
        startBtn3.disabled = true;
        stopBtn.disabled = false;
        uploadBtn.disabled = true;
        selectPosBtn.disabled = true;
        resizeBtn.disabled = true;
        saveBtn.disabled = true;

        updateUI("startPaintingMsg", "success");

        try {
          await processImage();
        } catch (error) {
          console.error("Start 3 error:", error);
          updateUI("paintingError", "error");
        } finally {
          state.running = false;
          stopBtn.disabled = true;
          saveBtn.disabled = false;

          if (!state.stopFlag) {
            startBtn.disabled = true;
            startBtn2.disabled = true;
            startBtn3.disabled = true;
            uploadBtn.disabled = false;
            selectPosBtn.disabled = false;
            resizeBtn.disabled = false;
          } else {
            startBtn.disabled = false;
            startBtn2.disabled = false;
            startBtn3.disabled = false;
          }
        }
      });
  
      saveBtn.addEventListener("click", () => {
        if (!state.imageLoaded) {
          Utils.showAlert(Utils.t("missingRequirements"), "error");
          return;
        }
        
        const success = Utils.saveProgress();
        if (success) {
          updateUI("autoSaved", "success");
          Utils.showAlert(Utils.t("autoSaved"), "success");
        } else {
          Utils.showAlert("❌ Erro ao salvar progresso", "error");
        }
      });
  
      loadBtn.addEventListener("click", () => {
        const savedData = Utils.loadProgress();
        if (!savedData) {
          updateUI("noSavedData", "warning");
          Utils.showAlert(Utils.t("noSavedData"), "warning");
          return;
        }
        
        // Show confirmation dialog
        const confirmLoad = confirm(
          `${Utils.t("savedDataFound")}\n\n` +
          `Saved: ${new Date(savedData.timestamp).toLocaleString()}\n` +
          `Progress: ${savedData.state.paintedPixels}/${savedData.state.totalPixels} pixels`
        );
        
        if (confirmLoad) {
          const success = Utils.restoreProgress(savedData);
          if (success) {
            updateUI("dataLoaded", "success");
            Utils.showAlert(Utils.t("dataLoaded"), "success");
            
            // Enable appropriate buttons
            saveBtn.disabled = false;
            exportBtn.disabled = false;
            
            // Show init button if colors not checked yet
            if (!state.colorsChecked) {
              initBotBtn.style.display = "block";
            }
            
            if (state.imageLoaded && state.startPosition && state.region && state.colorsChecked) {
              startBtn.disabled = false;
              startBtn2.disabled = false;
              startBtn3.disabled = false;
            }
          } else {
            Utils.showAlert("❌ Erro ao carregar progresso", "error");
          }
        }
      });

      // THÊM: Export Button Event Listener
      exportBtn.addEventListener("click", () => {
        console.log("📤 Export button clicked");
        console.log("📊 Current state:", {
          imageLoaded: state.imageLoaded,
          totalPixels: state.totalPixels,
          paintedPixels: state.paintedPixels,
          startPosition: state.startPosition,
          region: state.region
        });
        
        if (!state.imageLoaded) {
          console.log("❌ No image loaded, cannot export");
          Utils.showAlert(Utils.t("missingRequirements"), "error");
          return;
        }
        
        console.log("🔄 Attempting to export progress...");
        const success = Utils.exportProgress();
        
        if (success) {
          console.log("✅ Export successful");
          updateUI("progressExported", "success");
          Utils.showAlert(Utils.t("progressExported"), "success");
        } else {
          console.error("❌ Export failed");
          Utils.showAlert("❌ Error exporting progress", "error");
        }
      });

      // THÊM: Import Button Event Listener
      importBtn.addEventListener("click", async () => {
        try {
          console.log("📥 Import button clicked");
          const progressData = await Utils.importProgress();
          
          if (!progressData) {
            console.log("❌ No file selected or invalid file");
            updateUI("noProgressFileSelected", "warning");
            Utils.showAlert(Utils.t("noProgressFileSelected"), "warning");
            return;
          }
          
          console.log("✅ File loaded successfully:", progressData);
          
          // Show confirmation dialog with file info
          const confirmImport = confirm(
            `Import Progress Data\n\n` +
            `Export time: ${progressData.exportTime || 'N/A'}\n` +
            `Total pixels: ${progressData.state?.totalPixels || 0}\n` +
            `Painted pixels: ${progressData.state?.paintedPixels || 0}\n` +
            `Image loaded: ${progressData.state?.imageLoaded ? 'Yes' : 'No'}\n\n` +
            "Do you want to import this data?"
          );
          
          if (confirmImport) {
            console.log("🔄 User confirmed import, restoring progress...");
            const success = Utils.restoreProgress(progressData);
            
            if (success) {
              console.log("✅ Progress restored successfully");
              updateUI("progressImported", "success");
              Utils.showAlert(Utils.t("progressImported"), "success");
              
              // Enable appropriate buttons after import
              exportBtn.disabled = false;
              saveBtn.disabled = false;
              
              // Show init button if colors not checked yet
              if (!state.colorsChecked) {
                initBotBtn.style.display = "block";
              }
              
              if (state.imageLoaded && state.startPosition && state.region && state.colorsChecked) {
                startBtn.disabled = false;
                startBtn2.disabled = false;
                startBtn3.disabled = false;
              }
            } else {
              console.error("❌ Failed to restore progress");
              Utils.showAlert("❌ Error importing progress", "error");
            }
          } else {
            console.log("❌ User cancelled import");
          }
        } catch (error) {
          console.error("❌ Import error:", error);
          updateUI("invalidProgressFile", "error");
          Utils.showAlert(Utils.t("invalidProgressFile"), "error");
        }
      });

      // THÊM: Save Slot Button Event Listener
      saveSlotBtn.addEventListener("click", () => {
        if (!state.imageLoaded) {
          Utils.showAlert(Utils.t("missingRequirements"), "error");
          return;
        }
        
        // Show slot selection dialog
        const slotsInfo = Utils.getAllSlotsInfo();
        let dialogText = `${Utils.t("selectSlot")}\n\n`;
        
        for (let i = 1; i <= 5; i++) {
          const info = slotsInfo[i-1];
          if (info) {
            const date = new Date(info.timestamp).toLocaleString();
            const progress = info.totalPixels > 0 ? Math.round((info.paintedPixels / info.totalPixels) * 100) : 0;
            dialogText += `Slot ${i}: ${info.paintedPixels}/${info.totalPixels} pixels (${progress}%) - ${date}\n`;
          } else {
            dialogText += `Slot ${i}: Empty\n`;
          }
        }
        
        const slotNumber = prompt(dialogText);
        const slot = parseInt(slotNumber);
        
        if (slot >= 1 && slot <= 5) {
          const success = Utils.saveToSlot(slot);
          if (success) {
            Utils.showAlert(Utils.t("slotSaved", {slot: slot}), "success");
          } else {
            Utils.showAlert(`❌ Error saving to slot ${slot}`, "error");
          }
        } else if (slotNumber !== null) {
          Utils.showAlert("❌ Invalid slot number. Please select 1-5", "error");
        }
      });

      // THÊM: Load Slot Button Event Listener  
      loadSlotBtn.addEventListener("click", () => {
        // Show slot selection dialog
        const slotsInfo = Utils.getAllSlotsInfo();
        let dialogText = `${Utils.t("selectSlot")}\n\n`;
        
        for (let i = 1; i <= 5; i++) {
          const info = slotsInfo[i-1];
          if (info) {
            const date = new Date(info.timestamp).toLocaleString();
            const progress = info.totalPixels > 0 ? Math.round((info.paintedPixels / info.totalPixels) * 100) : 0;
            dialogText += `Slot ${i}: ${info.paintedPixels}/${info.totalPixels} pixels (${progress}%) - ${date}\n`;
          } else {
            dialogText += `Slot ${i}: Empty\n`;
          }
        }
        
        const slotNumber = prompt(dialogText);
        const slot = parseInt(slotNumber);
        
        if (slot >= 1 && slot <= 5) {
          const progressData = Utils.loadFromSlot(slot);
          if (progressData) {
            const confirmLoad = confirm(
              `Load from Slot ${slot}\n\n` +
              `Saved: ${new Date(progressData.timestamp).toLocaleString()}\n` +
              `Progress: ${progressData.state.paintedPixels}/${progressData.state.totalPixels} pixels\n\n` +
              "Do you want to load this data?"
            );
            
            if (confirmLoad) {
              const success = Utils.restoreProgress(progressData);
              if (success) {
                Utils.showAlert(Utils.t("slotLoaded", {slot: slot}), "success");
                
                // Enable appropriate buttons after load
                saveBtn.disabled = false;
                exportBtn.disabled = false;
                saveSlotBtn.disabled = false;
                
                if (!state.colorsChecked) {
                  initBotBtn.style.display = "block";
                }
                
                if (state.imageLoaded && state.startPosition && state.region && state.colorsChecked) {
                  startBtn.disabled = false;
                  startBtn2.disabled = false;
                  startBtn3.disabled = false;
                }
              } else {
                Utils.showAlert(`❌ Error loading from slot ${slot}`, "error");
              }
            }
          } else {
            Utils.showAlert(Utils.t("slotEmpty", {slot: slot}), "warning");
          }
        } else if (slotNumber !== null) {
          Utils.showAlert("❌ Invalid slot number. Please select 1-5", "error");
        }
      });

      // THÊM: Load Sync Button Event Listener
      loadSyncBtn.addEventListener("click", async () => {
        try {
          console.log('🔄 Manual sync triggered...');
          
          // Check if we have network info
          if (!state.ipAddress || state.ipAddress === 'unknown') {
            await Utils.detectNetworkInfo();
          }
          
                     // Force check for sync data from server
           if (state.autoSync && state.imageLoaded) {
             console.log('🔍 Checking for sync data from server...');
             const multiIpParam = state.multiIpSync ? '&multiIp=true' : '';
             const response = await fetch(`http://localhost:3000/poll?ip=${state.ipAddress}&slot=${state.currentSlot}&profile=${state.profileId}${multiIpParam}`);
             
             if (response.ok) {
              const syncData = await response.json();
              if (syncData && syncData.length > 0) {
                console.log(`📥 Found ${syncData.length} sync entries from manual check`);
                
                // Tìm profile có progress cao nhất
                let highestProgress = 0;
                let bestSyncData = null;
                
                syncData.forEach(data => {
                  if (data.progress && data.progress.paintedPixels > highestProgress) {
                    highestProgress = data.progress.paintedPixels;
                    bestSyncData = data;
                  }
                });
                
                // Sync với profile có progress cao nhất
                if (bestSyncData && highestProgress > state.paintedPixels) {
                  console.log(`🏆 Found profile with higher progress: ${bestSyncData.profileId} (${highestProgress} > ${state.paintedPixels})`);
                  Utils.processSyncData(bestSyncData);
                  Utils.showAlert(`🔄 Synced ${highestProgress} pixels from ${bestSyncData.profileId}`, "success");
                } else if (bestSyncData && highestProgress === state.paintedPixels) {
                  Utils.showAlert(`⚖️ All profiles have same progress: ${highestProgress} pixels`, "info");
                } else {
                  Utils.showAlert(`📤 This profile has highest progress: ${state.paintedPixels} pixels`, "info");
                }
              } else {
                Utils.showAlert('📭 No sync data found from other profiles', "warning");
              }
            } else {
              Utils.showAlert('❌ Failed to check sync data from server', "error");
            }
          } else {
            Utils.showAlert('❌ Auto-sync must be enabled and image must be loaded', "error");
          }
        } catch (error) {
          console.error('❌ Manual sync error:', error);
          Utils.showAlert('❌ Manual sync failed: ' + error.message, "error");
        }
      });

             // THÊM: Auto-Sync Checkbox Event Listener
       autoSyncCheckbox.addEventListener("change", () => {
         state.autoSync = autoSyncCheckbox.checked;
         console.log(`🔄 Auto-sync ${state.autoSync ? 'enabled' : 'disabled'}`);
         
         if (state.autoSync) {
           Utils.startAutoSync();
           Utils.showAlert(Utils.t("autoSyncEnabled"), "success");
         } else {
           Utils.stopAutoSync();
           Utils.showAlert(Utils.t("autoSyncDisabled"), "warning");
         }
         
         // Update sync tab
         updateSyncTab();
       });

             // THÊM: Current Slot Select Event Listener
       currentSlotSelect.addEventListener("change", () => {
         const newSlot = parseInt(currentSlotSelect.value);
         if (newSlot >= 1 && newSlot <= 5) {
           state.currentSlot = newSlot;
           console.log(`📍 Current slot changed to: ${state.currentSlot}`);
           
           // Auto-save current progress to new slot
           if (state.imageLoaded) {
             Utils.autoSaveCurrentSlot();
             Utils.showAlert(`📍 Now using slot ${state.currentSlot}`, "info");
           }
         }
       });

       // THÊM: Multi-IP Sync Checkbox Event Listener
       multiIpSyncCheckbox.addEventListener("change", () => {
         state.multiIpSync = multiIpSyncCheckbox.checked;
         console.log(`🌐 Multi-IP sync ${state.multiIpSync ? 'enabled' : 'disabled'}`);
         
         if (state.multiIpSync) {
           Utils.showAlert("🌐 Multi-IP sync enabled - will sync with profiles from different IPs", "success");
         } else {
           Utils.showAlert("🌐 Multi-IP sync disabled - will only sync with same IP", "warning");
         }
       });

      // THÊM: Sync Interval Select Event Listener
      const syncIntervalSelect = container.querySelector("#syncIntervalSelect");
      syncIntervalSelect.addEventListener("change", () => {
        const newInterval = parseInt(syncIntervalSelect.value);
        if (newInterval >= 5 && newInterval <= 300) {
          state.syncInterval = newInterval;
          console.log(`⏱️ Sync interval changed to: ${state.syncInterval}s`);
          
          // Restart auto-sync with new interval if it's enabled
          if (state.autoSync) {
            Utils.stopAutoSync();
            Utils.startAutoSync();
            // Restart network listener with new interval
            Utils.startNetworkListener();
            Utils.showAlert(`⏱️ Sync interval updated to ${state.syncInterval}s`, "info");
          }
        }
      });
      
      // Check for saved progress on startup
      const checkSavedProgress = () => {
        const savedData = Utils.loadProgress();
        if (savedData && savedData.state.paintedPixels > 0) {
          const savedDate = new Date(savedData.timestamp).toLocaleString();
          const progress = Math.round((savedData.state.paintedPixels / savedData.state.totalPixels) * 100);
          
          Utils.showAlert(
            `${Utils.t("savedDataFound")}\n\n` +
            `Saved: ${savedDate}\n` +
            `Progress: ${savedData.state.paintedPixels}/${savedData.state.totalPixels} pixels (${progress}%)\n` +
            `${Utils.t("clickLoadToContinue")}`,
            "info"
          );
        }
      };
      
      // Check for saved progress after a short delay to let UI settle
      setTimeout(() => {
        checkSavedProgress();
        
        // THÊM: Start sync listener and auto-sync
        Utils.detectNetworkInfo().then(() => {
          Utils.startSyncListener();
          if (state.autoSync) {
            Utils.startAutoSync();
            // Kiểm tra sync ngay lập tức khi khởi động
            Utils.checkInitialSync();
          }
        });
      }, 1000);
    }
  
    async function processImage() {
      const { width, height, pixels } = state.imageData;
      const { x: startX, y: startY } = state.startPosition;
      const { x: regionX, y: regionY } = state.region;
  
      let startRow = state.lastPosition.y || 0;
      let startCol = state.lastPosition.x || 0;
  
      if (!state.paintedMap) {
        state.paintedMap = Array(height)
          .fill()
          .map(() => Array(width).fill(false));
      }
  
      let pixelBatch = [];
  
      try {
        outerLoop: for (let y = startRow; y < height; y++) {
          for (let x = y === startRow ? startCol : 0; x < width; x++) {
            if (state.stopFlag) {
              if (pixelBatch.length > 0) {
                await sendPixelBatch(pixelBatch, regionX, regionY);
              }
              state.lastPosition = { x, y };
              updateUI("paintingPaused", "warning", { x, y });
              break outerLoop;
            }
  
            if (state.paintedMap[y][x]) continue;
  
            const idx = (y * width + x) * 4;
            const r = pixels[idx];
            const g = pixels[idx + 1];
            const b = pixels[idx + 2];
            const alpha = pixels[idx + 3];
  
            if (alpha < CONFIG.TRANSPARENCY_THRESHOLD) continue;
            if (Utils.isWhitePixel(r, g, b)) continue;
  
            const rgb = [r, g, b];
            const colorId = findClosestColor(rgb, state.availableColors);
            const pixelX = startX + x;
            const pixelY = startY + y;
  
            pixelBatch.push({
              x: pixelX,
              y: pixelY,
              color: colorId,
              localX: x,
              localY: y,
            });
  
            if (pixelBatch.length >= Math.floor(state.currentCharges)) {
              console.log(`🎨 Sending batch: ${pixelBatch.length} pixels (charges: ${state.currentCharges})`);
              const success = await sendPixelBatch(pixelBatch, regionX, regionY);

              if (success === "token_error") {
                state.stopFlag = true;
                state.running = false;
                updateUI("captchaNeeded", "error");
                Utils.showAlert(Utils.t("captchaNeeded"), "error");
                
                // Re-enable start buttons and other controls after CAPTCHA error
                startBtn.disabled = false;
                startBtn2.disabled = false;
                startBtn3.disabled = false;
                stopBtn.disabled = true;
                uploadBtn.disabled = false;
                selectPosBtn.disabled = false;
                resizeBtn.disabled = false;
                saveBtn.disabled = false;
                
                break outerLoop;
              }
  
              if (success) {
                pixelBatch.forEach((pixel) => {
                  state.paintedMap[pixel.localY][pixel.localX] = true;
                  state.paintedPixels++;
                });
  
                state.currentCharges -= pixelBatch.length;
                updateStats();
                updateUI("paintingProgress", "default", {
                  painted: state.paintedPixels,
                  total: state.totalPixels,
                });
                
                // Auto-save progress every 50 pixels
                if (state.paintedPixels % 50 === 0) {
                  Utils.saveProgress();
                }
              }
  
              pixelBatch = [];
  
              if (state.currentCharges < 1) {
                updateUI("noCharges", "warning", {
                  time: Utils.formatTime(state.cooldown),
                });
                await Utils.sleep(state.cooldown);
  
                const chargeUpdate = await WPlaceService.getCharges();
                state.currentCharges = chargeUpdate.charges;
                state.cooldown = chargeUpdate.cooldown;
              }
            }
          }
        }
  
        if (pixelBatch.length > 0 && !state.stopFlag) {
          const success = await sendPixelBatch(pixelBatch, regionX, regionY);
          if (success) {
            pixelBatch.forEach((pixel) => {
              state.paintedMap[pixel.localY][pixel.localX] = true;
              state.paintedPixels++;
            });
            state.currentCharges -= pixelBatch.length;
          }
        }
      } finally {
        if (window._chargesInterval) clearInterval(window._chargesInterval);
        window._chargesInterval = null;
      }
  
      if (state.stopFlag) {
        updateUI("paintingStopped", "warning");
        // Save progress when stopped
        Utils.saveProgress();
      } else {
        updateUI("paintingComplete", "success", { count: state.paintedPixels });
        state.lastPosition = { x: 0, y: 0 };
        state.paintedMap = null;
        // Clear saved data when completed
        Utils.clearProgress();
      }
  
      updateStats();
    }
  
    async function sendPixelBatch(pixelBatch, regionX, regionY) {
      if (!capturedCaptchaToken) {
        return "token_error";
      }
  
      const coords = [];
      const colors = [];
  
      pixelBatch.forEach((pixel) => {
        coords.push(pixel.x, pixel.y);
        colors.push(pixel.color);
      });
  
      try {
        const payload = {
          coords: coords,
          colors: colors,
          t: capturedCaptchaToken,
        };
  
        const res = await fetch(
          `https://backend.wplace.live/s0/pixel/${regionX}/${regionY}`,
          {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=UTF-8" },
            credentials: "include",
            body: JSON.stringify(payload),
          }
        );
  
        if (res.status === 403) {
          console.error(
            "❌ 403 Forbidden. CAPTCHA token might be invalid or expired."
          );
          capturedCaptchaToken = null;
          return "token_error";
        }
  
        const data = await res.json();
        return data?.painted === pixelBatch.length;
      } catch (e) {
        console.error("Batch paint request failed:", e);
        return false;
      }
    }
  
    createUI();
  })();