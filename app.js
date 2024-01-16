
const express = require('express')

const app = express()
const port = 3001

const {database} = require("./database");

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.get('/test', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/login', (req, res)=>{
    console.log(req.body)
    let hasAuthenticatedUser = false
    for(let i = 0; i < database.users.length; i++){
        const userToCheck = database.users[i]

        if(userToCheck.username === req.body.username && userToCheck.password === req.body.password){
            //res.send("Authenticated!")
            const token = `${req.body.username}_${Date.now()}`
            res.send(token)
            hasAuthenticatedUser = true
            break;
        }
    }
    if(!hasAuthenticatedUser){
        res.sendStatus(401)
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})