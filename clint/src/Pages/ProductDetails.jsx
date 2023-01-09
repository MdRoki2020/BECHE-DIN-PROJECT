import React, { Fragment } from 'react'
import productImage from '../Assets/images/laptop.jpg'
import { AiFillStar,AiOutlineHeart,AiOutlineShopping } from "react-icons/ai";
import '../Assets/style/productDetails.css';
import { Link } from 'react-router-dom';
import ratingPoster from '../Assets/images/download.svg'
import Footer from './Footer'
import ReactImageMagnify from 'react-image-magnify';

const ProductDetails = () => {
  return (
    <Fragment>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='imageAndComponents'>
              <div className='productImage card my-4 shadow'>
                {/* <img className='img-fluid img-thumbnail' src={productImage} alt={productImage} /> */}
                <ReactImageMagnify {...{
                      smallImage: {
                          alt: 'productImage',
                          isFluidWidth: true,
                          src: productImage
                      },
                      largeImage: {
                          src: productImage,
                          width: 1200,
                          height: 1800
                      }
                }} />
              </div>
              <button className='wishlist form-control my-4 animated fadeInUp shadow'>WishList <AiOutlineHeart/></button>
              <button className='buynow form-control animated fadeInUp shadow'>Buy Now <AiOutlineShopping/></button>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='productDetails my-4'>
                <div className='detailsSectionOne'>
                  <h4>Asus Vivobook 15</h4>
                  <button className='btn starButton my-3 shadow'>0 <AiFillStar/></button> (0) <Link to='#'><span className='reviewOption'> | Add Your Review</span></Link>
                  <p>Brand: <span className='brand'> Asus</span> | Sold by: <span className='soldBy'> Beacon Computer</span></p>
                </div>
                
                <div className='detailsSectionTwo'>
                  <p><span className='exactPrice'>৳ 91,490</span> <del className='exPrice'>৳ 96,800</del></p>
                  <p className='coins'>Earn 1645 Club Points</p>
                </div>

                <div className='detailsSectionTwo'>
                  <h6>More Information</h6>
                  <b className='featuresheader'>Brand: </b><span className='featuresnormal'>Asus</span>
                </div>

                <div className='detailsSectionTwo'>
                  <b className='featuresheader'>Color: </b><span className='featuresnormal'>Black</span>
                </div>

                <div className='detailsSectionTwo'>
                  <b className='featuresheader'>Battery mAh: </b><span className='featuresnormal'>63WHrs, 3S1P, 3-cell Li-ion</span>
                </div>

                <div className='detailsSectionTwo'>
                  <b className='featuresheader'>Warranty Information: </b><span className='featuresnormal'>2 Years Brand Warranty</span>
                </div>

                <div className='detailsSectionTwo'>
                <b><h6>Features:</h6></b>
                <div className='featuresElements'>
                <p>Operating System: Windows 11 Home - ASUS recommends Windows 11 Pro for business</p>
                <p>Processor: AMD Ryzen 5 5600H Mobile Processor (6-core/12-thread, 19MB cache, up to 4.2 GHz max boost)</p>
                <p>RAM: 16GB LPDDR4X</p>
                <p>Storage: 512GB M.2 NVMe PCIe 3.0 SSD</p>
                <p>Front Facing Camera: 720p HD</p>
                <p>Touch Panel: Yes</p>
                <p>Panel Size: 14.0-inch</p>
                <p>Backlit: LED Backlit</p>
                <p>SGS Eye Care Display: SGS Eye Care Display</p>
                </div>

                <div className='ratingPoster mt-4'>
                  <img src={ratingPoster} alt='rating poster'/>
                </div>
                <p className='text-center my-3'>Be the first to review this product</p>
              </div>
                
            </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </Fragment>
  )
}

export default ProductDetails
