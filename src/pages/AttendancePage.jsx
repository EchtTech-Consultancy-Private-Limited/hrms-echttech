import React from 'react'
import AttendanceComponent from '../components/Attendance/AttendanceComponent'

const AttendancePage = () => {
  return (
    <div className='content-mid base-bg-color' >
      <div id='dashboard' className='px-10 py-12'  >
        
        <AttendanceComponent />
      </div>
    </div>
  )
}

export default AttendancePage
