import React, { Fragment, useEffect, useState } from 'react'
import { Badge, Table } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import '../../Assets/style/adminDashboard.css'
import { AllPublisherList } from '../../APIRequest/APIRequest'
import { PublisherDeleteAlert } from '../../Helper/PublisherDeleteAlert'
import { FcBusinessman } from "react-icons/fc";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const PublisherList = () => {

  const [product,setProduct]=useState([]);
  const [pageNumber,setPageNumber]=useState(0);

  const usersPerPage=15;
  const pagesVisited=pageNumber * usersPerPage
  const displayUsers=product.slice(pagesVisited,pagesVisited+usersPerPage)
  const pageCount=Math.ceil(product.length / usersPerPage);
  const changePage=({selected})=>{
    setPageNumber(selected);
  };

  useEffect(()=>{
    GetPublisher();
  },[])

  const GetPublisher=()=>{
    AllPublisherList().then((data)=>{
      setProduct(data);
    })
  }

  const DeleteItem=(id)=>{
    PublisherDeleteAlert(id).then((data)=>{
        if(data===true){
          GetPublisher();
        }
    })
  }


  return (
    <Fragment>
        <div className='container-fluid'>

        <div className='row'>
          <div className='col-md-12'>
              <div className='card posterWrapper animated flipInX my-4'>
                <div className='row'>
                  <div className='col-sm-3'>
                  <h2><FcBusinessman /></h2>
                  </div>
                  <div className='col-sm-9'>
                  <div className='posterText'>
                    <h2>All Publishers !</h2>
                    {/* <p><AiTwotoneEnvironment/> All Bangladesh !</p> */}
                    {/* <input className='searchDistrict shadow' placeholder='What Are You Want' /> <Button className='btn btn-info shadow'><BsSearch/></Button> */}
                  </div>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <Badge bg="danger mb-3">
         Publisher List
        </Badge>

        <div className='orderTable card mb-3'>

            <Table striped bordered hover responsive >
            <thead>
                <tr>
                <th>Publisher Image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th>District</th>
                <th>Entry Time</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                displayUsers.map((value,key)=>
                <tr key={key}>
                {/* <td className='animated fadeInUp'><img className='img-thumbnail rounded' src={`https://bechedin-deploy-production.up.railway.app/${value.filePath}`} alt="profile" width="50"/></td> */}
                <td>
                <Zoom>
                  <img className='img-fluid img-thumbnail rounded' alt={value.FirstName}
                  src={`http://localhost:5000/${value.filePath}`}
                  width="50" height="50"
                  />
                </Zoom>
                </td>
                <td className='animated fadeInUp'>{value.FirstName}</td>
                <td className='animated fadeInUp'>{value.LastName}</td>
                <td className='animated fadeInUp'>{value.Age}</td>
                <td className='animated fadeInUp'>{value.Mobile}</td>
                <td className='animated fadeInUp'>{value.Email}</td>
                <td className='animated fadeInUp'>{value.District}</td>
                <td className='animated fadeInUp'>{formatDate(new Date(value.CreatedDate))}</td>
                <td className='animated fadeInUp'><span onClick={DeleteItem.bind(this,value._id)}><Badge bg="danger mb-3">Suspend</Badge></span></td>
                </tr>
                )
            }
            </tbody>
            </Table>

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

export default PublisherList
