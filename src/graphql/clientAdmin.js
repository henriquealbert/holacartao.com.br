import Cookie from 'js-cookie';
import { GraphQLClient } from 'graphql-request';

const API_URL = process.env.NEXT_PUBLIC_API_URL_GRAPHQL;

const adminToken = Cookie.get('adminToken');

const clientAdmin = new GraphQLClient(API_URL, {
  headers: {
    Authorization: adminToken ? `Bearer ${adminToken}` : ''
  }
});

export default clientAdmin;
