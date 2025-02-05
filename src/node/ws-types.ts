import { type Account } from '../shared/session/index.js'

export interface WsClientOpts {
  log?: any
  url: string
  headers?: Record<string, string>
  apiKey?: string
  adminMode?: boolean
  account?: Account
}

export interface Message {
  type: string
  channel: string
  data?: any
  status?: number
}
