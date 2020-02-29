import {AbstractPersistable} from './abstract-persistable';
import {League} from './league';
import {Person} from './person';
import {Registration} from './registration';

export interface LeagueRegistration extends AbstractPersistable {
    registration: Registration;
    league: League;
    persons: Person[];
}
