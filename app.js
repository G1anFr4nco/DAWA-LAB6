const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views');


app.get('/miplantilla-pug', (req, res) => {
    res.render('miplantilla', { 
        mensaje: '¡Hola desde la plantilla Pug!',
        titulo: 'Página de Ejemplo',
        descripcion: 'Esta es una página de ejemplo con datos dinámicos.'
    });
});

app.get('/miplantilla-ejs', (req, res) => {
    res.render('miplantilla.ejs', { 
        mensaje: '¡Hola desde la plantilla EJS!',
        titulo: 'Página de Ejemplo',
        descripcion: 'Esta es una página de ejemplo con datos dinámicos.'
    });
});

app.get('/multiplicar/:numero', (req, res) => {
    const numero = parseInt(req.params.numero);
    const multiplicacion = [];
    for (let i = 1; i <= 10; i++) {
        multiplicacion.push({ multiplicando: i, resultado: i * numero });
    }
    res.render('tabla-multiplicar', { numero, multiplicacion });
});

app.get('/Portafolio/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.render('index', { nombre });
});

app.get('/Portafolio/:nombre/habilidades', (req, res) => {
    const nombre = req.params.nombre;
    // Lógica para obtener las habilidades del usuario o empresa
    const habilidades = ['HTML', 'CSS', 'JavaScript'];
    res.render('habilidades', { nombre, habilidades });
});

app.get('/Portafolio/:nombre/contactame', (req, res) => {
    const nombre = req.params.nombre;
    res.render('contacto', { nombre });
});

app.listen(3000, () => {
    console.log('Aplicacion web dinamica ejecutandose en el puerto 3000');
});