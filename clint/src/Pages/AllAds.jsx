import React, { Fragment, useEffect, useState } from 'react'
import allAds from '../Assets/images/allAds.jpg'
import { AiTwotoneEnvironment } from "react-icons/ai"
import { BsCartPlus, BsSearch } from "react-icons/bs";
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { Button } from 'react-bootstrap';
import { AllADs } from '../APIRequest/APIRequest';
import 'hover.css/css/hover-min.css';


const AllAds = () => {

  const [product,setProduct]=useState([]);
  const [pageNumber,setPageNumber]=useState(0);

  const usersPerPage=18;
  const pagesVisited=pageNumber * usersPerPage
  const displayProduct=product.slice(pagesVisited,pagesVisited+usersPerPage)
  const pageCount=Math.ceil(product.length / usersPerPage);
  const changePage=({selected})=>{
    setPageNumber(selected);
  };

  useEffect(()=>{
    AllADs().then((data)=>{

      setProduct(data);

      })
  },[])


  return (
    <Fragment>
  <section>

  <div className='container'>
    <div className='row'>
    <div className='col-md-12'>
        <div className='card posterWrapper animated flipInX my-4'>
          <div className='row'>
            <div className='col-sm-3'>
            <img className='poster' src={allAds} alt='headerLaptop'/>
            </div>
            <div className='col-sm-9'>
            <div className='posterText'>
              <h2>All Ads !</h2>
              <p><AiTwotoneEnvironment/> All Bangladesh !</p>
              <input className='searchDistrict shadow' placeholder='What Are You Want' /> <Button className='btn btn-info shadow'><BsSearch/></Button>
            </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>
  </section>

  <section>
  <div className='container'>
    <h5>All Category</h5>

    <div className='row'>
    {
    displayProduct.map((value,key)=>

      <div className='col-md-2 d-block d-lg-flex'>
        <Link to={'/productDetails/'+value._id}>
            <div className='allItems mb-3 hvr-float-shadow'>
              <div className="card animated zoomIn">
                <img className="card-img-top" src={`http://localhost:5000/${value.filePath}`} alt="laptop" />
                <div className="card-body">
                  <h6 className="card-title text-center">{value.ProductName}</h6>
                  <div className='price text-center'><del>৳{value.ProductExPrice}</del> <b>৳{value.ProductPrice}</b></div>
                  <Link to={'/productDetails/'+value._id}><button className='btn btn-secondary form-control'><BsCartPlus/></button></Link>
                </div>
              </div>
            </div>
        </Link>
      </div>
      )
    }
    </div>
  </div>
  </section>

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

export default AllAds
