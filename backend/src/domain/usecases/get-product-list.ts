import { Client } from "../models/client-model";

export interface GetClientsList {
  getAll(): Promise<Client[]>;
}
