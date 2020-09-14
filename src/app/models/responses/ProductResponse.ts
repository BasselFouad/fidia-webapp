import { IProduct } from '../Product';

export interface IProductResponse
{
    success: boolean;
    message: string;
    product: IProduct;
}