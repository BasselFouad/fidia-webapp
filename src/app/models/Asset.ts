export interface IAsset
{
    _id: string;
    title: string;
    description: string;
    path: string;
    productId: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    bodyPart: string;
    publicationYear: string;
    authorName: string;
    thumbnailPath: string;
}

export class Asset implements IAsset
{
    _id: string;
    title: string;
    description: string;
    path: string;
    productId: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    bodyPart: string;
    publicationYear: string;
    authorName: string;
    thumbnailPath: string;
}