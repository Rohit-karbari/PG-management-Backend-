const Tenent = require('../Models/tenent')

const tenentCltr = { }

tenentCltr.list = (req, res) => {
    Tenent.find()
    .then((tenent) => {
        res.json(tenent)
    })
    .catch((err) => {
        res.json(err)
    })
}

tenentCltr.create = (req, res) => {
    const body = req.body
    const tenent = new Tenent(body)
    tenent.save()
    .then((tenent) => {
        res.json(tenent)
    })
    .catch((err) => res.json(err))
}

tenentCltr.show = (req, res) => {
    const id = req.params.id
    Tenent.findById(id)
    .then((tenent) => {
        res.json(tenent)
    })
    .catch((err) => res.json(err))
}

tenentCltr.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Tenent.findByIdAndUpdate(id, body, {new: true, runValidators: true})
    .then((tenent) => {
        res.json(tenent)
    })
    .catch((err) => res.json(err))
}

tenentCltr.delete = (req, res) => {
    const id = req.params.id 
    Tenent.findByIdAndDelete(id)
    .then((tenent) => {
        res.json(tenent)
    })
    .catch((err) => res.json(err))
}
module.exports = tenentCltr