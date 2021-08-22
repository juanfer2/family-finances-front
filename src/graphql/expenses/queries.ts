import { gql } from '@apollo/client'

export const GET_PROJECTS = gql`
  query expensesByProject($id){
    expensesByProject($id: Int!) {
      id
      name
      description
    }
  }
`
