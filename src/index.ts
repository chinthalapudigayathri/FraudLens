import express from "express";
import { connectDB } from "./config/db";
import { connectKafka } from "./config/kafka";
//import routes
import routes from "./routes";

const app = express();
app.use(express.json());


// Register all routes
app.use("/api", routes);

// Initialize external services
connectDB();
connectKafka();



// Health check route
app.get("/health", (req, res) => res.json({ status: "ok" }));

app.listen(5000, () => console.log(" Server running on port 5000"));

