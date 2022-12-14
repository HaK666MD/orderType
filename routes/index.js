import { Router } from "express";
const router = Router();

import {
  getOrderName,
  getOrderNames,
  getOrder,
  getOrders,
  getOrderType,
  getOrderTypes,
  getProperty,
  getProperties,
  getOrderTypeProperties,
  createOrderName,
  createOrderType,
  createProperty,
  createOrderTypeProperty,
  createOrder,
} from "../controllers/index.js";

router.get("/orders", getOrders);
router.get("/order/:id", getOrder);

router.get("/esim", getOrderTypes);

router.post("/ordername", createOrderName);
router.post("/ordertype", createOrderType);
router.post("/property", createProperty);
router.post("/ordertypeproperty", createOrderTypeProperty);
router.post("/order", createOrder);

export default router;
