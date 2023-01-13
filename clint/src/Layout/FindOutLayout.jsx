import React, { Suspense } from 'react'
import AdminNavigation from '../Pages/Admin/AdminNavigation'
import FindOut from '../Pages/Admin/FindOut'

const FindOutLayout = () => {
  return (
    <div>
      <AdminNavigation>
        <Suspense>
            <FindOut />
        </Suspense>
      </AdminNavigation>
    </div>
  )
}

export default FindOutLayout
