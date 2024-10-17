import React, { useEffect, useState } from 'react'
import MetaData from '../components/shared/MetaData'
import LoginComponent from '../components/auth/LoginComponent'

const LoginPage = () => {
  
  return (
    <div>
        <MetaData title={'Login'} />
        <LoginComponent />
    </div>
  )
}

export default LoginPage
