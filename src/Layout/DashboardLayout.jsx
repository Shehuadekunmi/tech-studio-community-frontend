import React from 'react'
import Sidebar from '../components/Sidebar'
import HeaderDashboard from '../components/HeaderDashboard'

const DashboardLayout = ({children}) => {
  return (
    <div>
        <Sidebar/>
        <HeaderDashboard/>
        {children}

    </div>
  )
}

export default DashboardLayout