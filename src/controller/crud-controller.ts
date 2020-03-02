import {NextFunction, Request, Response} from 'express';
import {ParamsDictionary} from 'express-serve-static-core';

export abstract class CrudController {
    public abstract create(req: Request<ParamsDictionary>, res: Response, next: NextFunction): void;

    public abstract read(req: Request<ParamsDictionary>, res: Response, next: NextFunction): void;

    public abstract update(req: Request<ParamsDictionary>, res: Response, next: NextFunction): void;

    public abstract delete(req: Request<ParamsDictionary>, res: Response, next: NextFunction): void;
}
