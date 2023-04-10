import React, { Fragment, useEffect, useRef, useState } from 'react'
import allAds from '../Assets/images/allAds.jpg'
import { AiTwotoneEnvironment } from "react-icons/ai"
import { BsCartPlus,BsEmojiLaughing,BsSearch } from "react-icons/bs";
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { Button } from 'react-bootstrap';
import { ProductSearchRequest } from '../APIRequest/APIRequest';
import { ErrorToast, IsEmpty } from '../Helper/FormHelper';
import Axios from 'axios';



const SearchProduct = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const resultsPerPage = 18;
  const pagesVisited=pageNumber * resultsPerPage
  const displayProduct=searchResults.slice(pagesVisited,pagesVisited+resultsPerPage)

  useEffect(() => {
    const fetchSearchResults =  () => {
      try {

        ProductSearchRequest(searchTerm).then((data)=>{

            setSearchResults(data);

          })
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm.length > 0) {
      fetchSearchResults();
    } else {
      fetchSearchResults();
    }
  }, [searchTerm]);

  const pageCount = Math.ceil(searchResults.length / resultsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };






//search request
  // const GetSearchValue=()=>{
  //   let search=ProductSearchRef.value;
    

  //   if(IsEmpty(search)){
  //     ErrorToast("Search Value Required");
  //   }else{
  //     ProductSearchRequest(search).then((data)=>{
  //       if(IsEmpty(data)){
  //         ErrorToast("Not Found")
  //       }else{
  //         setProduct(data);
  //         console.log(product);
  //       }
  //     })
  //   }
  // }

  // if(searchProduct){
  //   ProductSearchRequest(searchProduct).then((data)=>{
  //     // SuccessToast("done");
  //       setProduct(data);
  //   })
  // }









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
                  <input type='text' onChange={handleInputChange} value={searchTerm} className='searchDistrict shadow' placeholder='What Are You Want' />
                  
                </div>
              </div>
              <div className='col-sm-2'>
                <div className='BrandCheckBoxSearch'>

                  <span>BRAND</span>
                  <div className="form-check">
                  <input  className="form-check-input" type="checkbox" value="apple" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">Apple</label>
                  </div>
                  <div className="form-check">
                    <input  className="form-check-input" type="checkbox" value="asus" id="flexCheckChecked" />
                    <label className="form-check-label" for="flexCheckChecked">Asus</label>
                  </div>
                  <div className="form-check">
                    <input  className="form-check-input" type="checkbox" value="samsung" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">Samsung</label>
                  </div>
                  <div class="form-check">
                    <input  className="form-check-input" type="checkbox" value="walton" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">Walton</label>
                  </div>

                </div>
              </div>

              <div className='col-sm-2'>
                <div className='CategoriesCheckBoxSearch'>

                  <span>CATEGORIES</span>


                  <div className="form-check">
                  <input  className="form-check-input" type="checkbox" value="laptop" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">Laptop</label>
                  </div>
                  <div className="form-check">
                    <input   className="form-check-input" type="checkbox" value="mobile" id="flexCheckChecked" />
                    <label className="form-check-label" for="flexCheckChecked">Mobile</label>
                  </div>
                  <div className="form-check">
                    <input  className="form-check-input" type="checkbox" value="watch" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">Watch</label>
                  </div>
                  <div className="form-check">
                    <input  className="form-check-input" type="checkbox" value="electronics" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">Electronics</label>
                  </div>


                </div>
              </div>

              <div className='col-sm-2'>
                <div className='PriceCheckBoxSearch'>


                  <label htmlFor="priceRange">Price Range:</label>
                  <input
                    type="range"
                    id="priceRange"
                    name="priceRange"
                    min="0"
                    max="100000"
                    
                    
                    
                  />
                  <input
                    type="range"
                    id="priceRange"
                    name="priceRange"
                    min="0"
                    max="100000"
                    
                    
                    
                  />

                  <br/><button  className='everythingSearch btn btn-info shadow'><BsSearch/></button>


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

              {displayProduct.map((value,key) =>
                
                <div className='col-md-2 d-block d-lg-flex'>
                  <Link to={'/productDetails/'+value._id}>
                      <div className='allItems animated zoomIn mb-3 '>
                        <div class="card">
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
              )}
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
