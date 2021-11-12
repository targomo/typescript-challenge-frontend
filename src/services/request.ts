import environment from 'environment/environment'

import { RequestMethod, Request } from 'types/common'

export class RequestService {
  private apiURL = environment.apiUrl

  async sendRequest(method: RequestMethod, endpoint: string, body?: { [key: string]: any }) {
    const options: Request = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    }

    if (method === 'POST' || method === 'PUT') {
      options.body = JSON.stringify(body)
    }

    const res = await fetch(this.apiURL + endpoint, options)

    if (res.ok) {
      return res.json()
    }

    try {
      return res.json()
    } catch (e) {
      return res
    }
  }
}

export const requestService = new RequestService()
