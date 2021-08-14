class KeyHandler{
    static validateKey(key){
        const apiKey = require('../../config/apiKey');
        if(!key){
            return false;
        }
        const buff = Buffer.from(key.substring(6), 'base64').toString('ascii');
        if(buff != apiKey){
            return false;
        }
        return true;
    }
}

module.exports = KeyHandler;