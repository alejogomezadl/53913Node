const express = require('express');

const routes = express.Router();

const finanzasService = require("../service/gestionFinanciera")


routes.route("/agregar").post((req, resp, next) => {

    finanzasService.registroOperacion(req.body.operacion, req.body.valor)
    resp.json({
        "resultado": "Operacion exitosa"
    })

})


routes.route("/meta").get((req, resp) => {

    let result = finanzasService.metaCumplida(parseInt(req.query.meta))
    resp.json({
        "resultado": result
    })
})





const v1 = (req, resp, next) => {
    console.log("v1");
    next()
}

const v2 = (req, resp, next) => {
    console.log("v2");
    next();
}


const v3 = (req, resp, next) => {
    console.log("v3");
    next();
}


routes.route("/ejemplo").get([v1, v2, v3], (req, resp, next) => {

    console.log("ejecucion")

    resp.json(
        {
            "respuesta": "exitosa"
        })
}
)




module.exports = routes
