import { Context } from "hono";
import { CreateState, DeleteState, fetchOneState, getAllStates, UpdateState } from "./state.service";

//fetch all states
export const getAllStatesData = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const State = await c.req.json();
    try {
        // search for the State
        const searchedState = await getAllStates();
        if (searchedState == undefined) return c.text("State not found", 404);
        // get the data and update it
        const res = await UpdateState(id, State);
        // return a success message
        if (!res) return c.text("State not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// fetch one states
export const getOneStatesData = async (c: Context) => {
    const id = c.req.param("id")
    const states = await fetchOneState(parseInt(id))
    if(states === undefined){
        return c.json({message: "No states found"},404)
    }
    return c.json(states,200)
}

//create states
export const createStateData = async (c: Context, next: Function) => {
    
    try{
       const states = await c.req.json()
    const response = await CreateState(states)
    return c.json({message: response},201)
    } catch(err){
        return c.json({message: err},500)
    }
}

//update states
export const updateStatesData = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const State = await c.req.json();
    try {
        // search for the State
        const searchedState = await getAllStates();
        if (searchedState == undefined) return c.text("State not found", 404);
        // get the data and update it
        const res = await UpdateState(id, State);
        // return a success message
        if (!res) return c.text("State not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

//delete states
export const deleteStatesData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteState(parseInt(id))
    return c.json({message: response},200)

}