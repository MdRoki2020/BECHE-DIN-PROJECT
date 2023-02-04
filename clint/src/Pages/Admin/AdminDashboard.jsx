import React, { Fragment, useState, useEffect } from 'react'
import '../../Assets/style/adminDashboard.css'
import Badge from 'react-bootstrap/Badge';
import {Table} from 'react-bootstrap';
import { VscListOrdered } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";
import ReactPaginate from 'react-paginate'
import { FaProductHunt } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Legend, Bar } from 'recharts';
import Footer from '../Footer';
import { AllOrders,TotalOrders,TotalPublisher,TotalProducts } from '../../APIRequest/APIRequest';


const data = [
  {
    name: 'Laptop',
    uv: 4000,
    pv: 3400,
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

  const [TotalOrderCount,setTotalOrders]=useState([]);
  const [TotalPublisherCount,setTotalPublisher]=useState([]);
  const [TotalProductCount,setTotalProduct]=useState([]);

  const [product,setProduct]=useState([]);
  const [pageNumber,setPageNumber]=useState(0);

  const usersPerPage=10;
  const pagesVisited=pageNumber * usersPerPage
  const displayOrders=product.slice(pagesVisited,pagesVisited+usersPerPage)
  const pageCount=Math.ceil(product.length / usersPerPage);
  const changePage=({selected})=>{
    setPageNumber(selected);
  };

  useEffect(()=>{
    getOrder();
    CountTotalOrders();
    CountTotalPublisher();
    CountTotalProducts();
  },[])

  const getOrder=()=>{
    AllOrders().then((data)=>{
      setProduct(data);
      })
  }

  const CountTotalOrders=()=>{
    TotalOrders().then((data)=>{
      setTotalOrders(data);
      })
  }

  const CountTotalPublisher=()=>{
    TotalPublisher().then((data)=>{
      setTotalPublisher(data);
      })
  }

  const CountTotalProducts=()=>{
    TotalProducts().then((data)=>{
      setTotalProduct(data);
      })
  }


  return (
    <Fragment>
      <div className='container-fluid'>

        <Badge bg="danger mb-3">
         ADMIN Dashboard
        </Badge>

        <div className='row'>
          <div className='col-md-3'>
          <div className='dashboardCounter card text-center shadow'>
            <h3><VscListOrdered/></h3>
            <p>Total Orders</p>
            <h5 className='animated fadeInUp'>{TotalOrderCount.total}</h5>
          </div>
          </div>
          <div className='col-md-3'>
          <div className='dashboardCounter card text-center shadow'>
            <h3><FiUsers/></h3>
              <p>Total Publisher</p>
              <h5 className='animated fadeInUp'>{TotalPublisherCount.total}</h5>
          </div>
          </div>
          <div className='col-md-3'>
          <div className='dashboardCounter card text-center shadow'>
            <h3><FaProductHunt/></h3>
              <p>Total Product</p>
              <h5 className='animated fadeInUp'>{TotalProductCount.total}</h5>
          </div>
          </div>
          <div className='col-md-3'>
          <div className='dashboardCounter card text-center shadow'>
            <h3><BsGraphUp/></h3>
              <p>Total Income</p>
              <h5 className='animated fadeInUp'>৳ 20,0500</h5>
          </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <div className='card IncomeChart my-3 shadow'>
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
            <div className='card categoriesLavel my-3 shadow'>
                <h5>Product Lavel</h5>
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

        <div className='row'>
          <div className='recentOrder'>

            <Badge bg="success mb-3">
            Recent Order
            </Badge>

            <div className='orderTable card mb-3'>

              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Category</th>
                    <th>Clint Name</th>
                    <th>Clint Number</th>
                    <th>Clint Division</th>
                    <th>Clint District</th>
                    <th>Clint Thana</th>
                    <th>Clint Address</th>
                    <th>Transaction ID</th>
                    <th>Status</th>
                    <th>Order Time</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    displayOrders.map((value,key)=>
                    <tr key={key}>
                    <td className='animated fadeInUp'>{value.ProductId}</td>
                    <td className='animated fadeInUp'>{value.ProductName}</td>
                    <td className='animated fadeInUp'>{value.ProductCategories}</td>
                    <td className='animated fadeInUp'>{value.FirstName}</td>
                    <td className='animated fadeInUp'>{value.ContactNumber}</td>
                    <td className='animated fadeInUp'>{value.Division}</td>
                    <td className='animated fadeInUp'>{value.District}</td>
                    <td className='animated fadeInUp'>{value.Thana}</td>
                    <td className='animated fadeInUp'>{value.Address}</td>
                    <td className='animated fadeInUp'>{value.TransactionId}</td>
                    <td className='animated fadeInUp'><Badge bg="danger">Pending</Badge></td>
                    <td className='animated fadeInUp'>{formatDate(new Date(value.CreatedDate))}</td>
                    </tr>
                    )
                  }
                </tbody>
              </Table>

            </div>
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

      <Footer />
    </Fragment>
  )
}


const formatDate = date => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 || 12;
  return `${day}-${month}-${year}   ${hours12}:${minutes}:${seconds} ${ampm}`;
};

export default AdminDashboard
