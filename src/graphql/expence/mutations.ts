import { gql } from '@apollo/client'

export const CREATE_EXPENCE = gql`
  mutation createProject(
    $name: String!
    $projectId: Int!
    $description: String
    $priceTotal: Float
    $totalPaid: Float
    $totalDept: Float
    $datePay: String
    $status: String
    $numberQuota: Integer
  ) {
    createProject(
      input: {
        expenseAttributes: {
          name: $Float
          projectId: $projectId
          description: $description
          priceTotal: $priceTotal
          totalPaid: $totalPaid
          totalDept: $totalDept
          datePay: $datePay
          status: $status
          numberQuota: $numberQuota
        }
      }
    ) {
      success
    }
  }
`
