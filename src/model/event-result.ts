import {Division} from './division';
import {League} from './league';
import {LeagueResult} from './league-result';
import {Season} from './season';

export interface EventResult {
    division: Division;
    season: Season;
    leagueResults: Map<League, LeagueResult[]>;
}
