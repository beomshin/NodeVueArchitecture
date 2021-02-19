var mysqlCon = require('../db/db_connection');
var token = require('../middleware/auth');
var fs = require('fs');
const winstonLogger =require('../logger/winston');
const crypto = require('../crypto/crypto'); 
const errorConstant = require('../utile/ErrorConstant');

module.exports = {
    userEnrollApi :  ( async (req, res, next) => {


        try{

            var con = await mysqlCon.connect();

            req.body.pw = await crypto.encryptPdk(req.body.pw);

            await mysqlCon.selectRows(con, "User", 'insertUser', req.body);

            mysqlCon.commit(con);

            res.json({"resultMsg" : "success"})

        }catch(err){
            res.json({"resultMsg" : "error"})
        }

        
    })
}