const mongoose = require('mongoose')

const configureDB = () => {
    mongoose.connect('mongodb+srv://Rohitkarbari:RohitK@cluster0.yuztnvo.mongodb.net/test')
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => console.log(err) )
}
module.exports = configureDB