import { IEvent } from '../Event';

export interface IEventResponse
{
    success: boolean;
    message: string;
    event: IEvent;
}