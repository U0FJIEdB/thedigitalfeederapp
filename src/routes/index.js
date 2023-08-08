const express=require('express')
const tdnfRouter=express.Router()
const controller=require('../controller/controller')

tdnfRouter.get('/',controller.index)
tdnfRouter.get('/index',controller.index)

tdnfRouter.get('/flashnews',controller.flashnews)
//tdnfRouter.get('/flashnews/:{id}',controller.flashnewsById)

tdnfRouter.get('/cricket',controller.cricket)
//tdnfRouter.get('/cricket/:{id}',controller.cricketId)

tdnfRouter.get('/report',controller.contactus)

tdnfRouter.get('/about',controller.about)

tdnfRouter.get('/team',controller.team)

tdnfRouter.get('/thanks',controller.thanks)

tdnfRouter.get('/search',controller.search)

tdnfRouter.get('/signin',controller.signin)

//tdnfRouter.get('/register',controller.register)
module.exports=tdnfRouter