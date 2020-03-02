import {NextFunction, Request, Response} from 'express';
import {ParamsDictionary} from 'express-serve-static-core';
import {v4 as uuid} from 'uuid';
import {Division} from '../../model/division';
import {CrudController} from '../crud-controller';

export class DivisionController extends CrudController {

    data: Division[] = [];

    public create(req: Request<ParamsDictionary>, res: Response, next: NextFunction): void {
        const date = new Date();
        this.data = [...this.data];
        let division = {
            ...req.body,
            id: uuid(),
            active: true,
            deleted: false,
            createdDate: date,
            modifiedDate: date
        };
        this.data.push(division);
        console.log('division created', division);
        res.status(201).send(division);
    }

    public read(req: Request<ParamsDictionary>, res: Response, next: NextFunction): void {
        if (this.data.length === 0) {
            console.log('divisions fetched, but nothing is persisted');
            res.sendStatus(204);
        } else {
            console.log('divisions fetched');
            res.send(...this.data);
        }
    }

    public update(req: Request<ParamsDictionary>, res: Response, next: NextFunction): void {
        const body = req.body;
        const index = this.data.findIndex(d => d.id === body.id);
        if (index !== -1) {
            const division = this.data.find(d => d.id === body.id);
            let updatedDivision = {
                ...req.body,
                createdDate: division.createdDate,
                modifiedDate: new Date()
            };
            this.data[index] = updatedDivision;
            console.log('division updated', division, updatedDivision);
            res.status(200).send(updatedDivision);
        } else {
            console.error('failed to update division', body);
            res.sendStatus(404);
        }
    }

    public delete(req: Request<ParamsDictionary>, res: Response, next: NextFunction): void {
        const body = req.body;
        const index = this.data.findIndex(d => d.id === body.id);
        if (index !== -1) {
            this.data = [...this.data];
            this.data.splice(index, 1);
            console.log('division deleted', index, body);
            res.sendStatus(200);
        } else {
            console.error('failed to delete division', body);
            res.sendStatus(404);
        }
    }
}
