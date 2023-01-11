import React, { Fragment, useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { FaShippingFast } from "react-icons/fa";
import '../Assets/style/shipping.css';
import { IoIosArrowDown } from "react-icons/io";
import Footer from './Footer';


const Shipping = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
        <section>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8'>
                  <div className='card shadow posterWrapper animated flipInX mt-3 mb-3'>
                    <div className='row'>
                      <div className='col-sm-3'>
                      <h4><FaShippingFast/></h4>
                      </div>
                      <div className='col-sm-9'>
                      <h4>Shipping !</h4>
                      </div>
                    </div>
                  </div>

                  <div className='card shippingComponents px-3 mb-3'>

                  <div className='row my-4'>
                      <div className='col-md-6'>
                          <label >First Name</label>
                          <input type='text' className='form-control animated fadeInUp' placeholder='Enter First Name'/>
                      </div>
                      <div className='col-md-6'>
                          <label >Last Name</label>
                          <input type='text' className='form-control animated fadeInUp' placeholder='Enter Last Name'/>
                      </div>
                  </div>

                  <div className='row'>
                      <div className='col-md-6'>
                          <label >Contact Number</label>
                          <input type='text' className='form-control animated fadeInUp' placeholder='Enter Contact Number'/>
                      </div>
                      <div className='col-md-6'>
                          <label >Address</label>
                          <input type='text' className='form-control animated fadeInUp' placeholder='Enter H. no, R.no,block/sector'/>
                      </div>
                  </div>

                  <div className='row py-4'>
                      <div className='col-md-12'>
                          <label >Division</label>
                          <select className='form-control animated fadeInUp' placeholder='Select Division'>
                            <option>Select Division</option>
                            <option>Barisal</option>
                            <option>Chittagong</option>
                            <option>Dhaka</option>
                            <option>Khulna</option>
                            <option>Mymensingh</option>
                            <option>Rajshahi</option>
                            <option>Rangpur</option>
                            <option>Sylhet</option>
                          </select>
                      </div>
                  </div>

                  <div className='row mb-4'>
                      <div className='col-md-6'>
                          <label >District</label>
                          <input type='text' className='form-control animated fadeInUp' placeholder='Enter Home District'/>
                      </div>
                      <div className='col-md-6'>
                      <label >Thana</label>
                          <input type='text' className='form-control animated fadeInUp' placeholder='Enter Thana'/>
                      </div>

                  </div>

                  <div className='row mb-4'>
                      <div className='col-md-6'>
                        <label >Transaction ID</label>
                        <input type='text' className='form-control animated fadeInUp' placeholder='Enter Transaction ID'/>
                        
                      </div>
                      <div className='col-md-6'>
                          <Button className='py-3 conformButton form-control animated fadeInUp shadow'>Conform <FaShippingFast/></Button>
                      </div>
                  </div>


                  </div>
                </div>
                <div className='col-md-4'>

                    <div className='summeryWrapper card mt-3 px-3 py-4'>

                    <div className='orderSummery'>
                      <h2>Order Summary</h2>
                    </div>

                    <div className='discountOption'>
                      <p
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                      >
                        Apply Discount Code <IoIosArrowDown />
                      </p>

                      <Collapse in={open}>
                        <div id="example-collapse-text">
                          <input className='form-control animated fadeInUp' placeholder='Apply Voucher Code'/>
                          <button className='applyButton shadow form-control mt-2'>Apply</button>
                        </div>
                      </Collapse>
                    </div>

                    <div className='cartSubTotal'>
                      <b>Cart SubTotal</b>
                      <table className='subTotalTable table table-striped table-hover table-bordered table-responsive'>
                        <tbody>
                          <tr>
                            <td>Subtotal</td>
                            <td>৳ 251,990</td>
                          </tr>
                          <tr>
                            <td>Shipping</td>
                            <td>৳ 250</td>
                          </tr>
                          <th>Total</th>
                          <th className='animated fadeInUp'>৳ 25,2240</th>
                        </tbody>
                      </table>
                    </div>

                    <div className='payment'>
                      <strong>Bkash Number:</strong> <span>017xxxxxxxx</span>
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

export default Shipping
