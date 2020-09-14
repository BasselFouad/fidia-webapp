import { IEvent } from '../Event';

export interface IEventsResponse
{
    success: boolean;
    message: string;
    events: IEvent[];
}