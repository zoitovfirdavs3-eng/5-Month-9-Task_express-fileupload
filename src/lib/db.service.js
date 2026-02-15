const { default: mongoose } = require("mongoose");

async function dbConnection (){
    try{
        await mongoose.connect(`mongodb://127.0.0.1:27017/9-homework`);
        console.log(`DB successfully connected !`)
    }catch(err){
        console.log(`DB connection error: ${err.message}`);
        throw new Error(`DB connection error: ${err.message}`)
    }
};

module.exports = dbConnection;