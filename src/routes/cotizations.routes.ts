import { Router } from 'express'
import { CotizationController } from '../controllers/cotizations.controllers.js'

const router = Router()

router.get('/', CotizationController.getDolarCotization)

export default router
