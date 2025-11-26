import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Shifa Farm Server berjalan normal 👍");
});

// PORT otomatis dari Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server berjalan di port " + PORT);
});
