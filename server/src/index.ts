import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes)

app.listen(3333, () => {
  console.log('\n 🔥 Server listening on http://localhost:3333')
})