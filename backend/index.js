const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON

require("./db/dbConnect"); // Ensure this file connects to your database

const router = require("./routes/allRoutes");
app.use("/api", router); // Mount the router on a specific path

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
