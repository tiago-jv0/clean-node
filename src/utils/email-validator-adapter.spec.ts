import { EmailValidatorAdapter } from './email-validator-adapter'
import validator from 'validator'

jest.mock('validator', () => {
  return {
    isEmail (): boolean {
      return true
    }
  }
})

describe('EmailValidatorAdapter', () => {
  test('should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValidEmail = sut.isValid('invalid_email@mail.com')
    expect(isValidEmail).toBe(false)
  })

  test('should return true if validator returns true', () => {
    const sut = new EmailValidatorAdapter()
    const isValidEmail = sut.isValid('valid_email@mail.com')
    expect(isValidEmail).toBe(true)
  })
})
