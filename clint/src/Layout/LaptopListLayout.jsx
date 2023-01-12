import React, { Suspense } from 'react'
import LaptopList from '../Pages/Admin/LaptopList'
import AdminNavigation from '../Pages/Admin/AdminNavigation'

const LaptopListLayout = () => {
  return (
    <AdminNavigation>
        <Suspense>
            <LaptopList />
        </Suspense>
    </AdminNavigation>
  )
}

export default LaptopListLayout
