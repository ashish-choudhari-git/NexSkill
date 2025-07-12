# Skill Swap Platform Backend

## Overview
This is the backend for the Skill Swap Platform. It provides REST APIs for user management, skills, swap requests, and feedback, and connects to a TiDB/MySQL database.

## Project Structure

```
NexSkill-backend/
│
├── src/
│   ├── config/           # Database connection
│   ├── controllers/      # Business logic for each resource
│   ├── middlewares/      # Auth, error handling, etc.
│   ├── models/           # DB models (SQL/ORM)
│   ├── routes/           # API endpoints
│   ├── utils/            # Helper functions
│   ├── app.js            # Express app setup
│   └── server.js         # Server entry point
│
├── .env                  # Environment variables
├── package.json
└── README.md
``` 