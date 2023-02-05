import React,{ Fragment, useRef} from 'react'
import { Button } from 'react-bootstrap';
import { MdPublish } from 'react-icons/md';
import FullScreenLoader from '../../common/FullScreenLoader';
import {useNavigate, useParams} from "react-router-dom";
import { UpdateProductRequest } from '../../APIRequest/APIRequest';
import { SuccessToast } from '../../Helper/FormHelper';

const UpdateProduct = () => {
    let navigate = useNavigate ();

    const {id}=useParams();

    let ProductNameRef,ProductFeaturesRef,ProductBrandRef,ProductPriceRef,ProductExPriceRef,ProductColorRef,ProductBatteryRef,WarrantyRef,ProductCategoriesRef,Loader=useRef();

    const OnUpdate=()=>{
        let ProductName=ProductNameRef.value
        let ProductFeatures=ProductFeaturesRef.value
        let ProductBrand=ProductBrandRef.value
        let ProductPrice=ProductPriceRef.value
        let ProductExPrice=ProductExPriceRef.value
        let ProductColor=ProductColorRef.value
        let ProductBattery=ProductBatteryRef.value
        let Warranty=WarrantyRef.value
        let ProductCategories=ProductCategoriesRef.value


      Loader.classList.remove('d-none');

      UpdateProductRequest(id,ProductName,ProductFeatures,ProductBrand,ProductPrice,ProductExPrice,ProductColor,ProductBattery,Warranty,ProductCategories)
     .then((result)=>{

      Loader.classList.add('d-none');

        if(result===true){
          navigate("/PublisherDashboard");
          SuccessToast("Product Updated");

        }else{
            console.log('something went wrong');
        }
    });

    }

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>

            <div className='card shadow posterWrapper animated flipInX mt-3'>
                <div className='row'>
                  <div className='col-sm-3'>
                  <h4><MdPublish/></h4>
                  </div>
                  <div className='col-sm-9'>
                  <h4>Update Ads !</h4>
                  </div>
                </div>
            </div>

            <div className='allInputs1'>
              <div className='productName'>
                  <label >Product Name</label>
                  <input ref={(input)=>ProductNameRef=input} maxlength="15" className='form-control animated fadeInUp' type='text' placeholder='Write Product Name'/>
                </div>
                {/* <div className='features'>
                  <label className='mb-2'>Product Fetures</label>
                  <ReactQuill ref={(input)=>ProductFeaturesRef=input} placeholder='Write Features as point by point for better looking !' className='form-control animated fadeInUp' theme="snow"   />
                </div> */}
                <div className='features'>
                  <label className='mb-2'>Product Fetures</label>
                  <textarea ref={(input)=>ProductFeaturesRef=input} placeholder="Write Your Extra Feature" className='form-control animated fadeInUp' rows="11" cols="50">Roki Vai</textarea>
                </div>
            </div>
          </div>
          <div className='col-md-6'>
              <form enctype="multipart/form-data">
              <div className='allInputs2'>
                
                <div className='row my-4'>
                    <div className='col-md-6'>
                        <label >Brand</label>
                        <input ref={(input)=>ProductBrandRef=input} type='text' className='form-control animated fadeInUp' placeholder='Enter Brand'/>
                    </div>
                    <div className='col-md-6'>
                        <label >Product Price</label>
                        <input ref={(input)=>ProductPriceRef=input} type='text' className='form-control animated fadeInUp' placeholder='Enter Price'/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6'>
                        <label >Product Ex-Price</label>
                        <input ref={(input)=>ProductExPriceRef=input} type='text' className='form-control animated fadeInUp' placeholder='Enter Ex-price'/>
                    </div>
                    <div className='col-md-6'>
                        <label >Product Color</label>
                        <input ref={(input)=>ProductColorRef=input} type='text' className='form-control animated fadeInUp' placeholder='Enter Color'/>
                    </div>
                </div>

                <div className='row py-4'>
                    <div className='col-md-12'>
                        <label >Product Battery mAh</label>
                        <input ref={(input)=>ProductBatteryRef=input} type='text' className='form-control animated fadeInUp' placeholder='Enter Battery mAh'/>
                    </div>
                </div>

                <div className='row mb-4'>
                    <div className='col-md-12'>
                        <label >Warranty-Information</label>
                        <input ref={(input)=>WarrantyRef=input} type='text' className='form-control animated fadeInUp' placeholder='Enter Warranty-Information'/>
                    </div>
                </div>

                <div className='row'>
                    {/* <div className='col-md-6'>
                    <label >Product Image</label>
                        <input ref={(input)=>ImageRef=input} type='file' className='form-control animated fadeInUp'/>
                    </div> */}
                    <div className='col-md-12'>
                        <label>Product Categories</label>
                        <select ref={(input)=>ProductCategoriesRef=input} className='form-control animated fadeInUp'>
                          <option selected>Select Categories</option>
                          <option value="Laptop">Laptop</option>
                          <option value="Mobile">Mobile</option>
                          <option value="Watch">Watch</option>
                          <option value="Television">Television</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Fashion">Fashion</option>
                        </select>
                    </div>
                </div>

                <div className='row py-4'>
                    <div className='col-md-12'>
                        <Button onClick={OnUpdate} className='form-control btn btn-warning text-light animated fadeInUp shadow'>Publish <MdPublish/></Button>
                    </div>
                </div>

          </div>
              </form>
          </div>
        </div>
      </div>

      <div className='d-none' ref={(div)=>Loader=div}>

      <FullScreenLoader />

      </div>
    </Fragment>
  )
}

export default UpdateProduct