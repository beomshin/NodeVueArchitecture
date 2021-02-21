module.exports = (() => {

    return {
            dev : {
                host : 'localhost',
                port : '3306',
                user : 'modnAdmin',
                password : 'modn12!@' ,
                database : 'modnMenuAdmin'
            },
            test : {
                host : process.env.TEST_HOST,
                port : process.env.TEST_PORT,
                user : process.env.TEST_USERNAME,
                password : process.env.TEST_PASSWORD ,
                database : process.env.TEST_DATABASE
            },
            op : {
                host : process.env.OP_HOST,
                port : process.env.OP_PORT,
                user : process.env.OP_USERNAME,
                password : process.env.OP_PASSWORD ,
                database : process.env.OP_DATABASE
            }
    }

})();