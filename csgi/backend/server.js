require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Database Connection
connectDB();

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(cors());

// Routes
app.use("/api/auth", require("./routes/AuthRoutes"));
app.use("/api/gallery", require("./routes/galleryRoutes"));

// Error Handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));