let async = require('async');

let loginObj = {};
loginObj.checkUser = (data) => {
    async.waterfall([
        myFirstFunction,
        mySecondFunction,
        lastFunction
    ], function (err, result) {
        // result now equals 'done'
        console.log("Error Block");
        console.log(err);
        console.log(result);
    });

    function myFirstFunction(callback) {
        callback(null, data);
    }
    function mySecondFunction(arg1, callback) {
        // arg1 now equals 'one' and arg2 now equals 'two'
        console.log("Second Function");
        let err = "Data is not there";
        if(!arg1){
            callback(err, null);
        }else{
            callback(null, arg1, "Two");
        }
    }
    function lastFunction(arg1, arg2, callback){
        console.log("Third Function");
        console.log(arg2);
        callback(null, arg1);
    }
}

module.exports = loginObj;