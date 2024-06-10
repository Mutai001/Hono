import { promise } from "zod";
import db from "../db";
import { eq } from "drizzle-orm";
import { categoryinsert, categoryselect, categoryTable } from '../schema';
import { updateCategoryData } from './category.contreller';

//fetching all categories
export const getAllCategory = async (): Promise<categoryselect[] | null> => {
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
export const updateCategory = async(id:number,category:categoryinsert) => {
    await db.update(categoryTable).set(category).where(eq(categoryTable.id,id));
    return "category updated successfully"
}


//deleting a category
export const DeleteCategory = async (id: number) =>{
    await db.delete(categoryTable).where(eq(categoryTable.id,id))
    return "category deleted successfully"
}