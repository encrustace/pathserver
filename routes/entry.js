import express from 'express'
import mysqlConnection from '../connection.js';

const router = express.Router();


//Get all entries
router.get('/entry', (req, res) => {
    const pathId = req.query.pathId;
    if (pathId) {
        try {
            mysqlConnection.query(`SELECT * FROM entry WHERE path_id = ${pathId}`, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(rows);
                }
            });
        } catch (error) {
            console.log(error);
        }

    }
});

//Get entry by ID
router.get('/entry/id', (req, res) => {
    const entryId = req.query.entryId;
    if (entryId) {
        try {
            mysqlConnection.query(`SELECT * FROM entry WHERE entry_id = ${entryId}`, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(rows);
                }
            })
        } catch (error) {
            console.log(error);
        }

    }
});


//Add new entry
router.post('/entry', (req, res) => {
    const entry = req.body;
    if (entry) {
        try {
            mysqlConnection.query('INSERT INTO entry SET?', entry, (err, rows, fields) => {
                if (err) {
                    log.console(err);
                } else {
                    res.send(rows);
                    res.end();
                }
            });
        } catch (error) {
            console.log(error);
            res.end();
        }

    }
});

//Update entry
router.patch('/entry/id', (req, res) => {
    const entryId = req.query.entryId;
    const entry = req.body;
    if (entryId && entry) {
        try {
            mysqlConnection.query(`UPDATE entry SET ? WHERE entry_id = ${entryId}`, entry, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    res.end();
                } else {
                    res.send(`Entry has been updated`);
                    res.end();
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
});



//Delete entry
router.delete('/entry/id', (req, res) => {
    const entryId = req.query.entryId;
    if (entryId) {
        try {
            mysqlConnection.query(`DELETE FROM entry WHERE entry_id = ${entryId}`, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(`Entry with the id ${entryId} deleted from the database`);
                }
            });
        } catch (error) {
            console.log(error);
        }

    }
});


export default router;