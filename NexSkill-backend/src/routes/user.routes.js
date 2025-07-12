// User Routes
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const pool = require("../config/db");

router.get("/profile", userController.getProfile);

router.get("/all", async (req, res) => {
  try {
    const [users] = await pool.query("SELECT * FROM users");
    res.json(users);
    console.log(users);
  } catch (err) {
    console.error('DB ERROR:', err); // <-- log error to console
    res.status(500).json({ error: "Database error", details: err });
  }
});

router.get("/all/html", async (req, res) => {
  try {
    const [users] = await pool.query("SELECT * FROM users");

    let html = `
      <html>
      <head>
        <title>All Users</title>
        <style>
          table { border-collapse: collapse; width: 80%; margin: 20px auto; }
          th, td { border: 1px solid #ccc; padding: 8px; }
          th { background: #eee; }
        </style>
      </head>
      <body>
        <h2 style="text-align:center;">All Users</h2>
        <table>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Location</th><th>Profile Photo</th><th>Availability</th><th>Profile Type</th><th>Average Rating</th><th>Created At</th>
          </tr>
          ${users
            .map(
              (u) => `
            <tr>
              <td>${u.id}</td>
              <td>${u.name}</td>
              <td>${u.email}</td>
              <td>${u.location || ""}</td>
              <td>${
                u.profile_photo
                  ? `<img src="${u.profile_photo}" width="40"/>`
                  : ""
              }</td>
              <td>${u.availability}</td>
              <td>${u.profile_type}</td>
              <td>${u.average_rating}</td>
              <td>${new Date(u.created_at).toLocaleString()}</td>
            </tr>
          `
            )
            .join("")}
        </table>
      </body>
      </html>
    `;
    res.send(html);
  } catch (err) {
    console.error('DB ERROR:', err); // <-- log error to console
    res.status(500).send("Database error");
  }
});

// Add a new user to the database
router.post("/add", async (req, res) => {
  const {
    name,
    email,
    password, // should be hashed in production
    location = null,
    profile_photo = null,
    availability = "weekends",
    profile_type = "public",
    average_rating = 0.0
  } = req.body;

  try {
    const [result] = await pool.query(
      `INSERT INTO users (name, email, password, location, profile_photo, availability, profile_type, average_rating) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, email, password, location, profile_photo, availability, profile_type, average_rating]
    );
    res.json({
      message: "User inserted successfully!",
      userId: result.insertId
    });
  } catch (err) {
    console.error('DB ERROR:', err);
    res.status(500).json({ error: "Database error", details: err });
  }
});

module.exports = router;
