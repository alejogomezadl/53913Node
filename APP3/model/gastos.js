
const mgs = require("mongoose");

const gastosSchema = new mgs.Schema(

    {
            descripcion:String,
            valor:Number,
            fecha:String
    }

)

mgs.model("gastos",gastosSchema)