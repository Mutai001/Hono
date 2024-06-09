import { Hono } from "hono";
import { createCategoryData, deleteCategoryData, getAllCategoryData, getOneCategoryData, updateCategoryData } from "./category.contreller";

export const categoryRouter = new Hono();
categoryRouter.get("/category", getAllCategoryData);
categoryRouter.get("/category/:id", getOneCategoryData);
categoryRouter.post("/category", createCategoryData);
categoryRouter.delete("/category/:id", deleteCategoryData);
categoryRouter.put("/category/:id", updateCategoryData);