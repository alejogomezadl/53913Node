const express = require('express');

const routes = express.Router();


routes.route("/create").post((req, resp, next) => {

    console.log(req.body)
    console.log("numero proveedor",req.body.proveedor.telefono)
    resp.json(

        {
            "itemId": 1,
            "nombre": "camisa",
            "talla":req.body.talla
        }
    )

})

module.exports = routes
