import useSWR from 'swr';
import Cookie from 'js-cookie';
import { GraphQLClient } from 'graphql-request';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL_GRAPHQL || 'http://localhost:1337/graphql';

export function useFetchAdmin(query, variables, options) {
  const adminToken = Cookie.get('adminToken');

  const client = new GraphQLClient(API_URL, {
    headers: {
      Authorization: adminToken ? `Bearer ${adminToken}` : ''
    }
  });

  const shouldFetch = adminToken !== undefined ? true : false;

  const { data, error, mutate } = useSWR(
    shouldFetch ? query : null,
    async (query) => {
      const response = await client.request(query, variables);

      return response;
    },
    options
  );

  return { data, error, mutate };
}
