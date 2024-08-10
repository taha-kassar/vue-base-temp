import { useQuery, type QueryKey, type UseQueryOptions } from '@tanstack/vue-query';

import { fetcher } from '../fetcher';

export const useGet = <T>(
  url: string,
  params: object = {},
  config?: Omit<UseQueryOptions<T, Error, T, QueryKey>, 'queryKey'>,
  //   baseURL = 'api',
) => {
  const fullURL = `https://fakestoreapi.com/${url}`;

  const _params = {
    ...params,
    pageSize: 10,
    pageNumber: 1,
  };

  const context = useQuery<T, Error, T, QueryKey>({
    queryKey: [fullURL, _params, url],
    queryFn: fetcher,
    meta: { accessToken: 'user.access_token' },
    ...config,
  });

  return {
    data: context.data || ({} as any),
    isLoading: context.isLoading || context.isFetching || context.isRefetching,
    error: context.error,
    refetch: context.refetch,
  };
};
