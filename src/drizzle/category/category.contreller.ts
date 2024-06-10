import { Context } from "hono";
import { CreateCategory, DeleteCategory, fetchOneCategory, getAllCategory } from "./category.service";

//fetch all category
export const getAllCategoryData = async (c: Context) => {
    const category= await getAllCategory()
    if(category === null){
        return c.json({message: "No category found"})
    }
    return c.json(category,200)
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
    // try {
    //     const id = parseInt(c.req.param('id'), 10);
    //     if (isNaN(id)) return c.text('Invalid id', 400);
    //     const category = await c.req.json();
    //     const UpdateCategory  = await UpdateCategory(id, category);
    //     if (!UpdateCategory) return c.text('Address not updated', 400);
    //     return c.json({ msg: UpdateCategory }, 200);
    // } catch (error: any) {
    //     return c.json({ error: error?.message }, 400);
    // }
}

//delete category
export const deleteCategoryData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteCategory(parseInt(id))
    return c.json({message: response},200)

}