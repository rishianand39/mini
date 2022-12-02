const connect =require("./configs/db")
const app =require("./index");
const dotenv = require("dotenv")
dotenv.config();
const PORT=process.env.PORT || 8000;
app.listen(PORT,async()=>{
    try {
       await connect();
        console.log(`Listening on port number ${PORT}`);
    } catch (error) {
        console.log(error.message);
    }
})