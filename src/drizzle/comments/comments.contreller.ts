import { Context } from "hono";
import { CreateComments, DeleteComments, fetchOneComments, getAllComments, UpdateComments } from "./comments.service";

//fetch all comments
export const getAllCommentsData = async (c: Context) => {
    const comments= await getAllComments()
    if(comments === null){
        return c.json({message: "No coments found"})
    }
    return c.json(comments,200)
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
   
}

//delete comments
export const deleteCommentsData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteComments(parseInt(id))
    return c.json({message: response},200)

}