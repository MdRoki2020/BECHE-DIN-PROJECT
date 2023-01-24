import React, { Fragment, useEffect, useState } from 'react'
import { Badge, Table } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import Swal from 'sweetalert2'
import { AllADsList, DeleteProduct } from '../../APIRequest/APIRequest'
import '../../Assets/style/adminDashboard.css'
import { DeleteAlert } from '../../Helper/DeleteAlert'
import { ErrorToast } from '../../Helper/FormHelper'

const LaptopList = () => {

  const [product,setProduct]=useState([]);
  const [pageNumber,setPageNumber]=useState(0);

  const usersPerPage=15;
  const pagesVisited=pageNumber * usersPerPage
  const displayAds=product.slice(pagesVisited,pagesVisited+usersPerPage)
  const pageCount=Math.ceil(product.length / usersPerPage);
  const changePage=({selected})=>{
    setPageNumber(selected);
  };

  useEffect(()=>{
    GetData();
  },[])

  const GetData=()=>{
    AllADsList().then((data)=>{
      setProduct(data);

      })
  }


  const DeleteItem=(id)=>{
    DeleteAlert(id).then((data)=>{
        if(data===true){
            GetData();
        }
    })
  }


  return (
    <Fragment>
        <div className='container-fluid'>
        <Badge bg="danger mb-3">
         Product List
        </Badge>

        <div className='orderTable card mb-3'>

            <Table striped bordered hover responsive>
            <thead>
                <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Color</th>
                <th>Battery mAh</th>
                <th>Warranty</th>
                <th>Categories</th>
                <th>Entry Time</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
              displayAds.map((value,key)=>
              <tr key={key}>
                <td className='animated fadeInUp'><img className='img-thumbnail rounded' src={`http://localhost:5000/${value.filePath}`} width="50"/></td>
                <td className='animated fadeInUp'>{value.ProductName}</td>
                <td className='animated fadeInUp'>{value.ProductBrand}</td>
                <td className='animated fadeInUp'>{value.ProductPrice}</td>
                <td className='animated fadeInUp'>{value.ProductColor}</td>
                <td className='animated fadeInUp'>{value.ProductBattery}</td>
                <td className='animated fadeInUp'>{value.ProductWarranty}</td>
                <td className='animated fadeInUp'>{value.ProductCategories}</td>
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

export default LaptopList
