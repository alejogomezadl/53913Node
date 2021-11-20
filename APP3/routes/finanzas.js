const { response } = require('express');
const express = require('express');

const mgs = require("mongoose")

const db = require("../model/db");

const gastosSchema = require("../model/gastos");

const routes = express.Router();




routes.route("/gastos").post((req, resp, next) => {
    mgs.model("gastos").create(
        {
            "descripcion": req.body.descripcion,
            "fecha": req.body.fecha,
            "valor": req.body.valor,
            "id": req.body.id
        },
        (err, gasto) => {

            if (err) {
                console.log(err)
                resp.json({ "error": "error al guardar" })
            }

            console.log(gasto)
            resp.json(gasto)
        }
    )
})



routes.route("/listarGastos").get((req, resp, next) => {

    mgs.model("gastos").find({}, (err, gastos) => {
        resp.json(gastos)
    })

})


routes.route("/findByDate").get((req, resp, next) => {

    mgs.model("gastos").find({ "fecha": req.query.fecha }, (err, gastos) => { resp.json(gastos) });

})




routes.route("/actualizar").put((req, resp, next) => {

    mgs.model("gastos").updateOne(
        {
            "id": req.body.id
        },
        {
            "descripcion": req.body.descripcion,
            "valor": req.body.valor,
            "fecha": req.body.fecha
        },

        (err, gasto) => {
            if (gasto.modifiedCount > 0) {
                resp.json({
                    "resultado": "actualizacion exitoza",
                })
            }
        })

})



module.exports = routes;