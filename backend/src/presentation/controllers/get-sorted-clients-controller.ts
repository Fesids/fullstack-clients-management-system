import { GetClientsList } from "../../domain/usecases/get-product-list";
import { getDistance } from "../helpers/get-distance";
import { badRequest, ok } from "../helpers/http-helpers";
import { Controller, HttpRequest, HttpResponse } from "../protocols";

export class GetSortedClientsController implements Controller {
  constructor(private readonly getAllClients: GetClientsList) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      let clients = await this.getAllClients.getAll();

      /*if (!clients.length) {
        return badRequest("Mo clients found");
      }*/

      // atribuindo o valor do campo 'distance' baseado na relação entre as coordenadas iniciais da [0, 0] e as coordenadas finais de um dado objeto dentro da lista e aplicando o método sort() para nos retornar uma lista em ordem de distancia
      clients = clients
        .map((obj) => {
          obj.distance = getDistance(
            0,
            0,
            obj.cordenates[1],
            obj.cordenates[0],
            "K"
          );
          return obj;
        })
        .sort((obj1, obj2) => obj1.distance - obj2.distance);

      return ok(clients);
    } catch (err: any) {
      return badRequest(err);
    }
  }
}
