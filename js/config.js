/* Địa chỉ backend (repo coolmate-backend).
   - Chạy trên máy: http://localhost:4000
   - Trên GitHub Pages: URL Render sau khi deploy backend
   Để trống ("") thì trang chỉ dùng dữ liệu mẫu trong data.js. */
window.COOLMATE_API =
  location.hostname === "localhost" || location.hostname === "127.0.0.1"
    ? "http://localhost:4000"
    : "https://coolmate-backend.onrender.com";
