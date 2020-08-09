import request from 'supertest'
import app from '../config/app'

import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('SignUp routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountsCollection = MongoHelper.getCollection('accounts')
    await accountsCollection.deleteMany({})
  })
  test('should return an account on sucess', async () => {
    await request(app)
      .post('/api/signup')
      .send({ name: 'Tiago', email: 'tiago_jvo', pasword: '123', passwordConfirmation: '123' })
      .expect(200)
  })
})
