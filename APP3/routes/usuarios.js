const express = require('express');

const routes = express.Router();





routes.route("/traer/:id/:saludo").get((req, resp, next) => {
    resp.json(
        {
            "nombre":"alejo",
            "apellido":"gomez",
            "edad": req.params.id * 2,
            "saludo": req.params.saludo
        }
    ) 
})


routes.route("/consulta").get((req, resp, next) => {

let json1 = {"nombre":"alejo", "apellido":"gomez"}
let json2 = {"nombre":"", "apellido":""}

let resultado;

if(req.query.documento === '1234'){
resultado = json1;
}else{
    resultado =   json2
}


    resp.json(
     resultado
    )
})

module.exports = routes