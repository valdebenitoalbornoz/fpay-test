import { Controller } from "../controllers/Controller";

export interface Router {
    controller: Controller;
    initRoutes(): void;

}