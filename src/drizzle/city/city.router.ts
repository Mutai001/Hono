import { Hono } from "hono";
import { createCitysData, deleteCitysData, getAllCitysData, getOneCitysData, updateCitysData} from "./city.contreller";

export const CityRouter = new Hono();
CityRouter.get("/city", getAllCitysData);
CityRouter.get("/city/:id", getOneCitysData);
CityRouter.post("/city", createCitysData);
CityRouter.delete("/city/:id", deleteCitysData);
CityRouter.put("/city/:id", updateCitysData);