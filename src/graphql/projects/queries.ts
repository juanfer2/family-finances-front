import { gql } from '@apollo/client'

export const GET_PROJECTS = gql`
  query projects {
    projects {
      id
      description
      title
    }
  }
`

export const GET_PROJECT = gql`
  query project($id: Int!) {
    project(id: $id) {
      id
      description
      title
      expenses {
        id
        name
        description
        priceTotal
        status
      }
    }
  }
`
