import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

app.get("/ads", (req, res) => {
  return res.json({ msg: "1" });
}); 

app.get("/games", (req, res) => {
  return res.json({ msg: "2" });
});

app.post("/games", (req, res) => {
  return res.json({ msg: "2" });
});

app.listen(process.env.PORT, () => {
  console.log("Servidor ativo");
});
