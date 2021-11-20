const express = require('express');

const app = express();

const userRoutes= require("./routes/usuarios")

const inventRoutes = require("./routes/inventario")

const finanzasRoutes = require("./routes/finanzas")

app.use(express.json());

app.use("/user", userRoutes )

app.use("/inventario", inventRoutes )

app.use("/finanzas", finanzasRoutes )


const server = app.listen(3000, ()=>{
    let port = server.address().port;
    console.log("hola: ", port)
})




