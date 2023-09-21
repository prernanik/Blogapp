
 

// const {MongoClient}=require('mongodb');


// let dbconnection

// module.exports={
//     connectToDb:(cb)=>{
//        MongoClient.connect('mongodb://127.0.0.1:27017/Login')
//        .then((client) =>{
//         dbconnection=client.db();
//           return cb()
//        })
//        .catch(err =>{
//         console.log(err);
//         return cb(err);
//        })
//    },

//    getdb :()=>dbconnection

   
// }

const mongoose = require('mongoose');


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://prerna08nikhare:prerna08@prerna.091fpuo.mongodb.net/Login`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      
    }

  }
  module.exports = {connectDB};