const fs = require('fs');
/**
 * Capture messages loger error
 * @param {string} message 
 * @returns 
 */
const logLocal = (message) =>{
    const path = `${__dirname}/../logs/`
    console.log(message)
    try{
        if(!fs.existsSync(path)) fs.mkdirSync(path);
        fs.appendFile(`${path}/log_${(new Date().toISOString()).split('T').shift()}.log`,message,(e)=>{
            if(e)console.log(e);
        });
    }catch(e){
        console.log(e);
    }
}
module.exports = {logLocal}