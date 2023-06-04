const express = require('express');
const app = express();
const connectDatabase=require("./config/database.js")
const dotenv=require("dotenv")
const bodyParser=require("body-parser")
const dynamic= require("./middleware/dynamic.js")
const boxcontroller=require("./controller/boxcontroller.js")


app.use(bodyParser.json());
dotenv.config({path:'config/.env'});
connectDatabase();



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});


app.post("/addbox",boxcontroller.addBox); // Add a new box to the database
app.get("/getbox",boxcontroller.getBox); // Get all the boxes from the database

// console.log(dynamic.main());

