import { Context } from "hono";
import { CreateComments, DeleteComments, fetchOneComments, getAllComments, UpdateComments } from "./comments.service";

//fetch all comments
export const getAllCommentsData = async (c: Context) => {
        try {
        //limit the number of Comments to be returned

        const limit = Number(c.req.query('limit'))

        const data = await getAllComments(limit);
        if (data == null || data.length == 0) {
            return c.text("Comment not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// fetch one comments
export const getOneCommentssData = async (c: Context) => {
    const id = c.req.param("id")
    const comments = await fetchOneComments(parseInt(id))
    if(comments === undefined){
        return c.json({message: "No comments found"},404)
    }
    return c.json(comments,200)
}

//create comments
export const createCommentsData = async (c: Context, next: Function) => {
    
    try{
       const comments = await c.req.json()
    const response = await CreateComments(comments)
    return c.json({message: response},201)
    } catch(err){
        return c.json({message: err},500)
    }
}

//update comments
export const updateCommentsData = async (c: Context) => {
    try {
        const id = parseInt(c.req.param('id'), 10);
        if (isNaN(id)) return c.text('Invalid id', 400);
        const comments = await c.req.json();
        const Comments = await UpdateComments(id, comments);

        if (!UpdateComments) return c.text('City not updated', 400);
        return c.json({ msg: UpdateComments }, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400);
    }
}

//delete comments
export const deleteCommentsData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteComments(parseInt(id))
    return c.json({message: response},200)

}