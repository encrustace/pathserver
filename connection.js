import mysql from 'mysql';

const mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '96@Linux',
    database : 'pathsoft',
    multipleStatements : true
});

mysqlConnection.connect((err) => {
    if (err) {
        console.log('Connaction failed');
    }else{
        console.log('Connected');
    }
});

export default mysqlConnection;