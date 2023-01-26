import React, { Fragment, useRef, useState } from 'react'
import allAds from '../Assets/images/allAds.jpg'
import { AiTwotoneEnvironment,AiOutlineSearch } from "react-icons/ai"
import { BsCartPlus,BsEmojiLaughing } from "react-icons/bs";
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { Button } from 'react-bootstrap';
import { ProductSearchRequest } from '../APIRequest/APIRequest';
import { ErrorToast, IsEmpty } from '../Helper/FormHelper';


const SearchProduct = () => {

  let ProductSearchRef=useRef();

//   const [product,setProduct]=useState([]);
  const [pageNumber,setPageNumber]=useState(0);
  const [searchProduct,setSearchProduct]=useState([]);

  const usersPerPage=18;
  const pagesVisited=pageNumber * usersPerPage
  const displayProduct=searchProduct.slice(pagesVisited,pagesVisited+usersPerPage)
  const pageCount=Math.ceil(searchProduct.length / usersPerPage);
  const changePage=({selected})=>{
    setPageNumber(selected);
  };

//   useEffect(()=>{
//     AllADs().then((data)=>{

//       setProduct(data);

//       })
//   },[])



//search request
  const GetSearchValue=()=>{
    let search=ProductSearchRef.value;

    if(IsEmpty(search)){
      ErrorToast("Search Value Required");
    }else{

      ProductSearchRequest(search).then((data)=>{
        setSearchProduct(data);
      })

    }
    
  }

//   console.log(searchProduct);


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
              <h2>What Are You Want ! Please Search <BsEmojiLaughing /></h2>
              <p><AiTwotoneEnvironment/> All Bangladesh !</p>
              <input ref={(input)=>ProductSearchRef=input} className='rounded-pill searchDistrict shadow' placeholder='What Are You Want' /> <Button onClick={GetSearchValue} className='btn btn-warning shadow'><AiOutlineSearch/></Button>
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
