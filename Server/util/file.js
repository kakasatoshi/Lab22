const fs = require("fs");
const path = require("path");

exports.clearImage = (filePath) => {
  const fullPath = path.join(__dirname, "..", filePath);
  if (fs.existsSync(fullPath)) {
    // ✅ Kiểm tra file có tồn tại không
    fs.unlink(fullPath, (err) => {
      if (err) {
        console.error("Lỗi khi xóa file:", err);
      }
    });
  } else {
    console.warn("⚠️ File không tồn tại:", fullPath);
  }
};
