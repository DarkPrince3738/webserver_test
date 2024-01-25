const express = require('express')

const app = express()
const port = 3001

const {database} = require("./database");
const {passwordToggle} = require("./public/login-page-scripts/password-toggle.js")

const cookieParser = require('cookie-parser')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/public/landing-page.html")
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/public/login.html")
})

app.get('/', (req, res) => {
    res.redirect( '/home')})


app.get('/test', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/login', (req, res)=>{
    console.log(req.body)
    let hasAuthenticatedUser = false
    for(let i = 0; i < database.users.length; i++){
        const userToCheck = database.users[i]

        if(userToCheck.username === req.body.username && userToCheck.password === req.body.password){
            const sessionToken = `${req.body.username}_${Date.now()}`
            res.send(sessionToken)
            hasAuthenticatedUser = true
            break;
        }
    }
    if(!hasAuthenticatedUser){
        res.sendStatus(401)
    }

})

app.get('/api/:username/city', (req, res) => {
        const user = database.users.find(user => req.params.username === user.username)
        if (user) {
            res.send(user.city)
        }
        else{
            res.sendStatus(404)
        }
    }
)

app.get('/api/:username/profile-picture-path', (req, res) => {
        const user = database.users.find(user => req.params.username === user.username)
        if (user) {
            res.send( user.profilePicturePath)
        }
        else{
            res.sendStatus(404)
        }
    }
)

app.get('/dashboard', (req, res)=>{
    if(req.cookies){
        res.sendFile(__dirname + "/public/dashboard.html")}
    else{
        res.redirect('/')
    }
}
)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})