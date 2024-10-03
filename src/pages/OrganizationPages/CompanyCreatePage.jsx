import React from 'react'
import CompanyCreateComponent from '../../components/Organization/CompanyCreateComponent'

const CompanyCreatePage = () => {
  return (
    <div className='content-mid base-bg-color company-create' >
          <div className='px-5 py-12' id='dashboard' >
              <CompanyCreateComponent />
          </div>
    </div>
  )
}

export default CompanyCreatePage
