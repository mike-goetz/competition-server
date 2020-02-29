import {AbstractPersistable} from './abstract-persistable';

export interface AbstractSortedPersistable extends AbstractPersistable {
    sort: number;
}
