import { Request, Response } from "express";
import { ClientPostgresRepository } from "../../infra/db/postgres/repositories/client-repository";
import { CreateClientController } from "../../presentation/controllers/create-client-controller";
import { GetAllClientsController } from "../../presentation/controllers/get-all-clients-controller";
import { GetSortedClientsController } from "../../presentation/controllers/get-sorted-clients-controller";

export const getSortedClientsFactory = async (req: Request, res: Response) => {
  const clientPgRepository = new ClientPostgresRepository();

  const controller = new GetSortedClientsController(clientPgRepository);

  const { statusCode, body } = await controller.handle({});

  res.status(statusCode).json(body);
};

export const getClientsFactory = async (req: Request, res: Response) => {
  const clientPgRepository = new ClientPostgresRepository();

  const controller = new GetAllClientsController(clientPgRepository);

  const { statusCode, body } = await controller.handle({});

  res.status(statusCode).json(body);
};

export const createClientFactory = async (req: Request, res: Response) => {
  const clientPgRepository = new ClientPostgresRepository();

  const controller = new CreateClientController(clientPgRepository);

  const { body, statusCode } = await controller.handle({
    body: req.body,
    params: req.params,
  });

  res.status(statusCode).json(body);
};
