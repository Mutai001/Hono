import { Context } from "hono";
import { CreateCategory, DeleteCategory, fetchOneCategory, getAllCategory, updateCategory } from "./category.service";

//fetch all category
export const getAllCategoryData = async (c: Context) => {
try {
        //limit the number of Categorys to be returned

        const limit = Number(c.req.query('limit'))

        const data = await getAllCategory(limit);
        if (data == null || data.length == 0) {
            return c.text("Category not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }



 }

// fetch one category
export const getOneCategoryData = async (c: Context) => {
    const id = c.req.param("id")
    const category = await fetchOneCategory(parseInt(id))
    if(category === undefined){
        return c.json({message: "No category found"},404)
    }
    return c.json(category,200)
}

//create category
export const createCategoryData = async (c: Context, next: Function) => {
    
    try{
       const category = await c.req.json()
    const response = await CreateCategory(category)
    return c.json({message: response},201)
    } catch(err){
        return c.json({message: err},500)
    }
}

//update category
export const updateCategoryData = async (c: Context) => {
    try {
        const id = parseInt(c.req.param('id'), 10);
        if (isNaN(id)) return c.text('Invalid id', 400);
        const city = await c.req.json();
        const City = await updateCategory(id, city);

        if (!updateCategory) return c.text('Category not updated', 400);
        return c.json({ msg: updateCategory }, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400);
    }
}

//delete category
export const deleteCategoryData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteCategory(parseInt(id))
    return c.json({message: response},200)

}