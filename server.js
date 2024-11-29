const express = require('express');
const blogsRouter = require("./router/blogsRouter");

require ("dotenv").config();
let app = express();
const port = process.env.PORT
app.use(express.json());



app.use('/api', blogsRouter);



app.listen(port, () => {
    console.log("Servidor escuchando en el puerto " + port);
});