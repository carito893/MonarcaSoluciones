import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

//import BootstrapVue from 'bootstrap-vue';
//Vue.use(BootstrapVue);
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';

/* import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios); */

//axios.defaults.baseURL = 'http://127.0.0.1:5500/api';

/* import passport from 'passport-local';
import flash from 'connect-flash';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session'; */


// Para acceder al directorio actual 
import path from 'path';

const app = express();

//Conexión a la base de datos

const mongoose = require('mongoose');
//const dbUrl: 'mongodb+srv://admin:<Admin123>@cluster0.brfju.mongodb.net/monarcaDB?retryWrites=true&w=majority';
const uri = 'mongodb://localhost:27017/monarcaBD';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

// Or using promises 
mongoose.connect(uri, options).then(
    /** ready to use. The `mongoose.connect()` 
     * promise resolves to mongoose instance . */
    () => {
        console.log('Conectado a DB')
    },
    /** handle initial connection error */
    err => {
        console.log(err)
    }
);

/* const http = require("http");
const hostname ="127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/javascript");
    res.end("/index.html");
});

const MongoClient = require("mongodb").MongoClient;
const uri ="mongodb+srv://admin:<Admin123>@cluster0.brfju.mongodb.net/monarcaDB?retryWrites=true&w=majority";
MongoClient.connect(uri, { useUnifiedTopology: true }, (err, client) => {
    if (err) console.log("Error occurred connecting to MongoDB...");
    console.log("Connected to MongoDB!");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
 */
// require('./config/passport')(passport);
//MIDDELWARE

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }));
/* app.use(cookieParser());
app.use(session({
    secret: 'Isabella123',
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize);
app.use(passport.session());
app.use(flash()); */


//RUTA
app.use('/api', require('./routes/beneficio'));
app.use('/api', require('./routes/usuario'));
//require('./app/routes')(app, passport);

// Middleware para Vue.js router modo history 
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//EJEMPLO DE PUERTO QUEMADO
/* app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
}); */
//PUERTOS

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function() {
    console.log('Example app listening on port' + app.get('puerto'));
});