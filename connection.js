import mysql from 'mysql';

const mysqlConnection = mysql.createConnection({
    host : 'remotemysql.com',
    user : 'XisFbkBe84',
    password : 'tZ7F9NS8tZ',
    database : 'XisFbkBe84',
    multipleStatements : true,
    port : 3306
});

mysqlConnection.connect((err) => {
    if (err) {
        console.log('Connaction failed');
    }else{
        console.log('Connected');
    }
});

export default mysqlConnection;