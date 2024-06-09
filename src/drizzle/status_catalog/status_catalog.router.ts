import { Hono } from "hono";
import { createstatusCatalogData, deletestatusCatalogData, getAllstatusCatalogsData, getOnestatusCatalogData, updatestatusCatalogData } from "./status_catalog.contreller";

export const status_catalogRouter = new Hono();
status_catalogRouter.get("/status_catalog", getAllstatusCatalogsData);
status_catalogRouter.get("/status_catalog/:id", getOnestatusCatalogData);
status_catalogRouter.post("/status_catalog", createstatusCatalogData);
status_catalogRouter.delete("/status_catalog/:id", deletestatusCatalogData);
status_catalogRouter.put("/status_catalog/:id", updatestatusCatalogData);