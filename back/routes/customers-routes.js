const express = require("express");
const router = express.Router();
const customersController = require("../controllers/customers -controllers");

router.post("/signin", customersController.getUserPassByUname);

router.post(
  "/onlineOrders/:userId",
  customersController.HowManyOnlineOrdersPerCustomer
);

router.get(
  "/productsPerOrder/:orderId",
  customersController.getProdectsPerOrderById
);

router.post("/AddNewOrder", customersController.AddNewOrder);

module.exports = router;
