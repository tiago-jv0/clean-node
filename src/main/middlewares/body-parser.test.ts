import request from 'supertest'
import app from '../config/app'
import { Request, Response } from 'express'

describe('Body Parser Middleware', () => {
  test('should parse body as json', async () => {
    app.post('/test_body_parser', (request: Request, response: Response): void => {
      response.send(request.body)
    })
    await request(app).post('/test_body_parser').send({ name: 'Tiago' }).expect({ name: 'Tiago' })
  })
})
