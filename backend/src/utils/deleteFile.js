import fs from "fs";

const deleteFile = (filePath) => {
  try {
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`🗑 Deleted: ${filePath}`);
    }
  } catch (error) {
    console.error("Delete File Error:", error.message);
  }
};

export default deleteFile;