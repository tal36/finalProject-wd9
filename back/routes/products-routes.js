const express = require("express");
const router = express.Router();
const controller = require("../controllers/proudect - controllers");
const multer = require("multer");
const path = require("path");

// Configure Multer - מאפשר לבעל החנות להעלות תמונות בעצמו
const storage = multer.diskStorage({
  destination: "./public/images/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Route for Image Upload - בעלאת קובץ אחד בלבד ומחזיר את המסלול, זה בשביל בעלת החנות להעלות תמונות
router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  res.json({ imagePath: `/images/${req.file.filename}` });
});

//================================================================
//GET REQUEST - get ALL PRODUCTS
router.get("/", controller.getAllProdects);

//GET REQUEST - get ALL branches
router.get("/branches", controller.getAllBranches);

//GET REQUEST - get ALL DeliveryArea
router.get("/deliveryArea", controller.getAllDeliveryArea);

// post REQUEST - Add New Customer
router.post("/Register", controller.AddNewCustomer);
module.exports = router;
