import cors from 'cors'
import express, { Express, json, urlencoded } from 'express'
import helmet from 'helmet'
import { Server } from 'http'
import { IAppExpress } from './interfaces/IAppExpress.js'
import { errorHandler } from './middlewares/errorHandler.js'
import cotizationRoutes from './routes/cotizations.routes.js'

export class AppExpress implements IAppExpress {
  private readonly app: Express
  private server: Server | undefined
  constructor(private PORT: number) {
    this.app = express()
    this.setupMiddlewares()
    this.setupRoutes()
    this.setupErrorHandler()
  }

  private setupMiddlewares(): void {
    this.app.use(helmet())
    this.app.use(cors())
    this.app.use(json())
    this.app.use(urlencoded({ extended: true }))
  }

  private setupRoutes(): void {
    this.app.use('/api/dolar', cotizationRoutes)
  }

  private setupErrorHandler() {
    this.app.use(errorHandler)
  }

  public getApp(): Express {
    return this.app
  }

  public listen(): void {
    this.server = this.app.listen(this.PORT, () => console.log(`Server running on ${this.PORT}`))
  }

  public getServer(): Server | undefined {
    return this.server
  }

  public close(): void {
    this?.server?.close()
  }
}
