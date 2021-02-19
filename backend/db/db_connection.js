var mysql = require('mysql2');
var mybaitsMapper = require('mybatis-mapper');
var db_info = require('./db_info');
const winstonLogger = require('../logger/winston');

mybaitsMapper.createMapper(['./mapper/user.xml']);
var format = {language: 'sql', indent: '  '};

var pool = pool?pool:mysql.createPool(db_info.dev);


module.exports = {
    init : () =>{
        winstonLogger.info('mpb-menu DB Connect ... ');
        return mysql.createPool(db_info.dev);
    },
    connect : async () =>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                connection.beginTransaction();
                resolve(connection);
            })
        });
    },
    commit : async (con) => {
        con.commit();
        con.release();
    },
    rollback : async (con) => {
        con.rollback();
        con.release();  
    },
    mybatisQuery : (namespace, query, param, callback) =>{

        return new Promise((resolve, reject) => {

            try{

                var result = mybaitsMapper.getStatement(namespace, query, param, format);
                resolve(result);

            }catch(err){
                reject(err);
            }

        });

    },
    executeQurey : (query, con) => {
        return new Promise((resolve, reject) =>{
            try{
                con.query(query, (err, rows, fileds) => {
                    if(err){
                        reject(err);
                        con.release();
                    }
                    resolve(rows);
                });
            }catch(err){
                reject(err);
            }
        })
    },
    
    selectRows : (con, namespace, queryId, param , callback) => {
        return new Promise( async (resolve, reject) => {

            try{ 

                var query = await mybaitsMapper.getStatement(namespace, queryId, param, format);

                let queryData = await new Promise((resolve, reject) =>{
                    try{
                        con.query(query, (err, rows, fileds) => {
                            if(err){
                                winstonLogger.error('======= sql snytax Error =====');
                                console.log(err);
                                con.rollback();
                                con.release();  
                                reject(err);
                            }
                            resolve(rows);
                        });
                    }catch(err){
                        winstonLogger.error('======= sql snytax Error =====');
                        console.log(err);
                        con.rollback();
                        con.release();  
                        reject(err);
                    }
                });


                resolve(queryData)

            }catch(err){
                winstonLogger.error('======= sql mapper Error =====');
                console.log(err);
                con.rollback();
                con.release();  
                reject(err);
            }
        });
    },
    
}