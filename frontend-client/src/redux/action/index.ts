import { actionType } from './action-type/index';


interface GetAllProducts{
    type:actionType.GET_ALL_PRODUCTS;
    payload:string[];
}

interface GetIdProducts{
    type:actionType.GET_ID_PRODUCT;
    payload:string[];
}

export type Action= |GetAllProducts|GetIdProducts