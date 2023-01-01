import React from 'react'
import '../Assets/style/Home.css'

function Home() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
          <div className='coverMeta text-center'>
            <h2 className='textContentWrapper animated fadeInLeft'>BECHE DIN Will Change</h2>
            <h2 className='textContentWrapper animated fadeInLeft'>Expression Each Visit</h2>
            <p className='coverText animated fadeInUpBig'>Sold Your Old Drafts Safely</p>
            <p className='coverText animated fadeInUpBig'>Safe Delevered Of Our Own Community</p>
          </div>
          </div>
          <div className='col-md-6'>
              <div className='subscribeComponents mt-5 text-center'>
              <input className='shadow' placeholder='Enter Email'/><button className='shadow btn btn-warning text-light'>Subscribe</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
