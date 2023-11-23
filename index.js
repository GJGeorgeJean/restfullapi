const express = require('express');
const app = express();
const port = process.env.PORT || 2080;
const connect = require('./db/mongoDB');
const morgan = require('morgan');
const USER_ROLE = require('./model/userRoleModel');
const userRouter = require('./router/userRouter')
const cors = require('cors')



//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// APIs

app.use('/',userRouter)

app.get('/', (req,res)=>{
    res.send('welcome home everyone')
})

// db connection and Server
connect ()
.then(()=>{
    try{
        app.listen(port,()=>console.log(`server connected to http://localhost:${port}`))

    }catch(error){
        console.log(error);

    }
})