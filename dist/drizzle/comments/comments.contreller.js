"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommentsData = exports.updateCommentsData = exports.createCommentsData = exports.getOneCommentssData = exports.getAllCommentsData = void 0;
const comments_service_1 = require("./comments.service");
//fetch all comments
const getAllCommentsData = async (c) => {
    try {
        //limit the number of Comments to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, comments_service_1.getAllComments)(limit);
        if (data == null || data.length == 0) {
            return c.text("Comment not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getAllCommentsData = getAllCommentsData;
// fetch one comments
const getOneCommentssData = async (c) => {
    const id = c.req.param("id");
    const comments = await (0, comments_service_1.fetchOneComments)(parseInt(id));
    if (comments === undefined) {
        return c.json({ message: "No comments found" }, 404);
    }
    return c.json(comments, 200);
};
exports.getOneCommentssData = getOneCommentssData;
//create comments
const createCommentsData = async (c, next) => {
    try {
        const comments = await c.req.json();
        const response = await (0, comments_service_1.CreateComments)(comments);
        return c.json({ message: response }, 201);
    }
    catch (err) {
        return c.json({ message: err }, 500);
    }
};
exports.createCommentsData = createCommentsData;
//update comments
const updateCommentsData = async (c) => {
    try {
        const id = parseInt(c.req.param('id'), 10);
        if (isNaN(id))
            return c.text('Invalid id', 400);
        const comments = await c.req.json();
        const Comments = await (0, comments_service_1.UpdateComments)(id, comments);
        if (!comments_service_1.UpdateComments)
            return c.text('City not updated', 400);
        return c.json({ msg: comments_service_1.UpdateComments }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateCommentsData = updateCommentsData;
//delete comments
const deleteCommentsData = async (c) => {
    const id = c.req.param("id");
    const response = await (0, comments_service_1.DeleteComments)(parseInt(id));
    return c.json({ message: response }, 200);
};
exports.deleteCommentsData = deleteCommentsData;
