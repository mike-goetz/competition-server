import {AbstractPersistable} from './abstract-persistable';
import {Season} from './season';

export interface Division extends AbstractPersistable {
    name: string;
    abbreviation: string;
    seasons: Season[];
}
