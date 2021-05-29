const { json } = require('express');
const mySQLConnection = require('../database');

module.exports = {
    async getAllOperations(req, res)
    {
        mySQLConnection.query('SELECT * FROM operaciones ', (err, rows, fields) =>
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
    async createOperation(req, res)
    {
        const {user_id, category, type, title, amount, date } = req.body;

        mySQLConnection.query('INSERT INTO operaciones (user_id_, category_, type_, title_, amount_, date_) VALUES(?, ?, ?, ?, ?, ?)', [user_id, category, type, title, amount, date], (err, rows, fields) =>
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