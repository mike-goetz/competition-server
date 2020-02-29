import {NextFunction, Request, Response, Router} from 'express';
import {leagueController} from '../../controller';

export const router: Router = Router();

router.post('/', async function (req: Request, res: Response, next: NextFunction) {
    leagueController.create(req, res, next);
});

router.get('/', async function (req: Request, res: Response, next: NextFunction) {
    leagueController.read(req, res, next);
});

router.patch('/', async function (req: Request, res: Response, next: NextFunction) {
    leagueController.update(req, res, next);
});

router.delete('/', async function (req: Request, res: Response, next: NextFunction) {
    leagueController.delete(req, res, next);
});
