import React from 'react'
import ExpenseTypeComponent from '../../components/Constants/ExpenseTypeComponent'

const ExpenseTypePage = () => {
  return (
    <div className='content-mid base-bg-color' >
      <div className='px-5 py-12 right-const-structure' id='dashboard' >
         <ExpenseTypeComponent/>
      </div>
    </div>
  )
}

export default ExpenseTypePage
