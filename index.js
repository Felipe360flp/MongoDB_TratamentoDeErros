const express = require('express');
const routes = require('./src/routes/routes.js');
const port = 3000;
const app = express();

const cors = require('cors')
app.use(express.json());

app.use(cors())
app.use('/personagens',routes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

