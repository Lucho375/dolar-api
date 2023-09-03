import { Request, Response } from 'express'
import fsPromises from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)

export class CotizationController {
  static async getDolarCotization(req: Request, res: Response) {
    try {
      const filePath = path.resolve(path.dirname(__filename), '../data', 'cotizations.json')
      const json = await fsPromises.readFile(filePath, 'utf-8')
      const cotizationsData = JSON.parse(json)
      res.status(200).send(cotizationsData)
    } catch (error) {
      res.status(500).send({ error })
      console.log(error)
    }
  }
}
