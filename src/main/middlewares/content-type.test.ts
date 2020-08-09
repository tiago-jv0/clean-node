import request from 'supertest'
import app from '../config/app'
import { Request, Response } from 'express'

describe('Coontent Type Middleware', () => {
  test('should return default content type as json', async () => {
    app.get('/test_content_type', (request: Request, response: Response): void => {
      response.send('')
    })
    await request(app)
      .get('/test_content_type').expect('content-type', /json/)
  })

  test('should return xml content type when forced', async () => {
    app.get('/test_content_type_xml', (request: Request, response: Response): void => {
      response.type('xml')
      response.send('')
    })
    await request(app)
      .get('/test_content_type_xml').expect('content-type', /xml/)
  })
})