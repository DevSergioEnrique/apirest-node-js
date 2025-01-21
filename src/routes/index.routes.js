const { Router } = require("express")
const router = Router()

const { poolMysql } = require("./../controllers/index.controller.js")

router
    .get("/mysql", poolMysql)

module.exports =  router 

