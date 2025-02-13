const express = require("express");
const cors = require("cors");
const cafeteriaRoutes = require("./routes/cafeteriaRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api", cafeteriaRoutes);

app.get("/", (req, res) => {
    res.send("EU AMO ACHOCOLATADO!");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});