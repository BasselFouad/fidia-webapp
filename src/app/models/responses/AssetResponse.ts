import { IAsset } from '../Asset';


export interface IAssetResponse
{
    success: boolean;
    message: string;
    asset: IAsset;
}