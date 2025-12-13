import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import path from "path";

import TeamsRouter from "./routes/uefa-teams";
import auth, { authenticateUser } from "./routes/auth";
import userRoutes from "./routes/users"; 
import { connect } from "./services/mongo";

connect("uefa");

const app = express();
const port = process.env.PORT || 3000;
const staticDir = path.resolve(__dirname, process.env.STATIC || "../../app/dist");
console.log("Serving static assets from:", staticDir);

app.use(express.json());

app.use("/auth", auth);
app.use("/api/teams", authenticateUser, TeamsRouter);
app.use("/api/users", userRoutes);  

app.use(express.static(staticDir));

app.use((req: Request, res: Response) => {
  console.log(`[SPA Fallback] Serving index.html for request: ${req.url}`);
  
  const indexHtml = path.join(staticDir, "index.html");
  
  res.sendFile(indexHtml, (err) => {
    if (err) {
      console.error("Failed to send index.html for SPA fallback:", err);
      console.error(`Path attempted: ${indexHtml}`); 
      res.status(500).send("Error loading application.");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});