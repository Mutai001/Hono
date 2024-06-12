import { Hono } from "hono";
import { createAddressData, deleteAddressData, getAllAddressData, fetchOneAddressData, updateAddressData } from "./address.contreller";
import { zValidator } from "@hono/zod-validator";
import { addressSchema } from "../validators";
import { adminRoleAuth, userRoleAuth } from "../middleware/bearAuth";



export const addressRouter = new Hono();
  addressRouter.get("/address", adminRoleAuth, getAllAddressData);
  addressRouter.get("/address/:id",userRoleAuth, fetchOneAddressData);
  addressRouter.post("/address",adminRoleAuth, zValidator('json', addressSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createAddressData);

addressRouter.delete("/address/:id", adminRoleAuth, deleteAddressData);
addressRouter.put("/address/:id", adminRoleAuth, updateAddressData);
