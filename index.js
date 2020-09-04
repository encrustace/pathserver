import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import doctorRoutes from './routes/doctor.js';
import entryRoutes from './routes/entry.js';
import testRoutes from './routes/test.js';
import authRoutes from './routes/auth.js';
import testItemRoutes from './routes/entry_item.js';


const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/', doctorRoutes);
app.use('/', entryRoutes);
app.use('/', testRoutes);
app.use('/', testItemRoutes);
app.use('/', authRoutes);


app.get('/', (req, res) => {
    res.send('Hello');
})


app.listen(PORT, () => {console.log(`Listening at http://localhost:${PORT}`)});