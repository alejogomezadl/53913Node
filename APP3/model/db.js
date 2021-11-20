const mgs= require("mongoose");

mgs.connect("mongodb://localhost:27017/financiera" ,  (err, db) => {

        if(err){
             throw err
        }

        console.log("BD conectada exitosamente")

}  )

module.exports = mgs

