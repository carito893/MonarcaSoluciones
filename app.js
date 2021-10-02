import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
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