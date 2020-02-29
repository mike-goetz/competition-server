import {AbstractPersistable} from './abstract-persistable';
import {Division} from './division';
import {LeagueRegistration} from './league-registration';
import {Season} from './season';

export interface Registration extends AbstractPersistable {
    division: Division;
    season: Season;
    leagueRegistrations: LeagueRegistration[];
}
