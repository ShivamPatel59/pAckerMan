const express = require("express");
const app = express();
const connectDatabase = require("./config/database.js");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const dynamic = require("./middleware/dynamic.js");
const boxcontroller = require("./controller/boxcontroller.js");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
dotenv.config({ path: "config/.env" });
connectDatabase();


app.post("/addbox", boxcontroller.addBox); // Add a new box to the database
app.get("/getbox", boxcontroller.getBox); // Get all the boxes from the database

console.log(`Server is running on port ${process.env.PORT}`);
app.listen(process.env.PORT, () => {
});
console.log(dynamic.main());
