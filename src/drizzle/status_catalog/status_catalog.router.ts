import { Hono } from "hono";
import { createstatusCatalogData, deletestatusCatalogData, getAllstatusCatalogsData, getOnestatusCatalogData, updatestatusCatalogData } from "./status_catalog.contreller";
import { zValidator } from "@hono/zod-validator";
import { statusCatalogSchema } from "../validators";
import { adminRoleAuth } from "../middleware/bearAuth";


export const status_catalogRouter = new Hono();
status_catalogRouter.get("/status_catalog",adminRoleAuth, getAllstatusCatalogsData);
status_catalogRouter.get("/status_catalog/:id", getOnestatusCatalogData);
status_catalogRouter.post("/status_catalog",adminRoleAuth, zValidator('json', statusCatalogSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createstatusCatalogData);
status_catalogRouter.delete("/status_catalog/:id", adminRoleAuth,deletestatusCatalogData);
status_catalogRouter.put("/status_catalog/:id", adminRoleAuth,updatestatusCatalogData);