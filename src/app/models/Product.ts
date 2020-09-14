export interface IProduct
{
    _id: string;
    name: string;
    description: string;
    videoPath: string;
    documentPath: string;
    imagePath: string;
    websiteLink: string;
    createdAt: Date;
    updatedAt: Date;
}


export class Product implements IProduct
{
    _id: string;
    name: string;
    description: string;
    videoPath: string;
    documentPath: string;
    imagePath: string;
    websiteLink: string;
    createdAt: Date;
    updatedAt: Date;
}