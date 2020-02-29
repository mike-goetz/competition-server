import {AbstractPersistable} from './abstract-persistable';
import {League} from './league';

export interface Season extends AbstractPersistable {
    name: string;
    leagues: League[];
}
