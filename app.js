// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000
const users = require('./data.js') 

console.log(users)
// app.use(express.json());


// app.get('/api/users', (req, res) => {
//     res.send(users)
// })

// app.get('/api/users/:id', (req, res) => {
//     let user = users.find(user => user.id === parseInt(req.params.id))
//     if(!user) res.status(404)
//     res.send(user)
// })

// app.post('/api/users', (req, res) => {
//     const user = {
//         id: users.length + 1,
//         name: req.body.name
//     } 
//     users.push(user)
//     res.send(user)
// })

// app.put('/api/users/:id', (req, res) => {
//     let user = users.find(user => user.id === parseInt(req.params.id)) 
//     user.name = req.body.name
//     res.send(user)
// })


// app.delete('/api/users/:id', (req, res) => {
//     let user = users.find(user => user.id === parseInt(req.params.id)) 
//     users.splice(users.indexOf(user),1)
//     user.name = req.body.name
//     res.send(users)
// })


// app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`)
// })