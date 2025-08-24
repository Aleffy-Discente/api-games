import express from 'express';

const app = express()
app.use(express.json())


const games = []

app.post('/games', (req, res) => {
    games.push(req.body)
    res.status(201).json(req.body)
})

app.get('/games', (req, res) => {
    res.status(200).json(games)
})

app.listen(3000)

/*
aka1

lZnDC5Qd8Q6W5y0W
*/