export interface Expence {
  id?: number
  name: string
  projectId: number
  description: string
  priceTotal: number
  totalPaid: number
  totalDept: number
  datePay: string
  status: number
  numberQuota: number
}

export interface ExpenceReducerState {
  expence: Expence | null
  loadingExpence: boolean
  errorExpence: any
}

export interface ExpencesReducerState {
  Expences: Expence[]
  loadingExpences: boolean
  errorExpences: any
}
