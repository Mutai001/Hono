"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCitysData = exports.updateCitysData = exports.createCitysData = exports.getOneCitysData = exports.getAllCitysData = void 0;
const city_service_1 = require("./city.service");
//fetch all city
const getAllCitysData = async (c) => {
    try {
        //limit the number of Citys to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, city_service_1.getAllCity)(limit);
        if (data == null || data.length == 0) {
            return c.text("City not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getAllCitysData = getAllCitysData;
// fetch one city
const getOneCitysData = async (c) => {
    const id = c.req.param("id");
    const city = await (0, city_service_1.fetchOneCity)(parseInt(id));
    if (city === undefined) {
        return c.json({ message: "No city found" }, 404);
    }
    return c.json(city, 200);
};
exports.getOneCitysData = getOneCitysData;
//create city
const createCitysData = async (c, next) => {
    try {
        const city = await c.req.json();
        const response = await (0, city_service_1.CreateCity)(city);
        return c.json({ message: response }, 201);
    }
    catch (err) {
        return c.json({ message: err }, 500);
    }
};
exports.createCitysData = createCitysData;
//update city
const updateCitysData = async (c) => {
    try {
        const id = parseInt(c.req.param('id'), 10);
        if (isNaN(id))
            return c.text('Invalid id', 400);
        const city = await c.req.json();
        const City = await (0, city_service_1.UpdateCity)(id, city);
        if (!city_service_1.UpdateCity)
            return c.text('City not updated', 400);
        return c.json({ msg: city_service_1.UpdateCity }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateCitysData = updateCitysData;
//delete city
const deleteCitysData = async (c) => {
    const id = c.req.param("id");
    const response = await (0, city_service_1.DeleteCity)(parseInt(id));
    return c.json({ message: response }, 200);
};
exports.deleteCitysData = deleteCitysData;
