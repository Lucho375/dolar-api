import cron, { ScheduledTask } from 'node-cron'
import { IScheduleTask } from './interfaces/IScheduleTask.js'

export class CronScheduler {
  private cronLib: typeof cron
  constructor() {
    this.cronLib = cron
  }

  public scheduleTask({ cronPattern, taskFunction }: IScheduleTask): ScheduledTask | undefined {
    if (this.isValidCronPattern(cronPattern)) {
      return this.cronLib.schedule(cronPattern, taskFunction)
    }
  }

  public stopTask(task: ScheduledTask | undefined) {
    if (task) {
      task.stop()
    }
  }

  private isValidCronPattern(cronPattern: string) {
    if (this.cronLib.validate(cronPattern)) {
      return true
    }
    throw new Error(`
    Invalid cron pattern : '${cronPattern}'
    cron pattern example:
    * * * * * *
    | | | | | |
    | | | | | +-- Year (example: 2023)
    | | | | +---- Day of week (0 - 6) (sunday to saturday)
    | | | +------ Month (1 - 12 or month names , 'jan', 'feb', etc.)
    | | +-------- Day of month (1 - 31)
    | +---------- Hour (0 - 23)
    | +---------- Minute(0 - 59)
    `)
  }
}
