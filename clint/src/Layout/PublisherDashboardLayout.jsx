import React, { Suspense } from 'react'
import PublisherDashboard from '../Pages/Publisher/PublisherDashboard'
import PublisherNavigation from '../Pages/Publisher/PublisherNavigation'

const PublisherDashboardLayout = () => {
  return (
    <div>
      <PublisherNavigation>
        <Suspense>
            <PublisherDashboard />
        </Suspense>
      </PublisherNavigation>
    </div>
  )
}

export default PublisherDashboardLayout
