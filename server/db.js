// import mongo client
const { MongoClient } = require('mongodb');

let dbConnection;
const uri = "mongodb+srv://zoha:fvelarisr@ngo.a4mmh2z.mongodb.net/?retryWrites=true&w=majority";

module.exports = {
    //first function will establish connection to database
    connectToDb: (callbackFunction) => {
        MongoClient.connect(uri) //this function is asynchronous and returns a promise
            .then( (client) => {
                dbConnection = client.db("NGOdatabase"); //returns database connection i.e. an interface we can use to intrecat with db
                return callbackFunction();
            })
            .catch( (err)=> {
                console.log(err);
                return callbackFunction(err);
            })
    },

    //return database connection after we have connected to it
    
    getDb : () => dbConnection // will call this function from index.js/app.js after we've connected to the database
}