import {NextFunction, Request, Response} from 'express';
import {ParamsDictionary} from 'express-serve-static-core';
import testData from '../../testData.json';
import {CrudController} from '../crud-controller';

export class DivisionController extends CrudController {
    public create(req: Request<ParamsDictionary>, res: Response, next: NextFunction): void {
        throw new Error('Method not implemented.');
    }

    public read(req: Request<ParamsDictionary>, res: Response, next: NextFunction): void {
        res.send(testData);
    }

    public update(req: Request<ParamsDictionary>, res: Response, next: NextFunction): void {
        throw new Error('Method not implemented.');
    }

    public delete(req: Request<ParamsDictionary>, res: Response, next: NextFunction): void {
        throw new Error('Method not implemented.');
    }
}
