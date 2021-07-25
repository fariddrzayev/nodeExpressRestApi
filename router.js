import Router from 'express'
import PostContoller from './PostController.js'
const router = new Router()

router.post('/posts', PostContoller.create )
router.get('/posts', PostContoller.getAll)
router.get('/posts/:id', PostContoller.getOne)
router.put('/posts', PostContoller.update)
router.delete('/posts/:id', PostContoller.delete)

export default router