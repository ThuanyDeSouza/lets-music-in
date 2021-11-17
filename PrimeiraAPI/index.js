import express from "express"
import morgan from "morgan"
import cors from "cors"
import bodyParser from "body-parser"
import routes from "./routes/routes.js"
import db from "./config/database.js"


const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(21626, () => {
    console.log('Express started at http://localhost:21626')
}) 

try {
    await db.authenticate()
    console.log("Conexão com banco MySQL FOI estabelecida")
} catch (erro)
{
    console.error("Conexão com o banco MySQL NAO FOI Possível" + erro) 
}

app.use(Router)

app.listen(21626, ()=> console.log("Server executando na http//localhost:21626"))

