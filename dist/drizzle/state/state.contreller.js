"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStatesData = exports.updateStatesData = exports.createStateData = exports.getOneStatesData = exports.getAllStatesData = void 0;
const state_service_1 = require("./state.service");
//fetch all states
const getAllStatesData = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const State = await c.req.json();
    try {
        // search for the State
        const searchedState = await (0, state_service_1.getAllStates)();
        if (searchedState == undefined)
            return c.text("State not found", 404);
        // get the data and update it
        const res = await (0, state_service_1.UpdateState)(id, State);
        // return a success message
        if (!res)
            return c.text("State not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getAllStatesData = getAllStatesData;
// fetch one states
const getOneStatesData = async (c) => {
    const id = c.req.param("id");
    const states = await (0, state_service_1.fetchOneState)(parseInt(id));
    if (states === undefined) {
        return c.json({ message: "No states found" }, 404);
    }
    return c.json(states, 200);
};
exports.getOneStatesData = getOneStatesData;
//create states
const createStateData = async (c, next) => {
    try {
        const states = await c.req.json();
        const response = await (0, state_service_1.CreateState)(states);
        return c.json({ message: response }, 201);
    }
    catch (err) {
        return c.json({ message: err }, 500);
    }
};
exports.createStateData = createStateData;
//update states
const updateStatesData = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const State = await c.req.json();
    try {
        // search for the State
        const searchedState = await (0, state_service_1.getAllStates)();
        if (searchedState == undefined)
            return c.text("State not found", 404);
        // get the data and update it
        const res = await (0, state_service_1.UpdateState)(id, State);
        // return a success message
        if (!res)
            return c.text("State not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateStatesData = updateStatesData;
//delete states
const deleteStatesData = async (c) => {
    const id = c.req.param("id");
    const response = await (0, state_service_1.DeleteState)(parseInt(id));
    return c.json({ message: response }, 200);
};
exports.deleteStatesData = deleteStatesData;
