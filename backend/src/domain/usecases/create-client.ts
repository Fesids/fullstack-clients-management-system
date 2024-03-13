import { Client } from "../models/client-model";

export interface CreateClientModel {
  name: string;
  phone: string;
  email: string;
  longX: number;
  latY: number;
}

export interface CreateClient {
  create(data: CreateClientModel): Promise<Client>;
}
