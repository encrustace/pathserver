import express from 'express'
import mysqlConnection from '../connection.js';

const router = express.Router();

//Get all doctors
router.get('/doctor', (req, res) => {
    const pathId = req.query.pathId;
    if (pathId) {
        try {
            mysqlConnection.query(`SELECT * FROM doctor WHERE path_id = ${pathId}`, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    res.end();
                } else {
                    res.send(rows);
                    res.end();
                }
            });
        } catch (error) {
            console.log(error);
        }

    }
});

//Get doctor by ID
router.get('/doctor/id', (req, res) => {
    const pathId = req.query.pathId;
    const doctorId = req.query.doctorId;
    if (pathId && doctorId) {
        try {
            mysqlConnection.query(`SELECT * FROM doctor WHERE path_id = ${pathId} AND doctor_id = ${doctorId}`, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    res.end();
                } else {
                    res.send(rows);
                    res.end();
                }
            })
        } catch (error) {
            console.log(error);
        }

    }
});


//Add new doctor
router.post('/doctor', (req, res) => {
    const doctor = req.body;
    if (doctor) {
        try {
            mysqlConnection.query('INSERT INTO doctor SET?', doctor, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    res.end();
                } else {
                    res.send(`New doctor has been added`);
                    res.end();
                }
            });
        } catch (error) {
            console.log(error);
        }

    }
});

//Update doctor
router.put('/doctor/id', (req, res) => {
    const doctorId = req.query.doctorId;
    const doctor = req.body;
    if (doctorId && doctor) {
        try {
            mysqlConnection.query(`UPDATE doctor SET ? WHERE doctor_id = ${doctorId}`, doctor, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    res.end();
                } else {
                    res.send(`Doctor has been updated`);
                    res.end();
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
});


//Delete doctor
router.delete('/doctor/id', (req, res) => {
    const doctorId = req.query.doctorId;
    if (doctorId) {
        try {
            mysqlConnection.query(`DELETE FROM doctor WHERE doctor_id = '${doctorId}'`, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    res.end();
                } else {
                    res.send(`User with the id ${doctorId} deleted from the database`);
                    res.end();
                }
            });
        } catch (error) {
            console.log(error);
        }

    }
});


export default router;