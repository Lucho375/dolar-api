import { IAppConfig } from './IAppConfig.js'

export interface IConfig {
  get: (key: keyof IAppConfig) => IAppConfig[keyof IAppConfig]
}
