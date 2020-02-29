import {NextFunction, Request, Response} from 'express';

declare module 'express' {
    export interface Request {
        user: any
    }
}
const OktaJwtVerifier = require('@okta/jwt-verifier');
const {CLIENT_ID, ISSUER} = process.env;

const oktaJwtVerifier = new OktaJwtVerifier({
    clientId: `${CLIENT_ID}`,
    issuer: `${ISSUER}`
});

export async function oktaAuth(req: Request, res: Response, next: NextFunction) {
    try {
        const token = (req as any).token;
        if (!token) {
            return res.status(401).send('Not Authorised');
        }
        const jwt = await oktaJwtVerifier.verifyAccessToken(token);
        req.user = {
            uid: jwt.claims.uid,
            email: jwt.claims.sub
        };
        next();
    } catch (err) {
        return res.status(401).send(err.message);
    }
}
