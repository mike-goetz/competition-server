import {AbstractPersistable} from './abstract-persistable';
import {Division} from './division';
import {League} from './league';
import {Person} from './person';
import {Season} from './season';

export interface Event extends AbstractPersistable {
    division: Division;
    season: Season;
    leagues: League[];

    date: Date;
    name: string;
    contact: Person;

    website?: string;
    location?: string;
    registrationStart?: Date;
    registrationEnd?: Date;

}
