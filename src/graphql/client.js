import Cookie from 'js-cookie';
import { GraphQLClient } from 'graphql-request';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL_GRAPHQL || 'http://localhost:1337/graphql';

const token = Cookie.get('token');

const client = new GraphQLClient(API_URL, {
  headers: {
    Authorization: token ? `Bearer ${token}` : ''
  }
});

export default client;
