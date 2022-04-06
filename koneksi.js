var mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost'
    user:'root'
    password:''
    database:''

});

conn.connection((err)=>{
    if(err) throw err;
    console.log('Koneksi Berhasil');
});

module.exports=conn;