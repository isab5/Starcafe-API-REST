const express = require("express");
const router = express.Router();
const itemController = require("../controller/itemController");
const orderController = require("../controller/orderController");

router.get("/menu", itemController.getMenu);
router.post("/order", orderController.addOrder);
router.get("/order/:id", orderController.getOrderById);
router.delete("/order/:id", orderController.deleteOrder);

module.exports = router;