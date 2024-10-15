import React from 'react'
import ExpenseComponent from '../../components/Organization/ExpenseComponent'

const ExpensePage = () => {
  return (
    <div className='content-mid' >
      <div className='px-5 py-12 right-const-structure' id='dashboard' >
        <ExpenseComponent />
      </div>
    </div>
  )
}

export default ExpensePage
