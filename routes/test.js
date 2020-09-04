import express from 'express'
import mysqlConnection from '../connection.js';

const router = express.Router();

//Get all test
router.get('/test', (req, res) => {
    const pathId = req.query.pathId;
    if (pathId) {
        try {
            mysqlConnection.query(`SELECT * FROM test WHERE path_id = ${pathId}`, (err, rows, fields) => {
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

//Get test by ID
router.get('/test/id', (req, res) => {
    const testId = req.query.testId;
    if (testId) {
        try {
            mysqlConnection.query(`SELECT * FROM test WHERE test_id = ${testId}`, (err, rows, fields) => {
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


//Add new test
router.post('/test', (req, res) => {
    const test = req.body;
    if (test) {
        try {
            mysqlConnection.query('INSERT INTO test SET?', test, (err, rows, fields) => {
                if (err) {
                    log.console(err);
                } else {
                    res.send(`New test has been added`);
                }
            });
        } catch (error) {
            console.log(error);
        }

    }
});


//Update test
router.put('/test/id', (req, res) => {
    const testId = req.query.testId;
    const test = req.body;
    if (testId && test) {
        try {
            mysqlConnection.query(`UPDATE test SET ? WHERE test_id = ${testId}`, test, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    res.end();
                } else {
                    res.send(`Test has been updated`);
                    res.end();
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
});


export default router;