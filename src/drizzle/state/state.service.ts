//Fetch all states

import { eq } from "drizzle-orm"
import db from "../db"
import {  stateTable, stateinsert, stateselect } from '../schema';

// export const getAllStates = async (): Promise<stateselect[] | null> => {
//     return await db.query.stateTable.findMany()

// }
export const getAllStates = async (limit?: number): Promise<stateselect[] | null> => {
    return await db.query.stateTable.findMany({
        limit: limit,
        with:{
            cities:{
                columns:{name:true,state_id:true},
            },
            
        }
    
    });
}


// fetch one states
export const fetchOneState = async (id: number): Promise<stateselect | undefined> => {
return await db.query.stateTable.findFirst({
    where: eq(stateTable.id, id)
})
}

// create states
export const CreateState = async (states: stateinsert) => {
    await db.insert(stateTable).values(states)
    return "state created successfully"
}

// update states
export const UpdateState = async (id: number, State: stateinsert) => {
    await db.update(stateTable).set(State).where(eq(stateTable.id, id))
    return "State updated successfully";
}

// delete states
export const DeleteState = async (id: number) => {
    await db.delete(stateTable).where(eq(stateTable.id, id))
    return "states deleted successfully"
}