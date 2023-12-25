import db from '$db/mongo';

export interface Conference {
    // TODO: this should probably be a mongo objectid
    _id?: string;
    date: Date;
    name: string;
    theme: string;
    location: string;
    paid: boolean;
    link: string;
    submittedBy: string;
    deletedAt?: Date;
    archivedAt?: Date;
}

export const conferences = db.collection<Conference>('conferences');