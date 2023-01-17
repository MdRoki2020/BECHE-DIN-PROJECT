import React, { Fragment } from 'react'
import headerLaptop from '../Assets/images/laptop.jpg'
import { AiTwotoneEnvironment,AiOutlineSearch } from "react-icons/ai"
import { BsCartPlus } from "react-icons/bs";
import '../Assets/style/categoriesItems.css'
import { Badge, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import Footer from './Footer';


const Products = () => {

  const {categories}=useParams();
  console.log(categories)
  return (
<Fragment>
  <section>

  <div className='container'>
    <div className='row'>
    <div className='col-md-12'>
        <div className='card posterWrapper animated flipInX my-4'>
          <div className='row'>
            <div className='col-sm-3'>
            <img className='poster' src={headerLaptop} alt='headerLaptop'/>
            </div>
            <div className='col-sm-9'>
            <div className='posterText'>
              <h2>{categories} !</h2>
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
    {/* <h5>Products</h5> */}
    <Badge bg="success mb-3">
      Products
    </Badge>

    <div className='row'>
      <div className='col-md-2'>
        <Link to='/productDetails'>
            <div className='allItems animated zoomIn'>
              <div class="card">
                <img className="card-img-top" src={headerLaptop} alt="laptop" />
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

  <section>
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
  </section>

  
  <Footer />  
</Fragment>
  )
}

export default Products
