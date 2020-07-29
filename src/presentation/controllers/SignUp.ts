import { badRequest } from './../helpers/http-helper'

import { MissingParamError } from '../errors/missing-param-error'
import { InvalidParamError } from './../errors/invalid-param-error'

import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { EmailValidator } from '../protocols/email-validator'

export class SignUpController implements Controller {
  constructor (private readonly emailValidator: EmailValidator) {}

  handle (httpRequest: HttpRequest): HttpResponse {
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

    // return {
    //   statusCode: 201,
    //   body: {}
    // }
  }
}
