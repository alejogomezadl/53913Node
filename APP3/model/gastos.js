
const mgs = require("mongoose");

const gastosSchema = new mgs.Schema(

    {
            descripcion:String,
            valor:Number,
            fecha:String,
            id:Number
    }

)

mgs.model("gastos",gastosSchema)