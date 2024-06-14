"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersRouter = void 0;
const hono_1 = require("hono");
const orders_contreller_1 = require("./orders.contreller");
exports.ordersRouter = new hono_1.Hono();
exports.ordersRouter.get("/orders", orders_contreller_1.getAllOrdersData);
exports.ordersRouter.get("/orders/:id", orders_contreller_1.getOneOrdersData);
exports.ordersRouter.post("/orders", orders_contreller_1.createOrdersData);
exports.ordersRouter.delete("/orders/:id", orders_contreller_1.deleteOrdersData);
exports.ordersRouter.put("/orders/:id", orders_contreller_1.updateOrdersData);
