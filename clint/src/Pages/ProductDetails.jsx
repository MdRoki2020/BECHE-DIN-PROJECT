import React, { Fragment, useEffect, useRef, useState } from 'react'
import { AiFillStar,AiOutlineHeart,AiOutlineShopping } from "react-icons/ai";
import '../Assets/style/productDetails.css';
import { Link, useParams } from 'react-router-dom';
import ratingPoster from '../Assets/images/download.svg'
import Footer from './Footer'
import ReactImageMagnify from 'react-image-magnify';
import { BsPatchCheckFill,BsBatteryCharging } from "react-icons/bs";
import { IoColorPaletteSharp } from "react-icons/io5";
import { SiBrandfolder } from "react-icons/si";
import { ReadById } from '../APIRequest/APIRequest';
import { FaComments } from 'react-icons/fa';

const ProductDetails = () => {

  let CommentRef=useRef();

  const [product,setProduct]=useState([]);

  const {id}=useParams();
  console.log(id)

  useEffect(()=>{
    ReadById(id).then((data)=>{

        setProduct(data[0]);

      })
  },[id])

  console.log(product)

  //for comment
  const OnComment=()=>{

  }

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
                          src: `https://bechedin-deploy-production.up.railway.app/${product.filePath}`
                      },
                      largeImage: {
                        src: `https://bechedin-deploy-production.up.railway.app/${product.filePath}`,
                          width: 1200,
                          height: 1800
                      }
                }} />
              </div>
              <button className='wishlist form-control my-4 animated fadeInUp shadow'>WishList <AiOutlineHeart/></button>
              <Link to={'/Shipping/'+product._id}><button className='buynow form-control animated fadeInUp shadow'>Buy Now <AiOutlineShopping/></button></Link>
              </div>

              <div className='ProductComments'>
                <div className='row'>

                <div className='col-md-7 mt-4'>
                      <input ref={(input)=>CommentRef=input} type='text' className='form-control animated fadeInUp' placeholder='Write Your Comment'/>
                  </div>
                  <div className='col-md-5 mt-4'>
                    <button onClick={OnComment} className='btn btn-primary shadow'>Comment <FaComments/></button>
                  </div>

                </div>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='productDetails my-4'>
                <div className='detailsSectionOne'>
                  <h4>Asus Vivobook 15</h4>
                  <button className='btn starButton my-3 shadow'>0 <AiFillStar/></button> (0) <Link to='#'><span className='reviewOption'> | Add Your Review</span></Link>
                  <p>Brand: <span className='brand'> {product.ProductBrand}</span> | Categories: <span className='soldBy'> {product.ProductCategories}</span></p>
                </div>
                
                <div className='detailsSectionTwo'>
                  <p><span className='exactPrice'>৳ {product.ProductPrice}</span> <del className='exPrice'>৳ {product.ProductExPrice}</del></p>
                  <p className='coins'>Earn 1645 Club Points</p>
                </div>

                <div className='detailsSectionTwo'>
                  <h6>More Information</h6>
                  <b className='featuresheader'><SiBrandfolder/> Brand: </b><span className='featuresnormal'>{product.ProductBrand}</span>
                </div>

                <div className='detailsSectionTwo'>
                  <b className='featuresheader'><IoColorPaletteSharp/> Color: </b><span className='featuresnormal'>{product.ProductColor}</span>
                </div>

                <div className='detailsSectionTwo'>
                  <b className='featuresheader'><BsBatteryCharging/> Battery mAh: </b><span className='featuresnormal'>{product.ProductBattery}</span>
                </div>

                <div className='detailsSectionTwo'>
                  <b className='featuresheader'><BsPatchCheckFill/> Warranty Information: </b><span className='featuresnormal'>{product.ProductWarranty}</span>
                </div>

                <div className='detailsSectionTwo'>
                <b><h6>Features:</h6></b>
                <div className='featuresElements'>
                  <p>{product.ProductFetures}</p>
                {/* <p>Operating System: Windows 11 Home - ASUS recommends Windows 11 Pro for business</p>
                <p>Processor: AMD Ryzen 5 5600H Mobile Processor (6-core/12-thread, 19MB cache, up to 4.2 GHz max boost)</p>
                <p>RAM: 16GB LPDDR4X</p>
                <p>Storage: 512GB M.2 NVMe PCIe 3.0 SSD</p>
                <p>Front Facing Camera: 720p HD</p>
                <p>Touch Panel: Yes</p>
                <p>Panel Size: 14.0-inch</p>
                <p>Backlit: LED Backlit</p>
                <p>SGS Eye Care Display: SGS Eye Care Display</p> */}
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
