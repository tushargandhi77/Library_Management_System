const mongoose = require('mongoose')

async function dbconnect(){
    DBURL = "mongodb+srv://gandhitushar418:OfyM8TtvwtVFUMPm@cluster0.d1kzdge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    DBNAME = "Library"

    try{
        await mongoose.connect(DBURL+"/"+DBNAME)
        console.log("DB Connected")
    }
    catch(error){
        console.log(error)
    }
}


module.exports = dbconnect