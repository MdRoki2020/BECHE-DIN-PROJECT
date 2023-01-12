import React, { Suspense } from 'react'
import PublisherList from '../Pages/Admin/PublisherList'
import AdminNavigation from '../Pages/Admin/AdminNavigation'

const PublisherListLayout = () => {
  return (
    <div>
      <AdminNavigation>
        <Suspense>
            <PublisherList />
        </Suspense>
      </AdminNavigation>
    </div>
  )
}

export default PublisherListLayout
