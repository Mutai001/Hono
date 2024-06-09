import { promise } from "zod";
import db from "../db";
import { eq } from "drizzle-orm";
import { categoryinsert, categoryTable } from '../schema';

//fetching all categories
export const getAllCategory = async (id: number) => {
    return await db.query.categoryTable.findMany()
} 

//fetching one category
export const fetchOneCategory = async (id: number): Promise<categoryinsert | undefined> =>{
    return await  db.query.categoryTable.findFirst({where: eq(categoryTable.id,id)})
}

//creating a category
export const CreateCategory  = async (category: categoryinsert)=> {
    await db.insert(categoryTable).values(category)
    return "category created successfully"  
}


//updating a category
export const UpdateCategory = async(id:number,category:categoryinsert) => {
    // await db.update(categoryinsert).set(category).where(eq(categoryTable.id,id));
    // return "Category updated successfully"
}


//deleting a category
export const DeleteCategory = async (id: number) =>{
    await db.delete(categoryTable).where(eq(categoryTable.id,id))
    return "category deleted successfully"
}