import React, { Fragment, useEffect, useState } from 'react'
import { Badge, Table } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import { AllADsList } from '../../APIRequest/APIRequest'
import '../../Assets/style/adminDashboard.css'
import { DeleteAlert } from '../../Helper/DeleteAlert'
import { MdProductionQuantityLimits } from "react-icons/md";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

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
        <div className='row'>
          <div className='col-md-12'>
              <div className='card posterWrapper animated flipInX my-4'>
                <div className='row'>
                  <div className='col-sm-3'>
                  <h2><MdProductionQuantityLimits /></h2>
                  </div>
                  <div className='col-sm-9'>
                  <div className='posterText'>
                    <h2>All Products !</h2>
                    {/* <p><AiTwotoneEnvironment/> All Bangladesh !</p> */}
                    {/* <input className='searchDistrict shadow' placeholder='What Are You Want' /> <Button className='btn btn-info shadow'><BsSearch/></Button> */}
                  </div>
                  </div>
                </div>
              </div>
          </div>
        </div>


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
                <th>Ads Owner</th>
                <th>Entry Time</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
              displayAds.map((value,key)=>
              <tr key={key}>
                {/* <td className='animated fadeInUp'><img className='img-thumbnail rounded' src={`https://bechedin-deploy-production.up.railway.app/${value.filePath}`} width="50" alt='image'/></td> */}
                <td>
                <Zoom>
                  <img className='img-fluid img-thumbnail rounded' alt={value.ProductName}
                  src={`http://localhost:5000/${value.filePath}`}
                  width="50" height="50"
                  />
                </Zoom>
                </td>
                <td className='animated fadeInUp'>{value.ProductName}</td>
                <td className='animated fadeInUp'>{value.ProductBrand}</td>
                <td className='animated fadeInUp'>{value.ProductPrice}</td>
                <td className='animated fadeInUp'>{value.ProductColor}</td>
                <td className='animated fadeInUp'>{value.ProductBattery}</td>
                <td className='animated fadeInUp'>{value.ProductWarranty}</td>
                <td className='animated fadeInUp'>{value.ProductCategories}</td>
                <td className='animated fadeInUp'>{value.PublisherEmail}</td>
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

export default LaptopList
