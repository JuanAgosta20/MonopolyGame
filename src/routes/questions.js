const express = require('express');
const router = express.Router();
const sql = require('../db');
const KeyHandler = require('../Handlers/KeyHandler')
router.use(express.json());

router.get('/questions',(req, res)=>{
    const keyOK = KeyHandler.validateKey(req.headers.authorization, res);
    if(!keyOK) res.sendStatus(401);
    else{
        sql.query('Select * from Questions',(error, result, fields)=>{
            if(error) throw error;
            res.send(result);
        });
    }
});

router.post('/question',(req, res)=>{
    const keyOK = KeyHandler.validateKey(req.headers.authorization, res);
    if(!keyOK) res.sendStatus(401);
    else{
        sql.query('INSERT INTO questions SET ?', req.body,(error)=>{
            if(error) throw error;
            res.send('Pregunta agregada correctamente');
        });
    }
});

module.exports = router;