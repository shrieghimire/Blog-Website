const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Connection = require("./database/connection");
//env config
dotenv.config();
//router import
const blogRoutes = require("./routes/blogRoutes");

//mongodb connection
const URL = process.env.DB_URL;
Connection(URL);

//rest objecct
const app = express();

//middelwares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/blog", blogRoutes);

// Port
const PORT = process.env.PORT || 8000;
//listen
app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});
