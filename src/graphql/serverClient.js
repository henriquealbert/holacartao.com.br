import { GraphQLClient } from 'graphql-request';

const API_URL = process.env.NEXT_PUBLIC_API_URL_GRAPHQL;

export default function serverClient(token) {
  const client = new GraphQLClient(API_URL, {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  });
  return client;
}
