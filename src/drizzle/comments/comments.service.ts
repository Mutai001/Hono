//Fetch all comments

import { eq } from "drizzle-orm"
import db from "../db"
import { commentsselect, commentsinsert, commentsTable } from '../schema';

  export const getAllComments = async (limit?: number): Promise<commentsselect[] | null> => {
  try {
      // return await db.query.commentsTable.findMany()
       if (limit) {
          return await db.query.commentsTable.findMany({
              limit: limit
          });
      }
      return await db.query.commentsTable.findMany();
    
  } catch (error: any) {
      return error?.message
    //   throw new Error(error/)

  }

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
export const UpdateComments = async (id:number,comments:commentsinsert) => {
    await db.update(commentsTable).set(comments).where(eq(commentsTable.id,id));
    return "Address updated successfully"

}

// delete Comments
export const DeleteComments = async (id: number) => {
    await db.delete(commentsTable).where(eq(commentsTable.id, id))
    return "comments deleted successfully"
}