
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const connectDB = require('./config/db');
const app = express();

const filesRoute = require('./routes/files');
// configuration
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 3000;
let dbStatus = false;
connectDB().then((result)=>{
    dbStatus = result
    app.listen(PORT,()=>{
        console.log(`Server is listening on Port : ${PORT}`);
    })
    
});
app.use(morgan('common'));
app.use(express.json());

app.use('/public',express.static('public'));
app.set('views', path.join(__dirname,'/views'));
app.set('view engine','ejs');

app.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"Welcome developer",
        status:200,
        databaseStatus: dbStatus
    })
})

app.use('/api/files',filesRoute);
app.use('/files',filesRoute);




