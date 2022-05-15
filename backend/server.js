//Imports----------------------------------
require("dotenv").config();
const express = require("express");
const http = require("http");
const stringRoutes = require("./routes/stringRoutes");
const path = require("path");
//Imports----------------------------------

//Env Variables
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

//App--------------------------------------
const app = express();
app.use(express.json());

//Deployment--------------------------------

const _dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname1, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname1, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api is running successfully");
  });
}

//Deployment--------------------------------

//---Server--------------------------------
const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//---Server--------------------------------

//App--------------------------------------

//Routes-----------------------------------
app.use("/api/string", stringRoutes);
//Routes-----------------------------------
