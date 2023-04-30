const express = require('express')
const app = express()
const cors = require('cors')

const teachers = require("./controllers/teachers")
//config
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

//Routes
app.use('/', require('./routes/index'))
app.use('/admin/teachers', require('./routes/teachers'))



const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Starting on port ${PORT}`);
})