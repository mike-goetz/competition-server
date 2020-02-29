import {AbstractPersistable} from './abstract-persistable';

export interface Person extends AbstractPersistable {
    firstName: string;
    lastName: string;
    dateOfBirth?: Date;
    email?: string;
    phone?: string;
}
