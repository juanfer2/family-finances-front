import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from '@apollo/client'

import { env } from '../../contants/api.constant'

// https://family-finances-backend.herokuapp.com/api/v1/graphql

const httpLink = new HttpLink({
  uri: 'https://family-finances-backend.herokuapp.com/api/v1/graphql',
})

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: localStorage.getItem('token') || null,
    },
  }))

  return forward(operation)
})
console.log(env.apiUrlGraphql)

const Client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
})

export default Client
