"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const bodyParser = require("body-parser");
const app = (0, express_1.default)();
const port = 3000;
const apiVersion = "1";
const apiRoutes = `/api/v${apiVersion}`;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
}));
// parse application/json
app.use(bodyParser.json({
    extended: true,
    limit: "50mb",
}));
// app.get("/", (req: Request, res: Response) => {
//   res.send("Comic Backend!.");
// });
app.use(apiRoutes, routes_1.UserRoutes);
app.use(apiRoutes, routes_1.GenreRoutes);
app.use(apiRoutes, routes_1.ComicRoutes);
app.use(apiRoutes, routes_1.FavoriteRoutes);
app.use(apiRoutes, routes_1.CountRoutes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
