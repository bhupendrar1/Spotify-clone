const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function uploadFile(file) {
  const result = await imagekit.files.upload({
    file,
    fileName: "music",
    folder: process.env.IMAGEKIT_FOLDER
  });

  return result;
}

module.exports = { uploadFile };