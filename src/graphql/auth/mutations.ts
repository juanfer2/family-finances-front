import { gql } from '@apollo/client'

export const REGISTER_USER = gql`
  mutation registerUser(
    $email: String
    $firstName: String
    $lastName: String
    $password: String
    $passwordConfirmation: String
  ) {
    registerUser(
      input: {
        userAttributes: {
          email: $email
          firstName: $firstName
          lastName: $lastName
          password: $password
          passwordConfirmation: $passwordConfirmation
        }
      }
    ) {
      success
    }
  }
`
