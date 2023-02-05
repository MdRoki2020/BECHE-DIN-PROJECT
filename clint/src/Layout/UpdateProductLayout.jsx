import React, { Suspense } from 'react'
import UpdateProduct from '../Pages/Publisher/UpdateProduct'
import PublisherNavigation from '../Pages/Publisher/PublisherNavigation'

const UpdateProductLayout = () => {
  return (
    <div>
      <PublisherNavigation>
        <Suspense>
            <UpdateProduct />
        </Suspense>
      </PublisherNavigation>
    </div>
  )
}

export default UpdateProductLayout
