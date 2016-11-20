let express = require('express');
let app = express();

app.set('views', 'app/views');
app.set('view engine', 'pug');

app.use(express.static('dist'));

app.get('/', (req, res) => res.render('index'));

let port = 3456;
app.listen(port, () => console.log(`listening on port ${port}...`));
