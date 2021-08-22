import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import { Expense } from '../../../../interfaces/entities/expense'
import { validationSchema } from './validationSchema'
import { createExpense } from '../../../../flux/actions/expenses/createExpense.action'

export const useCreateExpense = () => {
  const dispatch = useDispatch()
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
    initialValues: initialState,
    onSubmit: (values) => {
      console.log(values)
      startCreateExpense(values)
    },
  })

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }

  return { formik, selectedDate, setSelectedDate, handleDateChange }
}
