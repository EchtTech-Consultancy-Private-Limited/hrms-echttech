import React from 'react'
import ExpenseTypeComponent from '../../components/Constants/ExpenseTypeComponent'

const ExpenseTypePage = () => {
  return (
    <div className='content-mid' >
      <div className='px-5 py-12' id='dashboard' >
         <ExpenseTypeComponent/>
      </div>
    </div>
  )
}

export default ExpenseTypePage
