import React from 'react'
import AttendanceListComponent from '../../components/Attendance/AttendanceListComponent'

const AttendanceListPage = () => {
  return (
    <div className='content-mid base-bg-color' >
      <div id='dashboard' className='px-5 py-12 div-lr-pad-0'  >
        <AttendanceListComponent />
      </div>
    </div>
  )
}

export default AttendanceListPage
