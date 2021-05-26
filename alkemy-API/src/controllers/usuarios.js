const mySQLConnection = require('../database');

module.exports = {
    async getUsuarios(req, res)
    {
        mySQLConnection.query('SELECT * FROM usuarios', (err, rows, fields) =>
        {
            if(!err)
            {
                res.json(rows);
            }
            else
            {
                console.log(err);
            }
        }
        );
    }
}