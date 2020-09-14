import { IUser } from '../User';

export interface IUsersResponse
{
    success: boolean;
    message: string;
    users: IUser[];
}