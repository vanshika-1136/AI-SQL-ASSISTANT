const express = require("express");
const cors = require("cors");
require("dotenv").config();

require("./db");

const sqlRoutes = require("./routes/sqlRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/sql", sqlRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "AI SQL Query Assistant Backend Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});