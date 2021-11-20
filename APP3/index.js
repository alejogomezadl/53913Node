const express = require('express');

const app = express();

const userRoutes= require("./routes/usuarios")

const inventRourtes = require("./routes/inventario")


app.use(express.json());

app.use("/user", userRoutes )

app.use("/inventario", inventRourtes )

const server = app.listen(3000, ()=>{
    let port = server.address().port;
    console.log("hola: ", port)
})




