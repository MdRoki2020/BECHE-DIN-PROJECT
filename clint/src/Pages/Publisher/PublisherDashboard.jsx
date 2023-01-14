import React, { Fragment } from 'react'
import { Badge } from 'react-bootstrap'
import { FaBuysellads } from "react-icons/fa";
import { SiHandshake,SiAnalogue } from "react-icons/si";
import ReactPaginate from 'react-paginate'
import { GiReturnArrow } from "react-icons/gi";

const PublisherDashboard = () => {
  return (
    <Fragment>
      <div className='container-fluid'>
        <Badge bg="danger mb-3">
         Publisher Dashboard
        </Badge>

        <div className='row'>
          <div className='col-md-3'>
          <div className='dashboardCounter card text-center shadow'>
            <h3><FaBuysellads/></h3>
            <p>Your ADs</p>
            <h5 className='animated fadeInUp'>20</h5>
          </div>
          </div>
          <div className='col-md-3'>
          <div className='dashboardCounter card text-center shadow'>
            <h3><SiHandshake/></h3>
              <p>Product Sold</p>
              <h5 className='animated fadeInUp'>8</h5>
          </div>
          </div>
          <div className='col-md-3'>
          <div className='dashboardCounter card text-center shadow'>
            <h3><GiReturnArrow/></h3>
              <p>Return Product</p>
              <h5 className='animated fadeInUp'>0</h5>
          </div>
          </div>
          <div className='col-md-3'>
          <div className='dashboardCounter card text-center shadow'>
            <h3><SiAnalogue/></h3>
              <p>Total Income</p>
              <h5 className='animated fadeInUp'>৳ 10,500</h5>
          </div>
          </div>
        </div>


      </div>
    </Fragment>
  )
}

export default PublisherDashboard
