import express from "express";
import vehicleRoutes from "./routes/vehicle.routes.js";

const app = express();

app.use(express.json());

// Rotas
app.use("/vehicles", vehicleRoutes);

// Teste simples
app.get("/", (req, res) => {
    res.json({ message: "Fleet Tracker API Running" });
});

export default app;
