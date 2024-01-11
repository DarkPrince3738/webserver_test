const express = require('express')

const app = express()
const port = 3001

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.get('/test', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/login', (req, res)=>{
    console.log(req.body)
    if(req.body.username === 'alex' && req.body.password === 'pass'){
        res.send("Authenticated!")
    }
    else{res.send("Wrong information")}
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})