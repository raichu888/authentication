# Authentication System

A simple authentication system using **Node.js**, **Express**, **JWT**, and **Vanilla JavaScript (Frontend)**. This project supports user **signup**, **signin**, **protected routes**, and **token-based authentication**.

---

##  Tech Stack

- **Backend**: Node.js, Express, JSON Web Token (JWT)
- **Frontend**: HTML, JavaScript (Vanilla)
- **HTTP Client**: Axios

---

##  Features

- User Signup & Signin
-  JWT-based authentication
-  Protected Route: `/me` returns user info if logged in
-  Logout functionality
-  Token stored in `localStorage`
-  Simple in-memory user storage (for learning)

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/tusharui/authentication.git
cd authentication
```

 ## Install backend dependencies
 npm install

 ##Run the server
node index.js

# Note
This project uses in-memory storage (no database).
All users are lost when the server restarts.


