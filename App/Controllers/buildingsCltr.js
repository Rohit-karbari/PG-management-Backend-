const Building = require('../Models/building')

const buildingCltr = { }

buildingCltr.list = (req, res) => {
    Building.find()
        .then((building) => {
            res.json(building)
        })
        .catch((err) => res.json(err))
}

buildingCltr.create = (req,res) => {
    const body = req.body
    const building = new Building(body)
    building.save()
    .then((building) => {
        res.json(building)
    })
    .catch((err) => {
        res.json(err)
    })
}

buildingCltr.show = (req, res) => {
    const id = req.params.id
    Building.findById(id)
    .then((building) => {
        res.json(building)
    })
    .catch((err) => res.json(err))
}

buildingCltr.delete = (req, res) => {
    const id = req.params.id
    Building.findByIdAndDelete(id)
    .then((building) => {
        res.json(building)
    })
    .catch((err) => res.json(err))
}

buildingCltr.update = (req, res) => {
    const body = req.body
    const id = req.params.id
    Building.findByIdAndUpdate(id, body, {new: true, runValidators: true})
    .then((building) => {
        res.json(building)
    })
    .catch((err) => res.json(err))
}

module.exports = buildingCltr