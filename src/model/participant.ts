import {AbstractPersistable} from './abstract-persistable';
import {Person} from './person';

export interface Participant extends AbstractPersistable {
    person: Person;
    startNumber: string;
}
