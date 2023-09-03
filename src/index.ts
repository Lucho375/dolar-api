import { AppExpress } from './appExpress.js'
import { Config } from './config/index.js'
import { CronScheduler } from './cronScheduler.js'
import { updateCotization } from './crons/updateCotization.js'
;(async () => {
  const port = new Config().get('PORT')
  const app = new AppExpress(port)
  app.listen()
  const cronScheduler = new CronScheduler()
  const updateCotizationsTask = cronScheduler.scheduleTask({
    cronPattern: '40 * * * 1-5',
    taskFunction: updateCotization
  })
})()
