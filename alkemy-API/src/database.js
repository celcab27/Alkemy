const mysql = require('mysql2');

const mySQLConnection = mysql.createConnection({
    host: 'localhost',
    user: 'krezz',
    password: 'i4pu-3p87-9YQC',
    database: 'alkemydb'
});

mySQLConnection.connect(function (err) {
    if(err)
    {
        console.log(err);
        return;
    }
    else{
        console.log('Database is connected');
    }
});

module.exports = mySQLConnection;