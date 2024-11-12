import Account from '../account/Account'
import Mails from '../mails/Mails'
import Adobe from './Adobe'

export default class AdobeWithAutoMails implements Adobe {
  constructor(
    private readonly mails: Mails,
    private readonly origin: Adobe
  ) { }

  async account(address: string, password: string): Promise<Account> {
    const mail = await this.mails.mail(address, password)
    const account = await this.origin.account(address, password)
    
    return {
      ...account,
      delete: async () => {
        await account.delete()
        await mail.delete()
      }
    }
  }
}
