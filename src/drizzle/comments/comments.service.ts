//Fetch all comments

import { eq } from "drizzle-orm"
import db from "../db"
import { commentsselect, commentsinsert, commentsTable } from '../schema';

export const getAllComments = async (): Promise<commentsselect[] | null> => {
    return await db.query.commentsTable.findMany()

}

// fetch one comments
export const fetchOneComments = async (id: number): Promise<commentsselect | undefined> => {
return await db.query.commentsTable.findFirst({
    where: eq(commentsTable.id, id)
})
}

// create comments
export const CreateComments = async (comments: commentsinsert) => {
    await db.insert(commentsTable).values(comments)
    return "comments created successfully"
}

// update comments
export const UpdateComments = async () => {
 
}

// delete Comments
export const DeleteComments = async (id: number) => {
    await db.delete(commentsTable).where(eq(commentsTable.id, id))
    return "comments deleted successfully"
}