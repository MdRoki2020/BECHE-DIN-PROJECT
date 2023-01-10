import React, { Suspense } from 'react'
import PublisherNavigation from '../Pages/Publisher/PublisherNavigation';
import PostAds from '../Pages/Publisher/PostAds';

const PostAdLayout = () => {
  return (
    <div>
      <PublisherNavigation>
        <Suspense>

          <PostAds />

        </Suspense>
      </PublisherNavigation>
    </div>
  )
}

export default PostAdLayout
