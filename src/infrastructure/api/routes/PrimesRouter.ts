import { Application } from "express";
import { Router } from "./Router";
import { PrimesController } from "../controllers/PrimesController";
import { param } from "express-validator";


export class PrimesRouter implements Router {
    controller = new PrimesController();
    constructor(private app: Application) {
    }

    initRoutes(): void {
        this.app.get('/primes/:limit',
            param('limit')
                .isNumeric({ no_symbols: true })
                .withMessage('El parámetro debe ser un número entero'),
            this.controller.run
        )    
    }

}