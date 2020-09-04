import express from 'express'
import mysqlConnection from '../connection.js';

const router = express.Router();

//Get all doctors
router.get('/auth', (req, res) => {
    var email = req.query.email;
    var pass = req.query.pass;
    mysqlConnection.query(`SELECT * FROM pathology WHERE email = '${email}' AND pass = '${pass}'`, (err, rows, fields) => {
        if (err) {
            console.log(err);
        } else {
            res.send(rows);
            console.log(rows);
        }
        res.end();
    });
});

router.put('/auth', (req, res) => {
    const pathology = req.body;
    mysqlConnection.query('INSERT INTO pathology SET?', pathology, (err, rows, fields) => {
        if (err) {
            log.console(err);
        } else {
            res.send(`Org details has been updated!`);
        }
    });
});


export default router;