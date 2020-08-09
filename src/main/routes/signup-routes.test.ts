import request from 'supertest'
import app from '../config/app'

describe('SignUp routes', () => {
  test('should return an account on sucess', async () => {
    await request(app)
      .post('/api/signup')
      .send({ name: 'Tiago', email: 'tiago_jvo', pasword: '123', passwordConfirmation: '123' })
      .expect(200)
  })
})
