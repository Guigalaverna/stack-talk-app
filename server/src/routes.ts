import { Router } from 'express'
import RSSController from './controllers/RSSController'

const router = Router()

router.get('/episodes', RSSController.index)
router.get('/episodes/:id')

export default router