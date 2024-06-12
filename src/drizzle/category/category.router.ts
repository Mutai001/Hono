import { Hono } from "hono";
import { createCategoryData, deleteCategoryData, getAllCategoryData, getOneCategoryData, updateCategoryData } from "./category.contreller";
import { zValidator } from "@hono/zod-validator";
import { categorySchema } from "../validators";
import { adminRoleAuth } from "../middleware/bearAuth";


export const categoryRouter = new Hono();
categoryRouter.get("/category", getAllCategoryData);
categoryRouter.get("/category/:id", getOneCategoryData);
categoryRouter.post("/category",  createCategoryData)
categoryRouter.delete("/category/:id", deleteCategoryData);
categoryRouter.put("/category/:id", updateCategoryData);

