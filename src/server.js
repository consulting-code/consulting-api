const express = require("express");
const cors = require("cors");

const connectDB = require("../config/db");

// Connect to database
(() => connectDB())();

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

app.use("/api/v1/greeting", (req, res) =>
  res.status(200).json({
    success: true,
  })
);

const PORT = process.env.PORT | 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
