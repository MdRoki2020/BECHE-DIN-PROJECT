import React, { Fragment } from 'react'
import { MdOutlineFindInPage } from "react-icons/md";
import { AiOutlineFileSearch } from "react-icons/ai";
import laptop from '../../Assets/images/laptop.jpg'
import Footer from '../Footer';

const FindOut = () => {
  return (
    <Fragment>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card posterWrapper animated flipInX my-3'>
                        <div className='row'>
                            <div className='col-sm-3'>
                            <h2><MdOutlineFindInPage/></h2>
                            </div>
                            <div className='col-sm-9'>
                            <div className='posterText'>
                            <h2>Find Out Details !</h2>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <div className='row'>
            <div className='col-md-4'>
                <label>Transaction ID</label>
                <input className='form-control animated fadeInUp' placeholder='Write Transaction ID'/>
                <button className='btn btn-warning mt-1'>Show Details <AiOutlineFileSearch/></button>

                <table className='subTotalTable table table-striped table-hover table-bordered table-responsive'>
                    <tbody>
                        <tr>
                        <th>Product Id</th>
                        <td>6dg796ewd</td>
                        </tr>
                        <tr>
                        <th>Product Name</th>
                        <td>Vivibook 15</td>
                        </tr>
                        <tr>
                        <th>Product Category</th>
                        <td>Laptop</td>
                        </tr>
                        <tr>
                        <th>Clint Number</th>
                        <td>01717453205</td>
                        </tr>
                        <tr>
                        <th>Clint Division</th>
                        <td>Rangpur</td>
                        </tr>
                        <tr>
                        <th>Clint District</th>
                        <td>Nilphamri</td>
                        </tr>
                        <tr>
                        <th>Clint Thana</th>
                        <td>Kishorgonj</td>
                        </tr>
                        <tr>
                        <th>Clint Address</th>
                        <td>pushna</td>
                        </tr>
                        <tr>
                        <th>Order Time</th>
                        <td>1-12-23</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div className='col-md-4'>
                <label>Product ID</label>
                <input className='form-control animated fadeInUp' placeholder='Write Product ID'/>
                <button className='btn btn-warning mt-1'>Show Details <AiOutlineFileSearch/></button>
                <table className='subTotalTable table table-striped table-hover table-bordered table-responsive'>
                    <tbody>
                        <tr>
                        <th>Product Id</th>
                        <td>6dg796ewd</td>
                        </tr>
                        <tr>
                        <th>Product Name</th>
                        <td>Vivibook 15</td>
                        </tr>
                        <tr>
                        <th>Brand</th>
                        <td>ASUS</td>
                        </tr>
                        <tr>
                        <th>Product Price</th>
                        <td>67,000 BDT</td>
                        </tr>
                        <tr>
                        <th>Product Color</th>
                        <td>Silver</td>
                        </tr>
                        <tr>
                        <th>Product Battery mAh</th>
                        <td>10,000 mAh</td>
                        </tr>
                        <tr>
                        <th>Warranty-Information</th>
                        <td>2 years</td>
                        </tr>
                        <tr>
                        <th>Product Author</th>
                        <td>Walton Company</td>
                        </tr>
                        <tr>
                        <th>Product Image</th>
                        <td><img src={laptop} alt="laptop" width="110"/></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div className='col-md-4'></div>
        </div>
        </div>

        <Footer />

    </Fragment>
  )
}

export default FindOut
