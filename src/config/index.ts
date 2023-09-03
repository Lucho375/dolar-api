import dotenv from 'dotenv'
import { IAppConfig } from '../interfaces/IAppConfig.js'
import { IConfig } from '../interfaces/IConfig.js'
dotenv.config()

export class Config implements IConfig {
  private config: IAppConfig = {
    PORT: 8080
  }

  constructor() {
    this.loadConfig()
  }

  private loadConfig() {
    this.config = {
      PORT: parseInt(process.env.PORT || '8080', 10)
    }
  }

  public get(key: keyof IAppConfig): IAppConfig[keyof IAppConfig] {
    return this.config[key]
  }
}
