import { Hono } from "hono";
import { createCommentsData, deleteCommentsData, getAllCommentsData, getOneCommentssData, updateCommentsData } from "./comments.contreller";
import { zValidator } from "@hono/zod-validator";
import { commentSchema } from "../validators";
import { adminRoleAuth, userRoleAuth } from "../middleware/bearAuth";


export const commentsRouter = new Hono();
commentsRouter.get("/comments", getAllCommentsData);
commentsRouter.get("/comments/:id", getOneCommentssData);
commentsRouter.post("/comments",createCommentsData);
commentsRouter.delete("/comments/:id", deleteCommentsData);
commentsRouter.put("/comments/:id",updateCommentsData);