import express from 'express'
import mysqlConnection from '../connection.js';

const router = express.Router();

//Get all entries item
router.get('/entry_item', (req, res) => {
    var pathId = req.query.pathId;
    var entryId = req.query.entryId;
    try {
        mysqlConnection.query(`SELECT * FROM entry_item WHERE path_id = ${pathId} AND entry_id = ${entryId}`, (err, rows, fields) => {
            if (err) {
                console.log(err);
            } else {
                res.send(rows);
            }
        });
    } catch (error) {
        console.log(error);
    }
});



//Add new entry item
router.post('/entry_item', (req, res) => {
    const entryItem = req.body;
    if (entryItem) {
        try {
            mysqlConnection.query('INSERT INTO entry_item SET?', entryItem, (err, rows, fields) => {
                if (err) {
                    log.console(err);
                } else {
                    res.send(`New entry item has been added`);
                }
            });
        } catch (error) {
            console.log(error);
        }

    }
});


//Update entry item
router.patch('/entry_item/id', (req, res) => {
    const entryItemId = req.query.entryItemId;
    const entryItem = req.body;
    if (entryItemId && entryItem) {
        try {
            mysqlConnection.query(`UPDATE entry_item SET ? WHERE entry_item_id = ${entryItemId}`, entryItem, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    res.end();
                } else {
                    res.send(`Entry item has been updated`);
                    res.end();
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
});



export default router;