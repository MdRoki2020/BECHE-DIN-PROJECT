import React, { Fragment } from 'react'
import '../../Assets/style/adminDashboard.css'
import Badge from 'react-bootstrap/Badge';
import { VscListOrdered } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";
import { FaProductHunt } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

const AdminDashboard = () => {
  return (
    <Fragment>
      <div className='container-fluid'>

      <Badge bg="danger">
        Admin
      </Badge>

        <h4>Dahboard</h4>
        <div className='row'>
          <div className='col-md-3'>
          <div className='dashboardCounter card text-center shadow'>
            <h3><VscListOrdered/></h3>
            <p>Total Orders</p>
            <h5>20</h5>
          </div>
          </div>
          <div className='col-md-3'>
          <div className='dashboardCounter card text-center shadow'>
            <h3><FiUsers/></h3>
              <p>Total Publisher</p>
              <h5>200</h5>
          </div>
          </div>
          <div className='col-md-3'>
          <div className='dashboardCounter card text-center shadow'>
            <h3><FaProductHunt/></h3>
              <p>Total Product</p>
              <h5>7539</h5>
          </div>
          </div>
          <div className='col-md-3'>
          <div className='dashboardCounter card text-center shadow'>
            <h3><BsGraphUp/></h3>
              <p>Total Income</p>
              <h5>৳ 20,0500</h5>
          </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AdminDashboard
