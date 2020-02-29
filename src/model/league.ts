import {AbstractSortedPersistable} from './abstract-sorted-persistable';

export interface League extends AbstractSortedPersistable {
    name: string;
    shortName: string;
    description: string;
    startFee: number;
    skierAllowed: boolean;
    codriverRequired: boolean;
}
