import { Hono } from "hono";
import { createAddressData, deleteAddressData, fetchAddressData, fetchOneAddressData } from "./address.contreller";

export const addressRouter = new Hono();
  addressRouter.get("/address", fetchAddressData);
  addressRouter.get("/address/:id", fetchOneAddressData);
  addressRouter.post("/address", createAddressData);
  addressRouter.delete("/address/:id", deleteAddressData);
