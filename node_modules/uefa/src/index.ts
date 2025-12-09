import express, { Request, Response } from "express";
import UefaTeams from "./services/uefa-team-svc";
import TeamsRouter from "./routes/uefa-teams";

// in src/index.ts
// add this import near the top
import { connect } from "./services/mongo";

connect("uefa"); // use your own db name here
import path from "path";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = path.join(process.cwd(), "../proto/dist");
console.log("Serving static from:", staticDir);

app.use(express.static(staticDir));

app.use(express.json());

app.use("/api/uefa-teams", TeamsRouter);



app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(staticDir, "index.html"));
});

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello, World");
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/uefa-teams/:name", (req: Request, res: Response) => {
  const { name } = req.params;

  UefaTeams.get(name).then((team) => {
    if (team) {
      res
        .set("Content-Type", "application/json")
        .send(JSON.stringify(team));
    } else {
      res.status(404).send();
    }
  });
});

app.get("/uefa-teams", (_req: Request, res: Response) => {
  UefaTeams.index().then((teams) => {
    res
      .set("Content-Type", "application/json")
      .send(JSON.stringify(teams));
  });
});

