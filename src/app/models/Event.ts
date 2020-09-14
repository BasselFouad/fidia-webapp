import { IQuestion } from './Question';

export interface IEvent
{
    _id: string;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    imagePath: string;
    videoPath: string;
    schedulePath: string;
    questions: IQuestion[];
    location: string;
    createdAt: Date;
    updatedAt: Date;
}

export class Event implements IEvent
{
    _id: string;
    title: string;
    location: string;
    description: string;
    startDate: Date;
    endDate: Date;
    questions: IQuestion[];
    imagePath: string;
    videoPath: string;
    schedulePath: string;
    createdAt: Date;
    updatedAt: Date;
}