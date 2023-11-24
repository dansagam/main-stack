import { AxiosRequestConfig } from 'axios';
import Api from '@/apis/Api';

export type ApiObjType = Record<string, string | undefined | number | string[] | number[]>;
interface FuncProp<T> {
  url: string;
  payload: T;
  config?: AxiosRequestConfig;
}
interface GetFuncProp<T extends ApiObjType> {
  url: string;
  params: T | undefined;
}

export const postRequest = async <T, R>({ url, payload }: FuncProp<T>) => {
  const response = await Api.post<R>(url, payload);

  const { data: availData } = response;

  return availData;
};

export const putRequest = async <T, R>({ url, payload }: FuncProp<T>) => {
  const response = await Api.put<R>(url, payload);

  const { data: availData } = response;

  return availData;
};

export const patchRequest = async <T, R>({ url, payload }: FuncProp<T>) => {
  const response = await Api.patch<R>(url, payload);

  const { data: availData } = response;

  return availData;
};

export const deleteRequest = async <R>({ url }: { url: string }) => {
  const { data } = await Api.delete<R>(url);

  return data;
};

export const deleteRequestTest = async ({ url }: { url: string }) => {
  const { data } = await Api.delete(url);

  return data;
};

export const getRequestParams = async <T extends ApiObjType, R>({
  url,
  params,
}: GetFuncProp<T>) => {
  const response = await Api.get<R>(url, { params });

  const { data: availData } = response;

  return availData;
};

export const getRequest = async <R>({ url }: { url: string }) => {
  const response = await Api.get<R>(url);

  const { data: availData } = response;

  return availData;
};
