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
import { CreateCommentRequest, ReadById, ReadCommentsById } from '../APIRequest/APIRequest';
import { RiSendPlaneFill } from "react-icons/ri";
import { ErrorToast, IsEmpty, SuccessToast } from '../Helper/FormHelper';
import ReactPaginate from 'react-paginate';
import { FcClock, FcComments } from "react-icons/fc";

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
    let comment=CommentRef.value;

    if(IsEmpty(comment)){
      ErrorToast("Please Write Comment");
    }else{
      SuccessToast("Please Wait...");
      CreateCommentRequest(id,comment).then((result)=>{

    if(result===true){
      CommentRef.value="";
      GetData();
      SuccessToast("Comment Successfully Added");
    }
    else{
      ErrorToast('Something Went Wrong');
      console.log('something went wrong');
    }
    })
    }
  }




  const [Comment,setComment]=useState([]);

  const [pageNumber,setPageNumber]=useState(0);

  const usersPerPage=5;
  const pagesVisited=pageNumber * usersPerPage
  const displayComments=Comment.slice(pagesVisited,pagesVisited+usersPerPage)
  const pageCount=Math.ceil(Comment.length / usersPerPage);
  const changePage=({selected})=>{
    setPageNumber(selected);
  };

  useEffect(()=>{
    GetData();
    
  },[])

  const GetData=()=>{
    ReadCommentsById(id).then((data)=>{
      setComment(data);
      })
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
                          src: `http://localhost:5000//${product.filePath}`
                      },
                      largeImage: {
                        src: `http://localhost:5000//${product.filePath}`,
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

                <div className='col-md-9 mt-5'>
                      <input ref={(input)=>CommentRef=input} type='text' className='form-control animated fadeInUp shadow commentInput' placeholder='Write Your Comment'/>
                  </div>
                  <div className='col-md-3 mt-5'>
                    <button onClick={OnComment} className='btn btn-primary shadow commentBtn'>Send <RiSendPlaneFill/></button>
                  </div>

                  <div className='allComments mt-3'>
                    <table className='table table-striped table-bordered table-responsive text-center'>
                      <thead>
                        <tr>
                          <th><FcComments/></th>
                          <th><FcClock/></th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                      displayComments.map((value,key)=>
                        <tr key={key}>
                          <td>{value.Comments}</td>
                          <td>{formatDate(new Date(value.createdDate))}</td>
                        </tr>
                        )
                      }
                      </tbody>
                    </table>


                  <div className=''>
                    <ReactPaginate 
                      previousLabel={"previous"}
                      nextLabel={"next"}
                      breakLabel={"..."}
                      pageCount={pageCount}
                      onPageChange={changePage}
                      containerClassName={"pagination justify-content-end"}
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



                  </div>

                </div>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='productDetails my-4'>
                <div className='detailsSectionOne'>
                  <h4>{product.ProductName}</h4>
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


const formatDate = date => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  // const hours = date.getHours();
  // const minutes = date.getMinutes();
  // const seconds = date.getSeconds();
  // const ampm = hours >= 12 ? 'PM' : 'AM';
  // const hours12 = hours % 12 || 12;
  return `${day}-${month}-${year}`; //   ${hours12}:${minutes}:${seconds} ${ampm}
};

export default ProductDetails
