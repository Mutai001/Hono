"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDriverData = exports.updateDriverData = exports.createDriverData = exports.getOneDriverData = exports.getAllDriversData = void 0;
const drivers_service_1 = require("./drivers.service");
//fetch all driver
const getAllDriversData = async (c) => {
    try {
        //limit the number of Drivers to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, drivers_service_1.getAllDrivers)(limit);
        if (data == null || data.length == 0) {
            return c.text("Driver not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getAllDriversData = getAllDriversData;
// fetch one driver
const getOneDriverData = async (c) => {
    const id = c.req.param("id");
    const driver = await (0, drivers_service_1.fetchOneDriver)(parseInt(id));
    if (driver === undefined) {
        return c.json({ message: "No driver found" }, 404);
    }
    return c.json(driver, 200);
};
exports.getOneDriverData = getOneDriverData;
//create driver
const createDriverData = async (c, next) => {
    try {
        const driver = await c.req.json();
        const response = await (0, drivers_service_1.CreateDriver)(driver);
        return c.json({ message: response }, 201);
    }
    catch (err) {
        return c.json({ message: err }, 500);
    }
};
exports.createDriverData = createDriverData;
//update driver
// export const updateDriverData = async (c: Context) => {
const updateDriverData = async (c) => {
    try {
        const id = parseInt(c.req.param('id'), 10);
        if (isNaN(id))
            return c.text('Invalid id', 400);
        const comments = await c.req.json();
        const Comments = await (0, drivers_service_1.UpdateDriver)(id, comments);
        if (!drivers_service_1.UpdateDriver)
            return c.text('City not updated', 400);
        return c.json({ msg: drivers_service_1.UpdateDriver }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateDriverData = updateDriverData;
// }
//delete driver
const deleteDriverData = async (c) => {
    const id = c.req.param("id");
    const response = await (0, drivers_service_1.DeleteDriver)(parseInt(id));
    return c.json({ message: response }, 200);
};
exports.deleteDriverData = deleteDriverData;
