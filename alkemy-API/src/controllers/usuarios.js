const mySQLConnection = require('../database');

module.exports = {
    async getUsuarios(req, res)
    {
        mySQLConnection.query('SELECT * FROM usuarios', (err, rows, fields) =>
        {
            if(!err)
            {
                res.status(200).json(rows);
            }
            else
            {
                console.log(err);
                res.status(400).json({Error: err});
            }
        }
        );
    },
    
    async getUsuario(req, res)
    {
        const {user} = req.params;
        mySQLConnection.query('SELECT * FROM usuarios, operaciones WHERE user_id_ = usuarios.id_ AND usuarios.id_ = ? ', [user], (err, rows, fields) =>
        {
            if(!err)
            {
                res.json(rows[0]);
            }
            else
            {
                console.log(err);
            }
        });
    }
}