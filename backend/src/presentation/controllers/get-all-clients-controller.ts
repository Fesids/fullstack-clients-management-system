import { GetClientsList } from "../../domain/usecases/get-product-list";
import { badRequest, ok } from "../helpers/http-helpers";
import { Controller, HttpRequest, HttpResponse } from "../protocols";

export class GetAllClientsController implements Controller {
  constructor(private readonly getAllClients: GetClientsList) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const clients = await this.getAllClients.getAll();

      if (!clients) {
        return badRequest([]);
      }

      return ok(clients);
    } catch (err: any) {
      return badRequest(err);
    }
  }
}
