import { Hono } from "hono";
import { createCategoryData, deleteCategoryData, getAllCategoryData, getOneCategoryData, updateCategoryData } from "./category.contreller";
import { zValidator } from "@hono/zod-validator";
import { categorySchema } from "../validators";
import { adminRoleAuth } from "../middleware/bearAuth";


export const categoryRouter = new Hono();
categoryRouter.get("/category", getAllCategoryData);
categoryRouter.get("/category/:id", getOneCategoryData);
categoryRouter.post("/category", adminRoleAuth, zValidator('json', categorySchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createCategoryData)
categoryRouter.delete("/category/:id",adminRoleAuth, deleteCategoryData);
categoryRouter.put("/category/:id",adminRoleAuth, updateCategoryData);

