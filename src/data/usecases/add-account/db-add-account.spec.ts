import { DbAddAccount } from './DbAddAccount'

describe('DbAddAccount usecase', () => {
  test('Should call Encrypter with correect password', async () => {
    class EncrypterStub {
      async encrypt (value: string): Promise<string> {
        return await new Promise((resolve, reject) => resolve('hashed_password'))
      }
    }
    const encrypterSub = new EncrypterStub()
    const sut = new DbAddAccount(encrypterSub)
    const encryptSpy = jest.spyOn(encrypterSub, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email@mail.com',
      password: 'valid_password'
    }
    await sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})
