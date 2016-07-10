let express = require('express');
let app = express();

app.set('views', 'app/views')
app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index'))

app.listen(3000, () => console.log('listening on port 3000...'))
