import { Encrypter } from './../../protocols/encrypter'
import { AccountModel } from './../../../domain/models/account'
import { AddAccount, AddAccountModel } from '../../../domain/usecases/add-account'
export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    return {
      name: 'valid_name',
      email: 'valid_email@mail.com',
      password: 'valid_password',
      id: 'valid_id'
    }
  }
}
