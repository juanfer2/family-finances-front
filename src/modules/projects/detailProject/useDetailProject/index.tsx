import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory, useLocation } from 'react-router-dom'

import { getProject } from '../../../../flux/actions/projects/getProject.action'
import { Expense } from '../../../../interfaces/entities/expense'
import {
  getExpensesSocket,
  sendExpensesSocket,
  getNewsExpenseSocket,
  socket,
} from '../../../../services/socketIOService'

export const useDetailProject = () => {
  const [total, setTotal] = useState<number>(0)
  const [getNewExpense, setGetNewExpense] = useState<any[]>([])
  const history = useHistory()
  const dispatch = useDispatch()
  const state: any = useSelector((state: any) => state)
  const { getProjectReducer } = state
  const { id }: any = useParams()

  useEffect(() => {
    const startGetProject = (id: number) => dispatch(getProject(id))
    startGetProject(parseInt(id))
    getExpensesSocket()
    sendExpensesSocket(parseInt(id))
    getNewsExpenseSocket()

    return () => {
      socket.disconnect()
    }
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

  const clickRedirectCreateExpense = () => {
    history.push(`/projects/${id}/expenses/create`)
  }

  const getNewsExpenseSocket = () => {
    socket.on('get_news_expense', (data: Expense) => {
      console.log('data')
      console.log(data)

      setGetNewExpense((getNewExpense) => [...getNewExpense, data])
    })
  }

  return { getProjectReducer, clickRedirectCreateExpense, total, getNewExpense }
}
