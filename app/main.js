let express = require('express');
let app = express();

app.set('views', 'app/views')
app.set('view engine', 'pug')

app.get('/', (req, res) => render('index'))
