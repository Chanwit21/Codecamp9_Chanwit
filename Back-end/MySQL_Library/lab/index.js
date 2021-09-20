const express = require('express')
const app = express()
const cetagoryRoute = require('./route/cetagories')
const transactionRoute = require('./route/transactions')

app.use(express.json())

app.use('/transactions',transactionRoute)
app.use('/cetagories',cetagoryRoute)

app.use((err,req,res,next)=>{
    res.status(500).json({message:err.message})
})

app.listen(8080,()=>console.log('Server is running on port 8080'))