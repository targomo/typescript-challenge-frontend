export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type Request = {
  method: RequestMethod
  headers: { [key: string]: string }
  body?: string
}
