const express = require("express");
var router = express.Router();

var {
  getAllOrderOfOneUser,
  getOneOrderById,
  createOrder,
  updatingOrders,
  deleteOrder,
} = require("../controller/orders");

router.get("/", getAllOrderOfOneUser);
router.post("/", createOrder);
router.patch("/:pid/:rid", updatingOrders);
router.get("/:id", getOneOrderById);
router.delete("/:id", deleteOrder);

module.exports = router;
