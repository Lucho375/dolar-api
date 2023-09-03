import { ICotization } from './interfaces/ICotization.js'

export function convertCotizations(str: string): string {
  const cotizations: ICotization = {}
  const cotizationRegex = /(\w+)(compra\$([\d,.]+))?venta\$([\d,.]+)/g

  const cotizationBlocks = str
    .split('Euro')[0]
    .split(/(?<=\d)(?=[D])/)
    .map((block: string) => block.toLowerCase())

  cotizationBlocks.forEach((block: string) => {
    let matches
    while ((matches = cotizationRegex.exec(block))) {
      const currency = matches[1].toLowerCase()
      const buyPrice = parseFloat(matches[3] ? matches[3].replace(',', '.') : '0')
      const sellPrice = parseFloat(matches[4].replace(',', '.'))
      if (!isNaN(buyPrice) || !isNaN(sellPrice)) {
        if (!cotizations[currency]) {
          cotizations[currency] = {}
        }
        if (buyPrice) {
          cotizations[currency].compra = buyPrice
        }
        cotizations[currency].venta = sellPrice
      }
    }
  })

  return JSON.stringify({ ...cotizations, last_update: new Date() })
}
