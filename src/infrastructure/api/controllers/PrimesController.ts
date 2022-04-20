import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { PrimesGetter } from "../../../application/usecases/PrimesGetter";
import HttpErrorResponse from "../middlewares/HttpErrorResponse";
import { Controller } from "./Controller";

export class PrimesController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const firstError = errors.array()[0];
                throw new Error(firstError.msg);
            }
            const limit = Number(req.params.limit);
            const getter = new PrimesGetter();
            const primes = getter.getPrimes(limit);
            res.status(200).send(primes);
        } catch (error) {
            next(new HttpErrorResponse(400, (error as Error).message))
        }
    }

}