import { HttpRequest, HttpResponse } from './../../presentation/protocols/http'
import { Request, Response } from 'express'
import { Controller } from './../../presentation/protocols/controller'

export const adaptRouter = (controller: Controller) => {
  return async (req: Request, resp: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse: HttpResponse = await controller.handle(httpRequest)

    resp.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
