"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsRouter = void 0;
const hono_1 = require("hono");
const comments_contreller_1 = require("./comments.contreller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
const bearAuth_1 = require("../middleware/bearAuth");
exports.commentsRouter = new hono_1.Hono();
exports.commentsRouter.get("/comments", bearAuth_1.adminRoleAuth, comments_contreller_1.getAllCommentsData);
exports.commentsRouter.get("/comments/:id", bearAuth_1.adminRoleAuth, comments_contreller_1.getOneCommentssData);
exports.commentsRouter.post("/comments", bearAuth_1.userRoleAuth, (0, zod_validator_1.zValidator)('json', validators_1.commentSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), comments_contreller_1.createCommentsData);
exports.commentsRouter.delete("/comments/:id", bearAuth_1.userRoleAuth, comments_contreller_1.deleteCommentsData);
exports.commentsRouter.put("/comments/:id", bearAuth_1.userRoleAuth, comments_contreller_1.updateCommentsData);
