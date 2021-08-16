import { updateLanguageServiceSourceFile } from "typescript";

const express = require('express');
const app = express();

app.use(express.json());

const users = [
    {id: 1, name: 'John' },
    {id: 2, name: 'Mike' },
    {id: 3, name: 'David' },
    {id: 4, name: 'Jessica' } 
]

app.get('/api/users', (req, res) => {
    res.send(users)
})

app.get('/api/users:id', (req, res) => {
    let user = users.find(user => user.id === parseInt(req.params.id))
    if(!user) res.status(404)
})

app.post('/api/users/:id', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name
    }
    users.push(user)
    res.send(user)
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})