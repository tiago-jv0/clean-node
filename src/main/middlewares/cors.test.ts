import request from 'supertest'
import app from '../config/app'
import { Request, Response } from 'express'

describe('Cors Middleware', () => {
  test('should enable cors', async () => {
    app.post('/test_cors', (request: Request, response: Response): void => {
      response.send()
    })
    await request(app)
      .get('/test_cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*')
  })
})
