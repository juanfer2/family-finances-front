import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory, useLocation } from 'react-router-dom'

import { getProject } from '../../../../flux/actions/projects/getProject.action'
import { Expense } from '../../../../interfaces/entities/expense'

export const useDetailProject = () => {
  const [total, setTotal] = useState<number>(0)
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const state: any = useSelector((state: any) => state)
  const { getProjectReducer } = state
  const { id }: any = useParams()

  useEffect(() => {
    const startGetProject = (id: number) => dispatch(getProject(id))
    startGetProject(parseInt(id))
    //return ()=>{}
  }, [])

  useEffect(() => {
    if (getProjectReducer?.project?.expenses) {
      const totalPrice = getProjectReducer.project.expenses.reduce(
        (accumulator: number, expense: Expense) =>
          accumulator + expense.priceTotal,
        0,
      )

      setTotal(totalPrice)
    }
  }, [getProjectReducer])

  console.log(getProjectReducer?.project?.expenses)
  console.log(total)

  const clickRedirectCreateExpense = () => {
    history.push(`/projects/${id}/expenses/create`)
  }

  return { getProjectReducer, clickRedirectCreateExpense, total }
}
