const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const buildingSchema = new Schema({
    buildingname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: true
    },
    user_id: {
        type : Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Building = mongoose.model('Building', buildingSchema)

module.exports = Building