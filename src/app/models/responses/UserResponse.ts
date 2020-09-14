import { IUser } from '../User';

export interface IUserResponse
{
    success: boolean;
    message: string;
    user: IUser;
}