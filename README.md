# WPlace Bot với Localhost Sync Server

## Tính năng chính

1. **Auto-Refresh CAPTCHA**: Tự động vượt CAPTCHA khi gặp lỗi token
2. **Export/Import Progress**: Xuất/nhập tiến độ qua file JSON
3. **Multiple Save Slots**: 5 slot lưu trữ riêng biệt (1-5)
4. **Real-time Sync**: Đồng bộ real-time giữa các profile Chrome qua localhost server

## Cài đặt và Sử dụng

### Bước 1: Cài đặt Sync Server

```bash
# Cài đặt dependencies
npm install

# Khởi động server
npm start
```

Server sẽ chạy tại: `http://localhost:3000`

### Bước 2: Sử dụng Bot

1. **Mở file `BOTPLACE.JS`** trong Console của Chrome
javascript:fetch("https://raw.githubusercontent.com/nguyenanlc9/Wplace-BOT/refs/heads/main/BOTPLACE.JS").then(t=>t.text()).then(eval);
3. **Upload hình ảnh** và chọn vị trí bắt đầu
4. **Bật Auto-Sync** để đồng bộ real-time
5. **Chọn Slot** (1-5) để lưu trữ riêng biệt

## Cách hoạt động của Sync

### Localhost Sync (Giữa các Profile Chrome)

1. **Profile 1** (Slot 1, IP: 192.168.1.100) → Lưu progress 843 pixels
2. **Profile 2** (Slot 1, IP: 192.168.1.100) → Tự động nhận progress 843 pixels
3. **Profile 3** (Slot 2, IP: 192.168.1.100) → Không nhận (khác slot)

### Các tính năng Sync

- **Auto-save**: Tự động lưu mỗi 5 giây
- **Cross-profile**: Đồng bộ giữa các profile Chrome khác nhau
- **Slot-based**: Mỗi slot hoạt động độc lập
- **IP-based**: Chỉ sync trong cùng mạng LAN

## API Endpoints

- `POST /sync` - Lưu dữ liệu sync
- `GET /poll` - Lấy dữ liệu sync mới
- `GET /status` - Trạng thái server
- `POST /clear` - Xóa dữ liệu cũ

## Troubleshooting

### Server không khởi động
```bash
# Kiểm tra port 3000 có bị chiếm không
netstat -ano | findstr :3000

# Hoặc đổi port trong sync-server.js
const PORT = 3001;
```

### Bot không sync được
1. Kiểm tra server đã chạy chưa: `http://localhost:3000`
2. Kiểm tra Console có lỗi CORS không
3. Đảm bảo cùng IP và cùng Slot

### CAPTCHA không auto-refresh
1. Kiểm tra Auto-Refresh đã bật chưa
2. Đợi 30 giây cooldown giữa các lần refresh
3. Thử paint thủ công 1 pixel để trigger CAPTCHA

## Cấu trúc Files

```
Wplace BOT/
├── BOTPLACE.JS          # Bot chính với sync
├── DemoWplace.js        # Bot demo (tham khảo)
├── sync-server.js       # Localhost sync server
├── package.json         # Dependencies
└── README.md           # Hướng dẫn này
```

## Lưu ý

- Server chỉ lưu dữ liệu trong RAM (mất khi restart)
- Dữ liệu cũ tự động xóa sau 5 phút
- API Key: `wplace_sync_2024` (có thể thay đổi)
- Chỉ hoạt động trong mạng LAN (localhost)

## Ví dụ sử dụng

```javascript
// Profile 1: Slot 1, IP 192.168.1.100
// Paint được 500 pixels → Auto-save → Sync

// Profile 2: Slot 1, IP 192.168.1.100  
// Tự động nhận 500 pixels → Continue từ pixel 501

// Profile 3: Slot 2, IP 192.168.1.100
// Không nhận gì (khác slot) → Bắt đầu từ 0
```
