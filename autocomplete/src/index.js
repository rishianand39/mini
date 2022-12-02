const express=require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const RestaurantModel=require("./models/restaurants.model")
app.get("/",(req,res)=>{
    try {
        return res.status(200).json("Welcome page of autcomplete endpoints")
    } catch (error) {
        return res.status(404).json('something went wrong')
    }
});

app.get('/autocomplete',async(req,res)=>{
    try {
		const { name } = req.query

		const agg = [
			{
				$search: {
					autocomplete: {
						query: name,
						path: 'name',
						fuzzy: {
							maxEdits: 2,
						},
					},
				},
			},
            {
				$project: {
					_id: 0,
					name: 1,
				},
			},
		]

		const response = await RestaurantModel.aggregate(agg)

		return res.json(response)
    } catch (error) {
        return res.status(500).json('something went wrong');
    }
})

module.exports=app;