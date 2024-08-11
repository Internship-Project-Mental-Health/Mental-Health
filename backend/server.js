const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const rootroutes = require("./routes/routerroute");
const productroute = require("./routes/productroutes");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 6000 || 8000
const app = express();
connectDB()

app.use("/", rootroutes);
app.use("/Products", productroute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`.bgBlue.black)
})