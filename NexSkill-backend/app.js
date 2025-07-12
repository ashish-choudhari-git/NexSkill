const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();

const authRoutes = require("./src/routes/auth.routes");
const userRoutes = require("./src/routes/user.routes");
const skillRoutes = require("./src/routes/skill.routes");
const swapRoutes = require("./src/routes/swap.routes");
const feedbackRoutes = require("./src/routes/feedback.routes");
const errorMiddleware = require("./src/middlewares/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.send("Skill Swap Platform API running"));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/swaps", swapRoutes);
app.use("/api/feedback", feedbackRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
