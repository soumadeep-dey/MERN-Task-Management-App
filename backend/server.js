const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
// DB
require("./config/db");
// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
const taskRoutes = require("./routes/TaskRoutes");
app.use("/tasks", taskRoutes);

// Listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🛜  Server running on port: ${PORT}`);
});
