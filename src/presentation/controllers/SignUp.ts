import { badRequest, serverError } from './../helpers/http-helper'

import { InvalidParamError, MissingParamError } from '../errors'

import { Controller, HttpResponse, HttpRequest, EmailValidator } from '../protocols'

export class SignUpController implements Controller {
  constructor (private readonly emailValidator: EmailValidator) {}

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const isValidEmail = this.emailValidator.isValid(httpRequest.body.email)

      if (!isValidEmail) {
        return badRequest(new InvalidParamError('email'))
      }
    } catch (error) {
      return serverError()
    }

    // return {
    //   statusCode: 201,
    //   body: {}
    // }
  }
}
