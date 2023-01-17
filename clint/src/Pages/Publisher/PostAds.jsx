import React, { Fragment } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import '../../Assets/style/PostAds.css'
import { MdPublish } from "react-icons/md";
import { Button } from 'react-bootstrap';
import Footer from '../Footer';

const PostAds = () => {

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
                  <input className='form-control animated fadeInUp' type='text' placeholder='Write Product Name'/>
                </div>
                <div className='features'>
                  <label className='mb-2'>Product Fetures</label>
                  <ReactQuill placeholder='Write Features as point by point for better looking !' className='form-control animated fadeInUp' theme="snow"   />
                </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='allInputs2'>
                
                  <div className='row my-4'>
                      <div className='col-md-6'>
                          <label >Brand</label>
                          <input type='text' className='form-control animated fadeInUp' placeholder='Enter Brand'/>
                      </div>
                      <div className='col-md-6'>
                          <label >Product Price</label>
                          <input type='text' className='form-control animated fadeInUp' placeholder='Enter Price'/>
                      </div>
                  </div>

                  <div className='row'>
                      <div className='col-md-6'>
                          <label >Product Ex-Price</label>
                          <input type='text' className='form-control animated fadeInUp' placeholder='Enter Ex-price'/>
                      </div>
                      <div className='col-md-6'>
                          <label >Product Color</label>
                          <input type='text' className='form-control animated fadeInUp' placeholder='Enter Color'/>
                      </div>
                  </div>

                  <div className='row py-4'>
                      <div className='col-md-12'>
                          <label >Product Battery mAh</label>
                          <input type='text' className='form-control animated fadeInUp' placeholder='Enter Battery mAh'/>
                      </div>
                  </div>

                  <div className='row mb-4'>
                      <div className='col-md-12'>
                          <label >Warranty-Information</label>
                          <input type='text' className='form-control animated fadeInUp' placeholder='Enter Warranty-Information'/>
                      </div>
                  </div>

                  <div className='row'>
                      <div className='col-md-6'>
                      <label >Product Image</label>
                          <input type='file' className='form-control animated fadeInUp'/>
                      </div>
                      <div className='col-md-6'>
                          <label>Product Categories</label>
                          <select className='form-control animated fadeInUp'>
                            <option>Select Categories</option>
                            <option value='laptop'>Laptop</option>
                            <option value='mobile'>Mobile</option>
                            <option value='watch'>Watch</option>
                            <option value='television'>Television</option>
                            <option value='electronics'>Electronics</option>
                            <option value='fashion'>Fashion</option>
                          </select>
                      </div>
                  </div>

                  <div className='row py-4'>
                      <div className='col-md-12'>
                          <Button className='form-control btn btn-warning text-light animated fadeInUp shadow'>Publish <MdPublish/></Button>
                      </div>
                  </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  )
}

export default PostAds
