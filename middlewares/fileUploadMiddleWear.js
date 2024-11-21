const multer = require("multer");
const upload = multer({ limits: { files: 5 } });

const uploadMultipleFile = (req, res, next) => {
  upload.array("images")(req, res, (err) => {
    if (err) {
      console.error("Multer encountered an error:", err);
      return res.status(500).json({ error: "Multer encountered an error" });
    }
    next();
  });
};

module.exports = uploadMultipleFile;