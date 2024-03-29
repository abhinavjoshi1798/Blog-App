import "dotenv/config"
import cors from "cors"
import express from "express"
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    return res.send("Backend is running")
})

import routes from "./routes/index.js"
app.use(routes)


app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})