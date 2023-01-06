import React, { Fragment } from 'react'
import productImage from '../Assets/images/laptop.jpg'
import { AiFillStar } from "react-icons/ai";
import '../Assets/style/productDetails.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ProductDetails = () => {
  return (
    <Fragment>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='productImage card my-4'>
                <img src={productImage} alt={productImage} />
              </div>
            </div>
            <div className='col-md-8'>
            <div className='productDetails my-4'>
                <div className='detailsSectionOne'>
                  <h4>Asus Vivobook 15</h4>
                  <button className='btn starButton my-3'>0 <AiFillStar/></button> (0) <Link to='#'><span className='reviewOption'> | Add Your Review</span></Link>
                  <p>Brand: <span className='brand'> Asus</span> | Sold by: <span className='soldBy'> Beacon Computer</span></p>
                </div>
                
                <div className='detailsSectionTwo'>
                  <p><span className='exactPrice'>৳ 91,490</span> <del className='exPrice'>৳ 96,800</del></p>
                  <p className='coins'>Earn 1645 Club Points</p>
                  <button type="button" class="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                  <span class="glyphicon glyphicon-minus"></span>
              </button>
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default ProductDetails
