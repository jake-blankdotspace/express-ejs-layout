 const express = require('express');
 const bodyParser = require('body-parser');
 const ejsLayout = require('express-ejs-layouts');
 const path = require('path');

 const app = express();

 // Route Handlers (controllers)
 const homeController = require('./controllers/homeController.js');

// View config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(ejsLayout);

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// http://localhost:3000/
app.get('/', homeController.index);

// http://localhost:3000/page
app.get('/page', (req, res) => {
res.send('The other page...')
});

app.listen(3000, function() {
 console.log('Example app listening on port 3000');
});
