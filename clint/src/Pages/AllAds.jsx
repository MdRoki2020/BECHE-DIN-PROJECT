import React, { Fragment } from 'react'
import allAds from '../Assets/images/allAds.jpg'
import { AiTwotoneEnvironment,AiOutlineSearch } from "react-icons/ai"
import { BsCartPlus } from "react-icons/bs";
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { Button } from 'react-bootstrap';

const AllAds = () => {
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
              <input className='rounded-pill searchDistrict shadow' placeholder='Search By District' /> <Button className='btn btn-warning shadow'><AiOutlineSearch/></Button>
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
    <h5>Products</h5>

    <div className='row'>
      <div className='col-md-2'>
        <Link to='/productDetails'>
            <div className='allItems animated zoomIn'>
              <div class="card">
                <img className="card-img-top" src={allAds} alt="laptop" />
                <div className="card-body">
                  <h6 className="card-title text-center">Vivobook 15</h6>
                  <div className='price text-center'><del>৳75500</del> <b>৳71500</b></div>
                  <Link to='/productDetails'><button className='btn btn-secondary form-control'><BsCartPlus/></button></Link>
                </div>
              </div>
            </div>
        </Link>
      </div>
    </div>
  </div>
  </section>

  <div className=''>
    <ReactPaginate 
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={"..."}
      // pageCount={pageCount}
      // onPageChange={changePage}
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
