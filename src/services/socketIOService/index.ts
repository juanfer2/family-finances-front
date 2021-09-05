import socketIOClient from 'socket.io-client'
import { GET_EXPENSES } from '../../contants/socket_io.constant'
import { Expense } from '../../interfaces/entities/expense'

//https://api-finances-family.herokuapp.com/
//hhttp://localhost:4000
export const socket = socketIOClient(
  'https://api-finances-family.herokuapp.com/',
)

export const connetSocket = () => {
  socket.on('connect', () => {
    console.log('Conect')
    console.log(socket.id)
  })
}

export const getExpensesSocket = () => {
  socket.on('get_expenses', (data: any) => {
    console.log('recibe get Expenses')
    console.log(data)
  })
}

export const sendExpensesSocket = (expenseId: number) => {
  socket.emit('get_expenses', {
    token: localStorage.getItem('token'),
    id: expenseId,
  })
}

export const getNewsExpenseSocket = () => {
  socket.on('get_news_expense', (data: any) => {
    console.log('recibe get new expense')
    console.log(data)
    return data
  })
}

export const sendNewExpenseSocket = (expense: Expense) => {
  socket.emit('get_news_expense', {
    token: localStorage.getItem('token'),
    expense,
  })
}
