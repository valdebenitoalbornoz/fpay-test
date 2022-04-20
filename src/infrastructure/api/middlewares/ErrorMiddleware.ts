import { NextFunction, Request, Response } from 'express';
import HttpException from './HttpErrorResponse';
 
function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
  const status = error.status || 500;
  const message = error.message || 'Ha ocurrido un error';
  response
    .status(status)
    .send({
      message
    });
}
 
export default errorMiddleware;