import {Division} from './division';
import {Event} from './event';
import {League} from './league';
import {LeagueResult} from './league-result';
import {Season} from './season';

export interface SeasonResult {
    division: Division;
    season: Season;
    leagueResults: Map<League, Map<Event, LeagueResult[]>>;
}
