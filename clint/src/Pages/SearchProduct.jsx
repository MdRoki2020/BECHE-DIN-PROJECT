import React, { Fragment, useRef, useState } from 'react'
import allAds from '../Assets/images/allAds.jpg'
import { AiTwotoneEnvironment } from "react-icons/ai"
import { BsCartPlus,BsEmojiLaughing,BsSearch } from "react-icons/bs";
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { Button } from 'react-bootstrap';
import { ProductSearchRequest } from '../APIRequest/APIRequest';
import { ErrorToast, IsEmpty, SuccessToast } from '../Helper/FormHelper';



const SearchProduct = () => {

  let ProductSearchRef=useRef(); //, LaptopRefRef,MobileRef,WatchRef,ElectronicsRef

  const [pageNumber,setPageNumber]=useState(0);
  const [product,setProduct]=useState([]);
  const [searchProduct,SetSearchProduct]=useState("");

  const usersPerPage=18;
  const pagesVisited=pageNumber * usersPerPage
  const displayProduct=product.slice(pagesVisited,pagesVisited+usersPerPage)
  const pageCount=Math.ceil(product.length / usersPerPage);
  const changePage=({selected})=>{
    setPageNumber(selected);
  };


//search request
  const GetSearchValue=()=>{
    let search=ProductSearchRef.value;
    // let laptop=LaptopRefRef.value;
    // let mobile=MobileRef.value;
    // let watch=WatchRef.value;
    // let electronics=ElectronicsRef.value;
    

    if(IsEmpty(search)){
      ErrorToast("Search Value Required");
    }else{
      ProductSearchRequest(search).then((data)=>{   //,laptop,mobile,watch,electronics
        if(IsEmpty(data)){
          ErrorToast("Not Found")
        }else{
          setProduct(data);
        }
      })

    }
    
  }

  if(searchProduct){
    ProductSearchRequest(searchProduct).then((data)=>{
      // SuccessToast("done");
        setProduct(data);
    })
  }

  // else if(IsEmpty(searchProduct)){
  //   ErrorToast("Espect Valid Keyword");
  // }else{
  // }



  //collapse



  return (
    <Fragment>
  <section>

  <div className='container'>
    <div className='row'>
    <div className='col-md-12'>
        <div className='card posterWrapper animated flipInX my-4'>
          <div className='row'>

              <div className='col-sm-2'>
                <img className='poster' src={allAds} alt='headerLaptop'/>
              </div>
              <div className='col-sm-4'>
                <div className='posterText'>
                  <h2>What Are You Want! Search Me <BsEmojiLaughing /></h2>
                  <p><AiTwotoneEnvironment/> All Bangladesh !</p>
                  <input ref={(input)=>ProductSearchRef=input} className='searchDistrict shadow' placeholder='What Are You Want' /> <Button onClick={GetSearchValue} className='btn btn-info shadow'><BsSearch/></Button>
                  {/* <p>{searchProduct}</p> */}
                </div>
              </div>
              <div className='col-sm-2'>
                <div className='BrandCheckBoxSearch'>

                  <span>BRAND</span>
                  <div className="form-check">
                  <input onClick={(e)=>SetSearchProduct(e.target.value)} className="form-check-input" type="checkbox" value="apple" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">Apple</label>
                  </div>
                  <div className="form-check">
                    <input onClick={(e)=>SetSearchProduct(e.target.value)} className="form-check-input" type="checkbox" value="asus" id="flexCheckChecked" />
                    <label className="form-check-label" for="flexCheckChecked">Asus</label>
                  </div>
                  <div className="form-check">
                    <input onClick={(e)=>SetSearchProduct(e.target.value)} className="form-check-input" type="checkbox" value="samsung" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">Samsung</label>
                  </div>
                  <div class="form-check">
                    <input onClick={(e)=>SetSearchProduct(e.target.value)} className="form-check-input" type="checkbox" value="walton" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">Walton</label>
                  </div>

                </div>
              </div>

              <div className='col-sm-2'>
                <div className='CategoriesCheckBoxSearch'>

                  <span>CATEGORIES</span>


                  <div className="form-check">
                  <input onClick={(e)=>SetSearchProduct(e.target.value)} className="form-check-input" type="checkbox" value="laptop" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">Laptop</label>
                  </div>
                  <div className="form-check">
                    <input onClick={(e)=>SetSearchProduct(e.target.value)}  className="form-check-input" type="checkbox" value="mobile" id="flexCheckChecked" />
                    <label className="form-check-label" for="flexCheckChecked">Mobile</label>
                  </div>
                  <div className="form-check">
                    <input onClick={(e)=>SetSearchProduct(e.target.value)} className="form-check-input" type="checkbox" value="watch" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">Watch</label>
                  </div>
                  <div className="form-check">
                    <input onClick={(e)=>SetSearchProduct(e.target.value)} className="form-check-input" type="checkbox" value="electronics" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">Electronics</label>
                  </div>


                </div>
              </div>

              <div className='col-sm-2'>
                <div className='PriceCheckBoxSearch'>

                  <span>PRICE RANGE</span>
                  <input type="range" className="form-range" id="customRange2" />
                </div>

                <button className='everythingSearch btn btn-info shadow'><BsSearch/></button>
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
            <div className='allItems animated zoomIn mb-3 '>
              <div class="card">
                <img className="card-img-top" src={`https://bechedin-deploy-production.up.railway.app/${value.filePath}`} alt="laptop" />
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

export default SearchProduct
