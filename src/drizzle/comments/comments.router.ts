import { Hono } from "hono";
import { createCommentsData, deleteCommentsData, getAllCommentsData, getOneCommentssData, updateCommentsData } from "./comments.contreller";
import { zValidator } from "@hono/zod-validator";
import { commentSchema } from "../validators";
import { adminRoleAuth, userRoleAuth } from "../middleware/bearAuth";


export const commentsRouter = new Hono();
commentsRouter.get("/comments", adminRoleAuth,getAllCommentsData);
commentsRouter.get("/comments/:id",adminRoleAuth, getOneCommentssData);
commentsRouter.post("/comments",userRoleAuth, zValidator('json', commentSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createCommentsData);
commentsRouter.delete("/comments/:id",userRoleAuth, deleteCommentsData);
commentsRouter.put("/comments/:id", userRoleAuth,updateCommentsData);