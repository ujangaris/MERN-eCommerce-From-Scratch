import express from 'express'
const router = express.Router()
import { authUser } from '../controllers/userController.js'

// router.route('/login').post(authUser)
router.post('/login', authUser)

export default router
