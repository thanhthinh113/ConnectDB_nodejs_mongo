
import express from 'express';
import { engine } from 'express-handlebars';
import routes from '../routes/index.js';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config()

const app = express()

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

const port = 3000

app.get('/', (req, res) => {
  res.render('news',
  {
    isShow:true,
    helpers: {
        message() { return 'Lap trinh de!'; },
        noti() { return 'Error!'; }
      }
  })
})

console.log('dotenv',process.env.MONGO_DB)

mongoose.connect(process.env.MONGO_DB)
.then(()=>{
  console.log('connect db success')
})
.catch((err)=>{
  console.log(err)
})


routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})