import { Application } from "express";
import { PrimesRouter } from "./PrimesRouter";
import { Router } from "./Router";

export default (app: Application) => {
    const routes: Router[] = [
        new PrimesRouter(app)
    ]
    routes.forEach(route => route.initRoutes());
}