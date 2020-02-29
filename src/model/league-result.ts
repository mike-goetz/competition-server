import {AbstractPersistable} from './abstract-persistable';
import {Participants} from './participants';

export interface LeagueResult extends AbstractPersistable {
    rank: number | string;
    participants: Participants;
    time: number;
    score: number;
}
