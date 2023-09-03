import axios from 'axios'
import * as cheerio from 'cheerio'
import fsPromises from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { convertCotizations } from '../convertCotizations.js'
const __filename = fileURLToPath(import.meta.url)

export async function updateCotization() {
  const { data } = await axios.get('https://www.lanacion.com.ar/dolar-hoy/')
  const $ = cheerio.load(data)
  const dolarCotizationDiv = $('div.dolar')
  const cotizationsJSON = convertCotizations(dolarCotizationDiv.text())
  const filePath = path.resolve(path.dirname(__filename), '../data', 'cotizations.json')
  await fsPromises.writeFile(filePath, cotizationsJSON)
}
