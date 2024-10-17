import React from 'react'
import MetaData from '../components/shared/MetaData'
import DashboardStatsGrid from '../components/dashboard/DashboardStatsGrid'

const Dashboard = () => {

  
  return (
    <div className='content-mid'>
      <MetaData title={'Dashboard'} />
      <DashboardStatsGrid />
    </div>
  )
}

export default Dashboard
