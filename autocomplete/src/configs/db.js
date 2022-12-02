const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const connect=()=>{
    return mongoose.connect('mongodb+srv://autocomplete:autocomplete@cluster0.dbtqxij.mongodb.net/sample_restaurants?retryWrites=true&w=majority',{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
}
module.exports= connect;