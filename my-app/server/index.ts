import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON body parsing

app.get('/', (req, res) => {
    res.send('Server is runnning!');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});