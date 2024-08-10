import type { QueryFunctionContext } from '@tanstack/vue-query';

import { axiosInstance, commonHeaders } from './axios';

export interface Meta {
  accessToken: string;
}

export const fetcher = async <T>({
  queryKey,
  meta,
}: Omit<QueryFunctionContext, 'signal'>): Promise<T> => {
  const [fullUrl, params] = queryKey;
  const { accessToken } = meta as unknown as Meta;

  return axiosInstance
    .get<T>(`${fullUrl}`, {
      params: { ...(params as object) },
      headers: { ...commonHeaders, Authorization: `Bearer ${accessToken}` },
    })
    .then((res) => res.data);
};
