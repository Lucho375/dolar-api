export interface IScheduleTask {
  cronPattern: string
  taskFunction: string | ((now: Date | 'manual' | 'init') => void)
}
