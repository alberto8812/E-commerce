require ('dotenv').config()
const PORT=process.env.PORT  || 3001,
    app=require('./app');

app.listen(PORT,()=>{console.log(`server listen on port ${PORT}`)})