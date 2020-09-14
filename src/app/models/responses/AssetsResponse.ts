import { IAsset } from '../Asset';


export interface IAssetsResponse
{
    success: boolean;
    message: string;
    assets: IAsset[];
}