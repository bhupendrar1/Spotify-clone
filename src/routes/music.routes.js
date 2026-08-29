const express = require("express");
const musicController = require("../controllers/music.controller");
const multer = require("multer");


const uplaod = multer({ 
    stirage: multer.memoryStorage(),
 });


const router = express.Router();




router.post("/upload", uplaod.single("music"), musicController.createMusic);



module.exports = router;