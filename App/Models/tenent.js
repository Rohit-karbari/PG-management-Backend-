const mongoose = require('mongoose')
const isEmail = require('validator/lib/isEmail')
const Schema = mongoose.Schema

const tenentSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    aadhar: {
        type: String,
        required: true 
    },
    email : {
        type: String,
        required: true,
        validate: {
            validator: function(value){
                return isEmail(value)
            },
            message: function(){
                return 'Invalid email format'
            }
        }
    },
    room_id: {
        type: Schema.Types.ObjectId,
        ref:'Room',
        required: true
    },
    building_id: {
        type: Schema.Types.ObjectId,
        ref:'Building',
        required: true
    }
})

const Tenent = mongoose.model('Tenent', tenentSchema)

module.exports = Tenent