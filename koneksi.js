var = mysql = require('mysql');

const conn = mysql.createConnection({
    host:''
    user:''
    passqord:''
    database:''

});

conn.connection((err)=>{
    if(err) throw err;
    console.log('Koneksi Berhasil');
});

module.exports=conn;