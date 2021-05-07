import { Router } from 'express'

const router = Router()

router.get('/episodes')
router.get('/episodes/:id')

export default router