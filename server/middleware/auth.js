const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try{
        const token = req.headers.authotorization.split(' ')[1];
        const isCoustomAuth = token.length < 500;

        let decodedData;

        if(token && isCoustomAuth){
            decodeData = jwt.verify(token,'test')
            req.userId = decodedData?.id
        } else {
            decodedData = jwt.decode(token);
            req.userId = decodeData?.sub
        }
        next()
    } catch(e){
        console.log(e)
    }
}

module.exports = {auth}