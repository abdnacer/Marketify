import express from 'express'

const router = express.Router()

router.post('/register')
router.get('verify-email/:token')
router.post('/login')
router.post('/reset-password')
router.post('/forgot-password')
router.get('/verify-forgot-password/:token')
router.post('/form-forgot-password')
router.get('/logout')

export default router