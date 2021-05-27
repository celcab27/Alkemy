const { json } = require('express');
const mySQLConnection = require('../database');

module.exports = {
    async getAllIncome(req, res)
    {
        mySQLConnection.query('SELECT * FROM operaciones WHERE type_ = "Ingreso"', (err, rows, fields) =>
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
    },
    async createIncome(req, res)
    {
        const {user_id, category, type, title, amount } = req.body;

        mySQLConnection.query('INSERT INTO operaciones (user_id_, category_, type_, title_, amount_) VALUES(?, ?, ?, ?, ?)', [user_id, category, type, title, amount], (err, rows, fields) =>
        {
            if(!err)
            {
                res.json({Status: "Income succesfully saved"});
            }
            else
            {
                console.log(err);
            }
        });
    }
}