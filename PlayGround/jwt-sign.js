const jwt = require('jsonwebtoken')

const data = {
    id:1,
    name: 'setve'
}

const token = jwt.sign(data, 'dct123',{expiresIn: 3600})

console.log(token)