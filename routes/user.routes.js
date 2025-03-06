import { Router } from "express";

const userRouter = Router()
userRouter.get('/', (req, res)=>{ res.send({'title': 'User details' })})
userRouter.get('/:id', (req, res)=>{ res.send({'title': `Get User Deta ` })})
userRouter.put('/:id', (req, res)=>{ res.send({'title': `Update User ` })})
userRouter.post('/', (req, res)=>{ res.send({'title': 'Create User' })})
userRouter.delete('/:id', (req, res)=>{ res.send({'title': `Delete user ` })})

export default userRouter;