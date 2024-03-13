import { CreateClient } from "../../domain/usecases/create-client";
import { MissingParamError } from "../errors";
import { badRequest, created, serverError } from "../helpers/http-helpers";
import { getRandom } from "../helpers/random-num-helper";
import { Controller, HttpRequest, HttpResponse } from "../protocols";

export class CreateClientController implements Controller {
  constructor(private readonly createClient: CreateClient) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { name, email, phone, longX, latY } = httpRequest.body;

    const requiredFields = ["name", "email", "phone"];

    // generate random numbers to x, y axis
    /*const randomX = getRandom(0, 100);
    const randomY = getRandom(0, 100);

    const cordenates = [randomX, randomY];*/

    try {
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field).message);
        }
      }
      const client = await this.createClient.create({
        name: name,
        email: email,
        phone: phone,
        longX: longX,
        latY: latY,
      });

      return created(client);

      //return created(newClient);
    } catch (err: any) {
      console.log(err);
      return serverError(err);
    }
  }
}
