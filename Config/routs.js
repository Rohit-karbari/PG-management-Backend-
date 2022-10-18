const express = require('express')
const router = express.Router()

const {authenticateUser} = require('../App/Controllers/usersController')
const usersCltr = require('../App/Controllers/usersController')
const buildingCltr = require('../App/Controllers/buildingsCltr')
const roomCltr = require('../App/Controllers/roomscltr')
const tenentCltr = require('../App/Controllers/tenentsCltr')

router.post('/users/register', usersCltr.register)
router.post('/users/login', usersCltr.login)
router.get('/users/account', usersCltr.account)

router.get('/api/building', buildingCltr.list)
router.post('/api/building', buildingCltr.create)
router.get('/api/building/:id', buildingCltr.show)
router.delete('/api/building/:id', buildingCltr.delete)
router.put('/api/building/:id', buildingCltr.update)

router.get('/api/room', roomCltr.list)
router.post('/api/room', roomCltr.create)
router.get('/api/room/:id', roomCltr.show)
router.put('/api/room/:id', roomCltr.update)
router.delete('/api/room/:id', roomCltr.delete)

router.get('/api/tenent', tenentCltr.list)
router.post('/api/tenent', tenentCltr.create)
router.get('/api/tenent/:id', tenentCltr.show)
router.put('/api/tenent/:id', tenentCltr.update)
router.delete('/api/tenent/:id', tenentCltr.delete)
module.exports = router 