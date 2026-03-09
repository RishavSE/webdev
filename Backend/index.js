import express from "express";
import cors from "cors";
import morgan from "morgan";
import fs from "fs";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const FILE = "./users.json";

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const users = JSON.parse(fs.readFileSync(FILE));

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Login successful",
  });
});

app.post("/signup", (req, res) => {
  const { email, phone, password } = req.body;

  const users = JSON.parse(fs.readFileSync(FILE));

  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const newUser = {
    email,
    phone,
    password,
  };

  users.push(newUser);

  fs.writeFileSync(FILE, JSON.stringify(users, null, 2));

  return res.status(201).json({
    message: "Signup successful",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
