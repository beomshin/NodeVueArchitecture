
const { resolve } = require('app-root-path');
var crypto = require('crypto');
const { decode } = require('punycode');
const logger = require('../logger/winston');
const wistonLogger = require('../logger/winston');

module.exports = {

    encryptPdk : (rawData) => {
            return new Promise((resolve, reject) => {

                try{

                    crypto.randomBytes(64, (err, buf) => {

                        var salt = buf.toString('base64');

                        crypto.pbkdf2(rawData, salt, 500, 64, 'sha512' , (err, hashData) => {

                            var result = {
                                salt : salt,
                                hashData : hashData.toString('base64')
                            }

                            wistonLogger.debug('Hash512 encypt result : ', result.hashData);

                            resolve(result.hashData);
                        })
                    })

                }catch(err){
                    wistonLogger.error("pbkdf2 encrypt error");
                    reject(err);
                }

            })
    },

    encryptAES256 : (rawData) => {
        return new Promise((resolve, reject) => {

            try{

                var key = process.env.AES256_KEY;
                var iv =  process.env.AES256_IV;
                iv = Buffer.alloc(16, iv , 'base64');
                
                const chiper = crypto.createCipheriv('aes-256-cbc', key, iv);
                let encryptAES256Data = chiper.update(rawData, 'utf-8', 'base64');
                encryptAES256Data += chiper.final('base64');

                // var result = {
                //     key : key,
                //     iv : iv.toString('base64'),
                //     encryptAES256Data : encryptAES256Data
                // }

                resolve(encryptAES256Data);

            }catch(err){
                wistonLogger.error("AES256 encrypt error");
                reject(err);
            }

        })
    },

    descryptAES256 : (encyptData) => {

            return new Promise((resolve, reject) => {

                try{

                    var key = process.env.AES256_KEY;
                    var iv =  process.env.AES256_IV;
                    iv = Buffer.alloc(16, iv , 'base64');

                    const descipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
                    let decodeData = descipher.update(encyptData, 'base64', 'utf-8');
                    decodeData += descipher.final('utf-8');

                    resolve(decodeData);

                }catch(err){
                    wistonLogger.error("AES256 descrypt error");
                    reject(err);
                }

            });
    }
}