"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryData = exports.updateCategoryData = exports.createCategoryData = exports.getOneCategoryData = exports.getAllCategoryData = void 0;
const category_service_1 = require("./category.service");
//fetch all category
const getAllCategoryData = async (c) => {
    try {
        //limit the number of Categorys to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, category_service_1.getAllCategory)(limit);
        if (data == null || data.length == 0) {
            return c.text("Category not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getAllCategoryData = getAllCategoryData;
// fetch one category
const getOneCategoryData = async (c) => {
    const id = c.req.param("id");
    const category = await (0, category_service_1.fetchOneCategory)(parseInt(id));
    if (category === undefined) {
        return c.json({ message: "No category found" }, 404);
    }
    return c.json(category, 200);
};
exports.getOneCategoryData = getOneCategoryData;
//create category
const createCategoryData = async (c, next) => {
    try {
        const category = await c.req.json();
        const response = await (0, category_service_1.CreateCategory)(category);
        return c.json({ message: response }, 201);
    }
    catch (err) {
        return c.json({ message: err }, 500);
    }
};
exports.createCategoryData = createCategoryData;
//update category
const updateCategoryData = async (c) => {
    try {
        const id = parseInt(c.req.param('id'), 10);
        if (isNaN(id))
            return c.text('Invalid id', 400);
        const city = await c.req.json();
        const City = await (0, category_service_1.updateCategory)(id, city);
        if (!category_service_1.updateCategory)
            return c.text('Category not updated', 400);
        return c.json({ msg: category_service_1.updateCategory }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateCategoryData = updateCategoryData;
//delete category
const deleteCategoryData = async (c) => {
    const id = c.req.param("id");
    const response = await (0, category_service_1.DeleteCategory)(parseInt(id));
    return c.json({ message: response }, 200);
};
exports.deleteCategoryData = deleteCategoryData;
