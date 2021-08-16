import { gql } from '@apollo/client'

export const CREATE_PROJECT = gql`
  mutation createProject($title: String, $description: String) {
    createProject(
      input: { projectAttributes: { title: $title, description: $description } }
    ) {
      success
    }
  }
`
