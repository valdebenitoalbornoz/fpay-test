import express from 'express';
import errorMiddleware from './infrastructure/api/middlewares/ErrorMiddleware';
import routes from './infrastructure/api/routes';

export class Api {
    app: express.Application; 
    port = process.env.PORT || 3000;
    constructor() {
        this.app = express();
        this.setRoutes();
        this.app.use(errorMiddleware);
    }

    async start() {
        this.app.listen(this.port, () => {
            console.log('Server running on port: ' + this.port);
        })
    }

    private setRoutes() {
        routes(this.app);
    }



}