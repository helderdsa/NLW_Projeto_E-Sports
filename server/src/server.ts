import express from 'express';

const app = express()

app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, message: "acessou ads 1" },
    { id: 2, message: "acessou ads 2" },
    { id: 3, message: "acessou ads 3" },
    { id: 4, message: "acessou ads 4" },
  ])
})

app.listen(3333);
