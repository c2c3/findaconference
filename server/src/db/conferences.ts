import db from '$db/mongo';
import { ObjectId, type WithId } from 'mongodb';

export interface Conference {
    id?: string;
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

export function getSubmittedConference(mongoId: string, submittedBy: string): Promise<Conference | null> {
    return conferences.findOne({_id: new ObjectId(mongoId), submittedBy: submittedBy}).then(mongoDocToConference);
}

export function replaceConference(mongoId: string, submittedBy: string, conference: Conference) {
    delete conference.id;
    return conferences.replaceOne({_id: new ObjectId(mongoId), submittedBy: submittedBy}, conference);
}

export async function getSubmittedConferences(submittedBy: string) {
    const cursor = conferences.find({
        submittedBy: submittedBy,
        // Only get the ones that havent been deleted
        deletedAt: undefined
    });

    const items: Conference[] = [];
	for await (const doc of cursor) {
		items.push(mongoDocToConference(doc)!);
	}

    return items;
}

export async function getActiveConferences() {
    const cursor = conferences.find({
        deletedAt: {$eq: undefined},
        archivedAt: {$eq: undefined},
    });
	const items: Conference[] = [];
	for await (const doc of cursor) {
		items.push(mongoDocToConference(doc)!);
	}

    return items;
}

export async function addConference(conference: Conference): Promise<string> {
    const result = await conferences.insertOne(conference);
    return result.insertedId.toString();
} 

export function getById(id: string): Promise<Conference | null> {
    return conferences.findOne({_id: new ObjectId(id)}).then(mongoDocToConference);
}

function mongoDocToConference(doc: WithId<Conference> | null): Conference | null {
    if (doc == null) {
        return null;
    }
    return {
        name: doc.name,
        id: doc._id.toString(),
        date: doc.date,
        theme: doc.theme,
        paid: doc.paid,
        location: doc.location,
        link: doc.link,
        submittedBy: doc.submittedBy,
        deletedAt: doc.deletedAt,
        archivedAt: doc.archivedAt
    };
}