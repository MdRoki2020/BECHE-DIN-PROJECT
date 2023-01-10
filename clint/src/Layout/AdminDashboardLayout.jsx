import React, { Suspense } from 'react'
import AdminNavigation from '../Pages/Admin/AdminNavigation'
import AdminDashboard from '../Pages/Admin/AdminDashboard'

const AdminDashboardLayout = () => {
  return (
    <AdminNavigation>
        <Suspense>

          <AdminDashboard />

        </Suspense>
      </AdminNavigation>
  )
}

export default AdminDashboardLayout
