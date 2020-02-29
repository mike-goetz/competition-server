export interface AbstractPersistable {
    id: string;
    active: boolean;
    deleted: boolean;
    createdDate: Date;
    modifiedDate: Date;
}
