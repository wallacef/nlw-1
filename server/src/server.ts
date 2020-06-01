import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Wallace',
        'Diego',
        'Robson',
        'Daniel',
        'Victoria'
    ]);
});

app.listen(3333);