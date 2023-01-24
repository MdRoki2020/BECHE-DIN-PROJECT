import React, { Fragment, useEffect, useState } from 'react'
import { Badge, Table } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import '../../Assets/style/adminDashboard.css'
import { AllPublisherList } from '../../APIRequest/APIRequest'
import { PublisherDeleteAlert } from '../../Helper/PublisherDeleteAlert'

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
                <td className='animated fadeInUp'><img className='img-thumbnail rounded' src={`http://localhost:5000/${value.filePath}`} alt="profile" width="50"/></td>
                <td className='animated fadeInUp'>{value.FirstName}</td>
                <td className='animated fadeInUp'>{value.LastName}</td>
                <td className='animated fadeInUp'>{value.Age}</td>
                <td className='animated fadeInUp'>{value.Mobile}</td>
                <td className='animated fadeInUp'>{value.Email}</td>
                <td className='animated fadeInUp'>{value.District}</td>
                <td className='animated fadeInUp'>{value.CreatedDate}</td>
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

export default PublisherList
