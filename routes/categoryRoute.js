const express = require("express");

const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controller/category");
const subCategoryRoute = require("./subCategoryRoute");
const app = express();
var router = express.Router();

// middleware to send any request on this endpoint to subcategory route
router.use("/:categoryId/subcategories", subCategoryRoute);

router.post("/", createCategory);
router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.patch("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
