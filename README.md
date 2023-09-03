# API de Scrapping de Cotizaciones del Dólar

Esta API de scrapping de cotizaciones del dólar te proporciona información actualizada sobre las tasas de cambio de diferentes tipos de dólar en Argentina. La API se actualiza automáticamente cada 45 minutos mediante Node.js y utiliza el módulo Node-cron para realizar esta actualización periódica. Las cotizaciones se almacenan en un archivo JSON llamado `cotizations.json`.

## Rutas de la API

### Obtener las cotizaciones del dólar

#### GET /api/dolar

Esta ruta te permite obtener las cotizaciones más recientes del dólar en Argentina.

**Respuesta exitosa (Status 200):**

```json
{
  "oficial": {
    "compra": 347.5,
    "venta": 365.5
  },
  "blue": {
    "compra": 720,
    "venta": 730
  },
  "tarjeta": {
    "venta": 639.62
  },
  "turista": {
    "venta": 659.93
  },
  "mep": {
    "venta": 670.37
  },
  "ccl": {
    "venta": 766.7
  },
  "mayorista": {
    "venta": 350.02
  },
  "last_update": "2023-09-03T13:26:00.905Z"
}
```

**Respuesta de error (Status 500):**

En caso de un error interno en el servidor, se devolverá una respuesta de estado 500 con un mensaje de error adecuado.

## Iniciar el Proyecto

1. Clona el repositorio desde GitHub:

```bash
git clone https://github.com/Lucho375/dolar-api.git
```

2. Navega al directorio del proyecto:

```bash
cd dolar-api
```

3. Instala las dependencias:

```bash
npm install
```

## Construir el Proyecto

Si deseas construir el proyecto y compilar los archivos TypeScript, puedes usar el siguiente comando:

```bash
npm run build
```

Esto generará los archivos compilados en un directorio `dist`.

## Ejecutar en Modo de Desarrollo

Para ejecutar el proyecto en modo de desarrollo y utilizar nodemon para reiniciar automáticamente cuando realices cambios en el código, puedes utilizar el siguiente comando:

```bash
npm run dev
```

## Ejecutar en Producción

Una vez que hayas construido el proyecto y estés listo para ejecutarlo en producción, puedes usar el siguiente comando:

```bash
npm run start
```
