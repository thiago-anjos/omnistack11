const express = require('express');
const routes = require('./routes');
const cors = require('cors');


const app = express();
// falando para o express ir no corpo da requisicao e converter o json para um objeto do javascript
app.use(express.json());

app.use(routes);
// qual endereço que pode usar nossa aplicação, usando origin
app.use(cors());
app.listen(3333);
