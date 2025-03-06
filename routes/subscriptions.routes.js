import { Router } from "express";

const subscriptionRouter = Router()

subscriptionRouter.get('/', (req, res)=>{res.send({'title':'Get all Subscription'})})
subscriptionRouter.get('/:id', (req, res)=>{res.send({'title':'Get all Subscription'})})
subscriptionRouter.post('/', (req, res)=>{res.send({'title':'Create Subscription'})})
subscriptionRouter.put('/:id', (req, res)=>{res.send({'title':'Update Subscription'})})
subscriptionRouter.delete('/', (req, res)=>{res.send({'title':'Delete Subscription'})})
subscriptionRouter.get('/user/:id', (req, res)=>{res.send({'title':'Get all user Subscription'})})
subscriptionRouter.put('/:id/cancle', (req, res)=>{res.send({'title':'Cancle User Subscription'})})
subscriptionRouter.get('/upcoming-renewals', (req, res)=>{res.send({'title':'Get Upcoimg Renewsals'})})

export default subscriptionRouter;