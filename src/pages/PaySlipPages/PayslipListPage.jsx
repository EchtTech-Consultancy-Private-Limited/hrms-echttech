import React from 'react'
import PayslipListComponent from '../../components/Payslip/PayslipListComponent'

const PayslipListPage = () => {
  return (
    <div>
        <div className='content-mid' >
          <div className='px-5 py-12 right-const-structure' id='dashboard' >
              <PayslipListComponent />
          </div>
      </div>
    </div>
  )
}

export default PayslipListPage
