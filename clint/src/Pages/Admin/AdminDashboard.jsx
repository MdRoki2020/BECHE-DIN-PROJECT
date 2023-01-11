import React, { Fragment } from 'react'
import '../../Assets/style/adminDashboard.css'
import Badge from 'react-bootstrap/Badge';
import { VscListOrdered } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";
import { FaProductHunt } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Legend, Bar } from 'recharts';


const data = [
  {
    name: 'Laptop',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Mobile',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Watch',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Television',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Electronics',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Fashion',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];


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

        <div className='row'>
          <div className='col-md-6'>
            <div className='card IncomeChart my-3'>
            <h5>Income From Categories</h5>

            <ResponsiveContainer width="100%" aspect={3}>
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barSize={20}
              >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
              </BarChart>
              </ResponsiveContainer>

            </div>
          </div>
          <div className='col-md-6'>
            <div className='card categoriesLavel my-3'>
                <h5>Categories Lavel</h5>
                <ResponsiveContainer width="100%" aspect={3}>
                  <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
                </ResponsiveContainer>

              </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AdminDashboard
