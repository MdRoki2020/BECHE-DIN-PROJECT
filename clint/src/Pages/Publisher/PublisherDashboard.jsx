import React, { Fragment, useEffect} from 'react'
import { Badge, Table } from 'react-bootstrap'
import {getUserDetails } from "../../Helper/SessionHelperPublisher";
import { FaBuysellads } from "react-icons/fa";
import { SiHandshake,SiAnalogue } from "react-icons/si";
import ReactPaginate from 'react-paginate'
import { GiReturnArrow } from "react-icons/gi";
import { LineChart, Line,ResponsiveContainer } from 'recharts';
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import '../../Assets/style/adminDashboard.css'
import laptop from '../../Assets/images/laptop.jpg'
import Footer from '../Footer'
import { useState } from 'react';
import { FilterProductByEmail } from '../../APIRequest/APIRequest';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const PublisherDashboard = () => {

  const [user,setUser]=useState([]);

  let publisherEmail=getUserDetails()['Email'];
  console.log(publisherEmail);

  const [pageNumber,setPageNumber]=useState(0);

  const usersPerPage=10;
  const pagesVisited=pageNumber * usersPerPage
  const displayUsers=user.slice(pagesVisited,pagesVisited+usersPerPage)
  const pageCount=Math.ceil(user.length / usersPerPage);
  const changePage=({selected})=>{
    setPageNumber(selected);
  };

  useEffect(()=>{
    FilterProductByEmail(publisherEmail).then((data)=>{

      setUser(data);

      })
  },[publisherEmail])

  console.log(user)

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


        <div className='row'>
          <div className='col-md-6'>

          </div>
          <div className='col-md-6'>
          <div className='card categoriesLavel my-3 shadow'>
            <h5>Income Rate</h5>
            <ResponsiveContainer width="100%" aspect="3">
            <LineChart width={300} height={100} data={data}>
              <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
          </div>
        </div>

        <div className='row'>
          <div className='recentOrder'>

            <Badge bg="success mb-3">
            Your Posted Products
            </Badge>

            <div className='orderTable card mb-3'>

            <Table striped bordered hover responsive>
            <thead>
                <tr>
                <th>Image</th>
                <th>Categories</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Ex-Price</th>
                <th>Color</th>
                <th>Battery mAh</th>
                <th>Warranty</th>
                <th>Entry Time</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                displayUsers.map((value,key)=>
                <tr key={key}>
                <td className='animated fadeInUp'><img className='img-thumbnail rounded' src={`http://localhost:5000/${value.filePath}`} alt="laptop" width="50"/></td>
                <td className='animated fadeInUp'>{value.ProductCategories}</td>
                <td className='animated fadeInUp'>{value.ProductName}</td>
                <td className='animated fadeInUp'>{value.ProductBrand}</td>
                <td className='animated fadeInUp'>{value.ProductPrice}</td>
                <td className='animated fadeInUp'><del>{value.ProductExPrice}</del></td>
                <td className='animated fadeInUp'>{value.ProductColor}</td>
                <td className='animated fadeInUp'>{value.ProductBattery}</td>
                <td className='animated fadeInUp'>{value.ProductWarranty}</td>
                <td className='animated fadeInUp'>{value.CreatedDate}</td>
                <td className='animated fadeInUp'><span className='text-info'><BiEdit/></span> <span className='text-danger'><RiDeleteBin6Line/></span></td>
                </tr>

                )
              }
            </tbody>
            
            </Table>

            </div>
          </div>
        </div>

        <div className=''>
        <ReactPaginate 
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>

      </div>

      <Footer />
    </Fragment>
  )
}

export default PublisherDashboard
