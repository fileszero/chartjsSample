import * as express from "express";

export const router = express.Router();
/**
 * GET home page.
 */
router.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.render("c3chart", { title: "sample of router" });
});
