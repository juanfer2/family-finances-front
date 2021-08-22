export interface Expense {
  id?: number
  name: string
  projectId: number
  description: string
  priceTotal: number
  totalPaid: number
  totalDept: number
  datePay: string
  status: string
  numberQuota: number
}

export interface ExpenseReducerState {
  expense: Expense | null
  loadingExpense: boolean
  errorExpense: any
}

export interface ExpensesReducerState {
  expenses: Expense[]
  loadingExpenses: boolean
  errorExpenses: any
}

export interface ExpensesState {
  expenses: Expense[]
  loadingExpenses: boolean
  errorExpenses: any | null
}
