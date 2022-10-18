const Room = require('../Models/room')

const roomCltr = { }

roomCltr.list = (req, res) => {
    Room.find()
    .then((room) => {
        res.json(room)
    })
    .catch((err) => res.json(err))
}

roomCltr.create = (req, res) => {
    const body = req.body
    const room = Room(body)
    room.save()
    .then((room) => {
        res.json(room)
    })
    .catch((err) => {
        res.json(err)
    })
}

roomCltr.show = (req, res) => {
    const id = req.params.id
    Room.findById(id)
    .then((room) => {
        res.json(room)
    })
    .catch((err) => res.json)
}

roomCltr.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Room.findByIdAndUpdate(id, body, {new: true, runValidators: true})
    .then((room) => {
        res.json(room)
    })
    .catch((err) => res.json(err))
}

roomCltr.delete = (req, res) => {
    const id = req.params.id
    Room.findByIdAndDelete(id)
    .then((room) => {
        res.json(room)
    })
    .catch((err) => res.json(err))
}

module.exports = roomCltr