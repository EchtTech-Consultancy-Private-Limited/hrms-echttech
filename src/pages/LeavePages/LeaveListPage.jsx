import React from 'react'
import LeaveComponentList from '../../components/leaves/LeaveComponentList'

const LeaveListPage = () => {
  return (
    <div className='content-mid' >
        <div className='px-5 py-12 right-const-structure' id='dashboard' >
           <LeaveComponentList />
        </div>
    </div>
  )
}

export default LeaveListPage
