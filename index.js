const express = require('express')
const app =  express()
const port = 3000

//crear end point en el metodo GET 
app.get('/', (req,res) => {
    res.send('Hello world')

})

app.listen(port, ()=>{
    console.log(`Levantando server en el puerto ${port}`)
})