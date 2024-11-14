//Parte 1 servidor y modulo nuestro

// const http = require("http");
// const math = require("./math.js")

// console.log(math.sum(2, 2))
// console.log(math.pepito)

// http.createServer((req, res) => {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("Aprendiendo en The Bridge2222!");
//     })
//     .listen(3000);

// Parte 2 mostrar un archivo desde el servidor

const http = require("http"); //para crear servidor
const fs = require('fs'); //para leer archivos

http.createServer((req, res) => {
    fs.readFile('test.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);

//EJEMPLO NPM PASCALCASE

// let MiNombre pascalcase
// import pascalcase from 'pascalcase';
const pascalcase = require("pascalcase") //importar



console.log(pascalcase('foo bar baz9')); //=> 'FooBarBaz'

// node --watch index.js