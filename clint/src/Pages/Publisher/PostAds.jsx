import React, { Fragment, useRef } from 'react'
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import '../../Assets/style/PostAds.css'
import { MdPublish } from "react-icons/md";
import { Button } from 'react-bootstrap';
import { ErrorToast, IsEmpty } from '../../Helper/FormHelper';
import Swal from 'sweetalert2';
import FullScreenLoader from '../../common/FullScreenLoader';
import { getUserDetails } from '../../Helper/SessionHelperPublisher';
import { PostADsRequest } from '../../APIRequest/APIRequest';

const PostAds = () => {

  let PublisherEmail=getUserDetails()['Email'];

  let ProductNameRef,ProductFeaturesRef,ProductBrandRef,ProductPriceRef,ProductExPriceRef,ProductColorRef,ProductBatteryRef,WarrantyRef,ImageRef,ProductCategoriesRef,Loader=useRef();
 
  const OnPost=()=>{
  let ProductName=ProductNameRef.value;
  let ProductFetures=ProductFeaturesRef.value;
  let ProductBrand=ProductBrandRef.value;
  let ProductPrice=ProductPriceRef.value;
  let ProductExPrice=ProductExPriceRef.value;
  let ProductColor=ProductColorRef.value;
  let ProductBattery=ProductBatteryRef.value;
  let ProductWarranty=WarrantyRef.value;
  let Image=ImageRef.files[0];
  let ProductCategories=ProductCategoriesRef.value;
  
  if(IsEmpty(ProductName)){
      ErrorToast("First Name Required");
    }
    else if(IsEmpty(ProductFetures)){
      ErrorToast("Product Features Required");
    }
    else if(IsEmpty(ProductBrand)){
      ErrorToast("Product Brand Required");
    }
    else if(IsEmpty(ProductPrice)){
      ErrorToast("Price Required");
    }
    else if(IsEmpty(ProductExPrice)){
      ErrorToast("Product Ex-Price Required");
    }
    else if(IsEmpty(ProductColor)){
      ErrorToast("Product Color Required");
    }
    else if(IsEmpty(ProductBattery)){
      ErrorToast("Battery Required");
    }
    else if(IsEmpty(ProductWarranty)){
      ErrorToast("Warrenty Required");
    }
    else if(IsEmpty(Image)){
      ErrorToast("Image Required");
    }
    else if(IsEmpty(ProductCategories)){
      ErrorToast("Product Categories Required");
    }else{

      Loader.classList.remove('d-none');

      const formData=new FormData();
      formData.append('file',Image);
      formData.append('PublisherEmail',PublisherEmail);
      formData.append('ProductName',ProductName);
      formData.append('ProductBrand',ProductBrand);
      formData.append('ProductPrice',ProductPrice);
      formData.append('ProductExPrice',ProductExPrice);
      formData.append('ProductColor',ProductColor);
      formData.append('ProductBattery',ProductBattery);
      formData.append('ProductWarranty',ProductWarranty);
      formData.append('ProductCategories',ProductCategories);
      formData.append('ProductFetures',ProductFetures)

    PostADsRequest(formData).then((result)=>{
      
      if(result===true){
        Loader.classList.add('d-none');

        ProductNameRef.value="";
        ProductFeaturesRef.value="";
        ProductBrandRef.value="";
        ProductPriceRef.value="";
        ProductExPriceRef.value="";
        ProductColorRef.value="";
        ProductBatteryRef.value="";
        WarrantyRef.value="";
        ImageRef.value="";
        ProductCategoriesRef.value="";

        success();

      }
      else{
      Loader.classList.add('d-none');
      ErrorToast('Something Went Wrong');
      console.log('something went wrong');
      }
    })

    }
  }

    const success=()=>{
      Swal.fire(
        'Successfully Added !',
        'You clicked the button!',
        'success'
      )
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
                  <h4>Post Ads !</h4>
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
                  <textarea ref={(input)=>ProductFeaturesRef=input} placeholder="Write Your Extra Features" className='form-control animated fadeInUp' rows="11" cols="50"></textarea>
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
                    <div className='col-md-6'>
                    <label >Product Image</label>
                        <input ref={(input)=>ImageRef=input} type='file' className='form-control animated fadeInUp'/>
                    </div>
                    <div className='col-md-6'>
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
                        <Button onClick={OnPost} className='form-control btn btn-warning text-light animated fadeInUp shadow'>Publish <MdPublish/></Button>
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

export default PostAds
