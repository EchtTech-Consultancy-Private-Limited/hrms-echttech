import React from 'react'
import MetaData from '../components/shared/MetaData'
import AccountSettingComponent from '../components/auth/AccountSettingComponent'

const AccountSettingPage = () => {
  return (
    <div className='content-mid' >
      <MetaData title={'Dashboard'} />
      <div className='px-5 py-12 right-const-structure' id='dashboard' >
        <AccountSettingComponent />
      </div>
    </div>
  )
}

export default AccountSettingPage
