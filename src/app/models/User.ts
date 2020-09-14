export interface IUser
{
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    mobileNumber: string;
    password: string;
    country: string;
    city: string;
    language: string;
    workplace: string;
    isUsingIAHA: boolean;
    rangeOfInjectionsPerMonth: string;
    whichJoints: string[];
    createdAt: Date;
    updatedAt: Date;
}


export class User
{
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    mobileNumber: string;
    password: string;
    country: string;
    city: string;
    language: string;
    workplace: string;
    isUsingIAHA: boolean;
    rangeOfInjectionsPerMonth: string;
    whichJoints: string[];
    createdAt: Date;
    updatedAt: Date;
}