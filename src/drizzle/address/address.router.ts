import { Hono } from "hono";
import { createAddressData, deleteAddressData, getAllAddressData, fetchOneAddressData, updateAddressData } from "./address.contreller";

export const addressRouter = new Hono();
  addressRouter.get("/address", getAllAddressData);
  addressRouter.get("/address/:id", fetchOneAddressData);
  addressRouter.post("/address", createAddressData);
  addressRouter.delete("/address/:id", deleteAddressData);
  addressRouter.put("/address/:id", updateAddressData);
