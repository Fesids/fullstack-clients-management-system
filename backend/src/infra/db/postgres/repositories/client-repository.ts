import { ClientRepository } from "../../../../data/protocols/client-repository-protocol";
import { Client } from "../../../../domain/models/client-model";
import { CreateClientModel } from "../../../../domain/usecases/create-client";
import { PgHelper } from "../helpers/postgres-helper";

export class ClientPostgresRepository implements ClientRepository {
  async createTable(): Promise<any> {
    await PgHelper.query(
      `
    CREATE TABLE IF NOT EXISTS clients (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(355),
      phone VARCHAR(20),
      cordenates INTEGER[2],
      createdAt timestamp not null default CURRENT_TIMESTAMP,
      updatedAt timestamp not null default CURRENT_TIMESTAMP
      

    )
      `
    )
      .then((resp) => console.log("Table clients created successfully"))
      .catch((err) => console.log(err));
  }

  async create(data: CreateClientModel): Promise<Client> {
    await this.createTable();

    const result = await PgHelper.query(
      "INSERT INTO clients (name, email, phone, cordenates) VALUES ($1, $2, $3, $4) RETURNING *",
      [data.name, data.email, data.phone, [data.longX, data.latY]]
    );

    return result.rows[0];
  }
  async getAll(): Promise<any> {
    const result = await PgHelper.query("SELECT * FROM clients");

    return result.rows;
  }
}
