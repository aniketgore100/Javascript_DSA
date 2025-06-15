const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const connect  = require('./db/dbConfig');
connect().then(() => {
    console.log('Database connected successfully');
}).catch(err => {
    console.error('Database connection failed:', err);
});

// routes section
const indexRoutes = require('./routes/index.routes');
const morgan = require('morgan');
app.use('/api', indexRoutes);
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.send('Welcome to the DSA API');
});

app.listen(process.env.PORT || 8081, () => {
    console.log('Server is running on port 8081');
});

