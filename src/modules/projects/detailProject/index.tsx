import React from 'react'
import NumberFormat from 'react-number-format'
import { Fab } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import List from '../../../components/list'
import ListItem from '../../../components/list/listItem'
import { useDetailProject } from './useDetailProject'
import { Expense } from '../../../interfaces/entities/expense'
import { formatValue } from '../../../utils/moneyFormat'

function DetailProjectModule() {
  const {
    getProjectReducer,
    clickRedirectCreateExpense,
    total,
    getNewExpense,
  } = useDetailProject()
  const { project } = getProjectReducer

  console.log(getNewExpense)

  return (
    <div>
      <h3>{project && project.title}</h3>
      <span>{formatValue(total)}</span>
      <List>
        {getNewExpense &&
          getNewExpense.map((expense: Expense, i: number) => (
            <ListItem
              key={expense.name}
              title={expense.name}
              description={formatValue(expense.priceTotal)}
            />
          ))}
      </List>

      <List>
        {project?.expenses &&
          project.expenses.map((expense: Expense) => (
            <ListItem
              key={expense.id}
              title={expense.name}
              description={formatValue(expense.priceTotal)}
            />
          ))}
      </List>

      <Fab
        variant="extended"
        color="primary"
        aria-label="add"
        onClick={() => clickRedirectCreateExpense()}
      >
        Add Expense
      </Fab>
    </div>
  )
}

export default DetailProjectModule
