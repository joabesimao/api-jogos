const express = require("express")
const bodyParser = require("body-parser")

const app = express()


app.use(bodyParser.json())
const port = 5000

app.get("/teste", (req, res) => res
    .status(200)
    .send({ mensagem: "seja bem vindo" })


)


app.listen(port, () => console.log(`listen on port:${port}`))
