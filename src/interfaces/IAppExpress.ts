import { Express } from 'express'
import { Server } from 'http'

export interface IAppExpress {
  getApp: () => Express
  listen: () => void
  close: () => void
  getServer: () => Server | undefined
}
