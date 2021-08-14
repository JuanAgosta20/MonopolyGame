const express = require('express');
const mysql = require('mysql');
const app = express();
// Check connect
/*connection.connect(error =>{
    if(error){
        throw error;
    }
    console.log('Database server running.')
})*/

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

app.get('/',(req, res) =>{
    res.send('Hola mundo.');
});
//Routes
app.use(require('./routes/questions'));

//Starting the server
app.listen(app.get('port'),()=>{
    console.log(`Server running at port:${app.get('port')}`);
});