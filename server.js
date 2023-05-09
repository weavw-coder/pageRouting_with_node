// Importing Express
const express = require('express');
// Initializing Express in the app variable
const app = express();
// Listening on a port
app.listen(3000, () => {
    console.log('Listening on port 3000');
});

// Middlewares
app.use(express.static('views')); // Setting the static folder

// Routes
// Home Page Route
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});
// About Page Route
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});
// Redirecting
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});
// Contact Page Route
app.get('/contact', (req, res) => {
    res.sendFile('./views/contact.html', { root: __dirname });
});
// Error
app.use((req, res) =>{
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});