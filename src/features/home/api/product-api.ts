import { AxiosResponse } from "axios";
import { ApiProduct } from "../../../base/api/api-config";
import { BaseResponse } from "../../../base/api/base-response";
import axiosClient from "../../../base/api/axios-client";
import { ResponeProduct } from '../model/respone-product';

export const getProducts = async (key_search: string, limit: number, page: number): Promise<BaseResponse<ResponeProduct>> => {
    try {
        const url = ApiProduct.API_GET_PRODUCTS;
        const response: AxiosResponse<BaseResponse<ResponeProduct>> = await axiosClient.get(url, {
            params: {
                key_search: key_search,
                limit: limit,
                page: page
            }
        });
        return response.data;

    } catch (error) {
        console.error(error)
        throw error;
    }
};
