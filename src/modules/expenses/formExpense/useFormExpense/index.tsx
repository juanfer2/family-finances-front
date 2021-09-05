import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, useHistory, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { useFormik } from 'formik'
import { Expense } from '../../../../interfaces/entities/expense'
import { validationSchema } from './validationSchema'
import { createExpense } from '../../../../flux/actions/expenses/createExpense.action'
import { redirectTo } from '../../../../routes/redirect'
import { sendNewExpenseSocket } from '../../../../services/socketIOService'

export const useFormExpense = (initialStateExpense?: Expense) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id }: any = useParams()

  const startCreateExpense = (expense: Expense) =>
    dispatch(createExpense(expense))
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  )

  const initialState: Expense = {
    name: '',
    projectId: parseInt(id),
    description: '',
    priceTotal: 0.0,
    totalPaid: 0.0,
    totalDept: 0.0,
    datePay: '',
    status: '',
    numberQuota: 0,
  }

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: initialStateExpense ? initialStateExpense : initialState,
    onSubmit: async (values) => {
      //await startCreateExpense(values)
      //redirectTo(`/projects/${id}`)
      sendNewExpenseSocket(values)
      history.push(`/projects/${id}`)
    },
  })

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }

  return { formik, selectedDate, setSelectedDate, handleDateChange }
}
