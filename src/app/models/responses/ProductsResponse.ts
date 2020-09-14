import { IProduct } from '../Product';

export interface IProductsResponse
{
    success: boolean;
    message: string;
    products: IProduct[];
}