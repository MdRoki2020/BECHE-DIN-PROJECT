import React, { Fragment, useEffect, useRef, useState } from 'react'
import { ImFinder } from "react-icons/im";
import { AiOutlineFileSearch } from "react-icons/ai";
import '../../Assets/style/findOut.css'
import Footer from '../Footer';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { generateVoucherCode, ReadOrderByTransactionId, ReadProductsById, ShowVoucherCode } from '../../APIRequest/APIRequest';
import { ErrorToast, IsEmpty, SuccessToast } from '../../Helper/FormHelper';
import Swal from 'sweetalert2';

const FindOut = () => {

    const [details,setDetails]=useState([]);
    const [Productdetails,setProductDetails]=useState([]);
    const [vaucher,setVoucher]=useState([]);

    let TransactionIdRef=useRef();
    let ProductIdRef=useRef();
    let voucherRef=useRef();


    //details from transaction id
    const show=()=>{
        let TransactionId=TransactionIdRef.value;
  
        if(IsEmpty(TransactionId)){
          ErrorToast("Transaction ID Required");
        }else{
          ReadOrderByTransactionId(TransactionId).then((data)=>{
            setDetails(data[0]);
          })
        }
      }


      //details from product id
      const ShowProduct=()=>{
        let ProductId=ProductIdRef.value;
  
        if(IsEmpty(ProductId)){
          ErrorToast("Product ID Required");
        }else{
          ReadProductsById(ProductId).then((data)=>{
            setProductDetails(data[0]);
          })
        }
      }


      //for generate voucher
      const generateVoucher=()=>{
        let voucher=voucherRef.value;
  
        if(IsEmpty(voucher)){
          ErrorToast("Product ID Required");
        }else{
            SuccessToast("Please Wait...")
          generateVoucherCode(voucher).then((result)=>{
            if(result===true){
                voucherRef.value="";
                success();
            }else{
                ErrorToast("Something Went Wrong")
            }
          })
        }
      }

      const success=()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Code Generate Done !',
            showConfirmButton: false,
            timer: 1500
          })
    }


    //show voucher
    useEffect(()=>{
        getCode();
      },[]);

      const getCode=()=>{
        ShowVoucherCode().then((data)=>{
            setVoucher(data);
        })
      }
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
                <input ref={(input)=>TransactionIdRef=input} className='form-control animated fadeInUp' placeholder='Write Transaction ID'/>
                <button onClick={show} className='btn btn-warning mt-1 shadow'>Show Details <AiOutlineFileSearch/></button>

                <table className='subTotalTable table table-striped table-hover table-bordered table-responsive'>
                    <tbody>
                        <tr>
                        <th>Product Id</th>
                        <td className='animated fadeInUp'>{details.ProductId}</td>
                        </tr>
                        <tr>
                        <th>Product Name</th>
                        <td className='animated fadeInUp'>{details.ProductName}</td>
                        </tr>
                        <tr>
                        <th>Product Category</th>
                        <td className='animated fadeInUp'>{details.ProductCategories}</td>
                        </tr>
                        <tr>
                        <th>Clint Name</th>
                        <td className='animated fadeInUp'>{details.FirstName}</td>
                        </tr>
                        <tr>
                        <th>Clint Number</th>
                        <td className='animated fadeInUp'>{details.ContactNumber}</td>
                        </tr>
                        <tr>
                        <th>Clint Division</th>
                        <td className='animated fadeInUp'>{details.Division}</td>
                        </tr>
                        <tr>
                        <th>Clint District</th>
                        <td className='animated fadeInUp'>{details.District}</td>
                        </tr>
                        <tr>
                        <th>Clint Thana</th>
                        <td className='animated fadeInUp'>{details.Thana}</td>
                        </tr>
                        <tr>
                        <th>Clint Address</th>
                        <td className='animated fadeInUp'>{details.Address}</td>
                        </tr>
                        <tr>
                        <th>Order Time</th>
                        <td className='animated fadeInUp'>{details.CreatedDate}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div className='col-md-4'>
                <label>Product ID</label>
                <input ref={(input)=>ProductIdRef=input} className='form-control animated fadeInUp' placeholder='Write Product ID'/>
                <button onClick={ShowProduct} className='btn btn-warning mt-1 shadow'>Show Details <AiOutlineFileSearch/></button>
                <table className='subTotalTable table table-striped table-hover table-bordered table-responsive'>
                    <tbody>
                        <tr>
                        <th>Product Id</th>
                        <td className='animated fadeInUp'>{Productdetails._id}</td>
                        </tr>
                        <tr>
                        <th>Product Name</th>
                        <td className='animated fadeInUp'>{Productdetails.ProductName}</td>
                        </tr>
                        <tr>
                        <th>Brand</th>
                        <td className='animated fadeInUp'>{Productdetails.ProductBrand}</td>
                        </tr>
                        <tr>
                        <th>Product Price</th>
                        <td className='animated tada text-danger'>{Productdetails.ProductPrice} BDT</td>
                        </tr>
                        <tr>
                        <th>Ex-Price</th>
                        <td className='animated fadeInUp'><del>{Productdetails.ProductExPrice}</del> BDT</td>
                        </tr>
                        <tr>
                        <th>Product Color</th>
                        <td className='animated fadeInUp'>{Productdetails.ProductColor}</td>
                        </tr>
                        <tr>
                        <th>Product Battery mAh</th>
                        <td className='animated fadeInUp'>{Productdetails.ProductBattery} mAh</td>
                        </tr>
                        <tr>
                        <th>Warranty-Information</th>
                        <td className='animated fadeInUp'>{Productdetails.ProductWarranty}</td>
                        </tr>
                        <tr>
                        <th>Categories</th>
                        <td className='animated fadeInUp'>{Productdetails.ProductCategories}</td>
                        </tr>
                        <tr>
                        <th>Product Owner</th>
                        <td className='animated fadeInUp'>{Productdetails.PublisherEmail}</td>
                        </tr> 
                    </tbody>
                </table>
                    <div className='productImage text-center mb-3'>
                        <h4>Product Image</h4>
                        <img className='center animated fadeInUp img-thumbnail img-fluid rounded' src={`http://localhost:5000/${Productdetails.filePath}`} alt="Product"/>
                    </div>
            </div>
            <div className='col-md-4'>
                <div className='voucherCode'>
                <label>Generate Voucher Code</label>
                <input ref={(input)=>voucherRef=input} className='form-control animated fadeInUp' placeholder='Generate Voucher Code'/>
                <button onClick={generateVoucher} className='applyButton shadow form-control mt-2'>Generate</button>
                </div>
                <table className='subTotalTable table table-striped table-hover table-bordered table-responsive'>
                    <tbody>
                        {
                            vaucher.map((value,key)=>
                            <tr>
                            <th>Available Voucher</th>
                            <td className='text-success'>{value.VoucherCode}</td>
                            <td className='animated fadeInUp'><span className='text-danger'><RiDeleteBin6Line/></span></td>
                            </tr>
                            )
                        }

                    {/* <tr>
                        <th>Voucher Code</th>
                        <td className='animated fadeInUp text-info'>Depend Admin</td>
                        <td className='animated fadeInUp'><span className='text-danger'><RiDeleteBin6Line/></span></td>
                    </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
        </div>

        <Footer />

    </Fragment>
  )
}

export default FindOut
