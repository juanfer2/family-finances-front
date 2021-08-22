import { gql } from '@apollo/client'

export const CREATE_EXPENSE = gql`
  mutation createExpense(
    $name: String!
    $projectId: Int!
    $description: String
    $priceTotal: Float
    $totalPaid: Float
    $totalDept: Float
    $datePay: String
    $numberQuota: Int
  ) {
    createExpense(
      input: {
        expenseAttributes: {
          name: $name
          projectId: $projectId
          description: $description
          priceTotal: $priceTotal
          totalPaid: $totalPaid
          totalDept: $totalDept
          datePay: $datePay
          numberQuota: $numberQuota
        }
      }
    ) {
      success
    }
  }
`
