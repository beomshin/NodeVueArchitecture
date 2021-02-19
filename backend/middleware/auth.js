const jwt = require('jsonwebtoken');
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');
const winstonLogger = require('../logger/winston');
const crypto = require('../crypto/crypto');

module.exports = {

    createJwt :   () => new Promise((resolve, reject) => {

            try{
                    var uuidVal = uuidv4();
                    var nowDate = moment().unix();
        
                    var payload = {
                        uuid : uuidVal,
                        iat : nowDate,
                        exp : nowDate + 3600
                    }
            
                    // var token = jwt.sign(payload, process.env.JWT_TOKEN_KEY);
                    var token = jwt.sign(payload, 'asdf234q2342');

                    resolve(token);

            }catch(err){
                winstonLogger.error(' ====== jwt Create Error ========');
                console.log(err);
                reject(err);
            }

    }),

    verifyJwt : (req) => {

        return new Promise((resolve, reject) => {
    
            var result = {}

            try{
                var jwtToken = req.headers.authorization;

                // jwt.verify(jwtToken, process.env.JWT_TOKEN_KEY);
                jwt.verify(jwtToken, 'asdf234q2342');
                resolve(result);
    
            }catch(err){
                winstonLogger.error(' ====== jwt Verify Error ========');
                console.log(err);
                reject(err);
            }
    
        })

    } 

}