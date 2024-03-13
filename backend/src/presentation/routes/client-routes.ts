import { Router, Request, Response } from "express";
import {
  createClientFactory,
  getClientsFactory,
  getSortedClientsFactory,
} from "../../main/factories/clients-factory";

const routes = Router();

routes.get("/teste", (req: Request, res: Response) => {
  res.json("ok ok ");
});

routes.post("", createClientFactory);
routes.get("", getClientsFactory);
routes.get("/sorted", getSortedClientsFactory);

export const ClientesRoutes = routes;
