import React from 'react'
import AttendanceListComponent from '../../components/Attendance/AttendanceListComponent'

const AttendanceListPage = () => {
  return (
    <div className='content-mid base-bg-color' >
      <div id='dashboard' className='px-10 py-12'  >
        <AttendanceListComponent />
      </div>
    </div>
  )
}

export default AttendanceListPage
