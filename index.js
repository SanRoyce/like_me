const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());


// middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("estas solicitando la ruta raiz");
    });






app.listen(3000, console.log("SERVER ON 👌"));