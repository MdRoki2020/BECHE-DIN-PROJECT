import React, { Fragment } from 'react'
import { ImFinder } from "react-icons/im";
import { AiOutlineFileSearch } from "react-icons/ai";
import laptop from '../../Assets/images/laptop.jpg'
import '../../Assets/style/findOut.css'
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
                            <h2><ImFinder/></h2>
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
                        <td className='animated fadeInUp'>6dg796ewd</td>
                        </tr>
                        <tr>
                        <th>Product Name</th>
                        <td className='animated fadeInUp'>Vivibook 15</td>
                        </tr>
                        <tr>
                        <th>Product Category</th>
                        <td className='animated fadeInUp'>Laptop</td>
                        </tr>
                        <tr>
                        <th>Clint Number</th>
                        <td className='animated fadeInUp'>01717453205</td>
                        </tr>
                        <tr>
                        <th>Clint Division</th>
                        <td className='animated fadeInUp'>Rangpur</td>
                        </tr>
                        <tr>
                        <th>Clint District</th>
                        <td className='animated fadeInUp'>Nilphamri</td>
                        </tr>
                        <tr>
                        <th>Clint Thana</th>
                        <td className='animated fadeInUp'>Kishorgonj</td>
                        </tr>
                        <tr>
                        <th>Clint Address</th>
                        <td className='animated fadeInUp'>pushna</td>
                        </tr>
                        <tr>
                        <th>Order Time</th>
                        <td className='animated fadeInUp'>1-12-23</td>
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
                        <td className='animated fadeInUp'>6dg796ewd</td>
                        </tr>
                        <tr>
                        <th>Product Name</th>
                        <td className='animated fadeInUp'>Vivibook 15</td>
                        </tr>
                        <tr>
                        <th>Brand</th>
                        <td className='animated fadeInUp'>ASUS</td>
                        </tr>
                        <tr>
                        <th>Product Price</th>
                        <td className='animated tada text-danger'>67,000 BDT</td>
                        </tr>
                        <tr>
                        <th>Ex-Price</th>
                        <td className='animated fadeInUp'><del>70,500</del> BDT</td>
                        </tr>
                        <tr>
                        <th>Product Color</th>
                        <td className='animated fadeInUp'>Silver</td>
                        </tr>
                        <tr>
                        <th>Product Battery mAh</th>
                        <td className='animated fadeInUp'>10,000 mAh</td>
                        </tr>
                        <tr>
                        <th>Warranty-Information</th>
                        <td className='animated fadeInUp'>2 years</td>
                        </tr>
                        <tr>
                        <th>Product Author</th>
                        <td className='animated fadeInUp'>Walton Company</td>
                        </tr>   
                    </tbody>
                </table>
                        <div className='productImage text-center mb-3'>
                            <h4>Product Image</h4>
                            <img className='center animated fadeInUp img-thumbnail img-fluid rounded' src={laptop} alt="laptop"/>
                        </div>
            </div>
            <div className='col-md-4'></div>
        </div>
        </div>

        <Footer />

    </Fragment>
  )
}

export default FindOut
