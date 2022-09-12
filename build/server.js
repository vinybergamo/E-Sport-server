import dotenv from "dotenv";
import express from "express";
dotenv.config();
const app = express();
app.get("/ads", (req, res) => {
    return res.json({ msg: "Success" });
});
app.listen(process.env.PORT, () => {
    console.log("Servidor ativo");
});
