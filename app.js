const express = require("express");
const path = require("path")

const app = express();
app.use(express.static("public"));


// register

app.get("/register", (req,res) => {
    console.log(__dirname + "/views/register.html")
    const ruta = path.join(__dirname, "./views/register.html");
    res.sendFile(ruta);

});

// login

app.get("/login", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"));

});


app.listen(3000, () =>{
 console.log("Servidor escuchando en el puerto 3000");
});