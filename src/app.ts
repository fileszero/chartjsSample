import * as express from "express";
import * as path from "path";

// routing modules
import * as index from "./routes/index";

const app = express();

const isDev = app.get("env") === "development";

app.set("views", path.resolve(__dirname, "../views"));
app.set("view engine", "ejs");

// static files
app.use(express.static(path.resolve(__dirname, "../public")));

// routing
app.use("/", index.router);

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});