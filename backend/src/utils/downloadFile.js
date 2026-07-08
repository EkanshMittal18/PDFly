import fs from "fs";

const downloadFile = (res, filePath, downloadName) => {
  res.download(filePath, downloadName, (err) => {
    if (err) {
      console.error("Download Error:", err);
    }

    // Delete Output File After Download
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log("✅ Output File Deleted");
    }
  });
};

export default downloadFile;