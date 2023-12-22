import db from '$db/mongo';

export interface Conference {
    _id?: string;
    date: Date;
    name: string;
    theme: string;
    location: string;
    paid: boolean;
    link: string;
    submittedBy: string;
}

export const conferences = db.collection<Conference>('conferences');