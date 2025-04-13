const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Welcome Route
app.get("/welcome", (req, res) => {
    res.json({ message: "Welcome to Express!" });
});

// In-Memory User Database
let users = [
    { id: 1, name: "Ram", email: "ram@example.com" },
    { id: 2, name: "Sham", email: "sham@example.com" }
];

// CRUD Routes
app.get("/users", (req, res) => res.json(users));

app.post("/users", (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.json(newUser);
});

app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const index = users.findIndex((u) => u.id == id);
    if (index === -1) return res.status(404).json({ message: "User not found" });
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
});

app.delete("/users/:id", (req, res) => {
    users = users.filter((u) => u.id != req.params.id);
    res.json({ message: "User deleted" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
