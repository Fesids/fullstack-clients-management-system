import { Client } from "../../domain/models/client-model";
import { CreateClientModel } from "../../domain/usecases/create-client";

export interface ClientRepository {
  createTable(): Promise<any>;

  create(data: CreateClientModel): Promise<Client>;

  getAll(): Promise<Client[]>;
}
