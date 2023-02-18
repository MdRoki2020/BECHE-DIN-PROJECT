import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { FaShippingFast } from "react-icons/fa";
import '../Assets/style/shipping.css';
import { IoIosArrowDown } from "react-icons/io";
import Footer from './Footer';
import { OrderRequest, ReadById, ShowVoucherCode } from '../APIRequest/APIRequest';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ErrorToast, IsEmpty, SuccessToast } from '../Helper/FormHelper';


const Shipping = () => {
  const [open, setOpen] = useState(false);
  const [product,setProduct]=useState([]);
  const [voucher,setVoucher]=useState([]);
  

  const {id}=useParams();

  useEffect(()=>{
    getProductDetails();
    GetVoucherCode();
  },[id])


  const getProductDetails=()=>{
    ReadById(id).then((data)=>{
      setProduct(data[0]);
    })
  }
  
  const GetVoucherCode=()=>{
    ShowVoucherCode().then((data)=>{
      setVoucher(data[0]);
    })
  }

  console.log(voucher.VoucherCode);

  let FirstNameRef,LastNameRef,ContactNumberRef,AddressRef,DivisionRef,DistrictRef,ThanaRef,TransactionRef=useRef();
  let UserApplyVoucherRef=useRef();

  let productName=product.ProductName
  let ProductCategories=product.ProductCategories
  let ProductId=product._id

  let ProductPrice=parseFloat(product.ProductPrice);
  var TotalPrice=ProductPrice+250;


  const [totalValue,setTotalValue]=useState(TotalPrice);

  if(!isNaN(totalValue)){
    setTotalValue(TotalPrice);
  }else{
    setTotalValue(TotalPrice);
  }


  const OnOrder=()=>{

    let FirstName=FirstNameRef.value;
    let LastName=LastNameRef.value;
    let ContactNumber=ContactNumberRef.value;
    let Address=AddressRef.value;
    let Division=DivisionRef.value;
    let District=DistrictRef.value;
    let Thana=ThanaRef.value;
    let Transaction=TransactionRef.value;

    if(IsEmpty(FirstName)){
        ErrorToast("First Name Required");
      }
      else if(IsEmpty(LastName)){
        ErrorToast("Last Name Required");
      }
      else if(IsEmpty(ContactNumber)){
        ErrorToast("Contact Number Required");
      }
      else if(IsEmpty(Address)){
        ErrorToast("Address Required");
      }
      else if(IsEmpty(Division)){
        ErrorToast("Division Required");
      }
      else if(IsEmpty(District)){
        ErrorToast("District Required");
      }
      else if(IsEmpty(Thana)){
        ErrorToast("Thana Required");
      }
      else if(IsEmpty(Transaction)){
        ErrorToast("Transaction Id Required");
      }else{

    SuccessToast("Please Wait...");
    OrderRequest(ProductCategories,ProductId,productName,FirstName,LastName,ContactNumber,Address,Division,District,Thana,Transaction).then((result)=>{
    if(result===true){
      FirstNameRef.value="";
      LastNameRef.value="";
      ContactNumberRef.value="";
      AddressRef.value="";
      DivisionRef.value="";
      DistrictRef.value="";
      ThanaRef.value="";
      TransactionRef.value="";

      success();

    }
    else{

      ErrorToast('Something Went Wrong');
      console.log('something went wrong');

    }
  })

    }
}


//voucher handle
const OnVoucher=()=>{
  let userVoucher=UserApplyVoucherRef.value;
  if(IsEmpty(userVoucher)){
    ErrorToast("Please Apply Voucher");
  }else{
    // console.log(userVoucher);
    if(userVoucher==voucher.VoucherCode){

      setTotalValue(TotalPrice - 100);

      console.log("yes match");

    }else{

      setTotalValue(TotalPrice);

      ErrorToast("didn't match");
    }
  }
}

console.log(totalValue);






const success=()=>{
  Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'We Received Your Order',
      showConfirmButton: false,
      timer: 1500
    })
}



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
                          <input ref={(input)=>FirstNameRef=input} type='text' className='form-control animated fadeInUp' placeholder='Enter First Name'/>
                      </div>
                      <div className='col-md-6'>
                          <label >Last Name</label>
                          <input ref={(input)=>LastNameRef=input} type='text' className='form-control animated fadeInUp' placeholder='Enter Last Name'/>
                      </div>
                  </div>

                  <div className='row'>
                      <div className='col-md-6'>
                          <label >Contact Number</label>
                          <input ref={(input)=>ContactNumberRef=input} type='text' className='form-control animated fadeInUp' placeholder='Enter Contact Number'/>
                      </div>
                      <div className='col-md-6'>
                          <label >Address</label>
                          <input ref={(input)=>AddressRef=input} type='text' className='form-control animated fadeInUp' placeholder='Enter H. no, R.no,block/sector'/>
                      </div>
                  </div>

                  <div className='row py-4'>
                      <div className='col-md-12'>
                          <label >Division</label>
                          <select ref={(input)=>DivisionRef=input} className='form-control animated fadeInUp' placeholder='Select Division'>
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
                          <input ref={(input)=>DistrictRef=input} type='text' className='form-control animated fadeInUp' placeholder='Enter Home District'/>
                      </div>
                      <div className='col-md-6'>
                      <label >Thana</label>
                          <input ref={(input)=>ThanaRef=input} type='text' className='form-control animated fadeInUp' placeholder='Enter Thana'/>
                      </div>

                  </div>

                  <div className='row mb-4'>
                      <div className='col-md-6'>
                        <label >Transaction ID</label>
                        <input ref={(input)=>TransactionRef=input} type='text' className='form-control animated fadeInUp' placeholder='Enter Transaction ID'/>
                        
                      </div>
                      <div className='col-md-6'>
                          <Button onClick={OnOrder} className='py-3 conformButton form-control animated fadeInUp shadow'>Conform <FaShippingFast/></Button>
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
                          <input ref={(input)=>UserApplyVoucherRef=input} className='form-control animated fadeInUp' placeholder='Apply Voucher Code'/>
                          <button onClick={OnVoucher} className='applyButton shadow form-control mt-2'>Apply</button>
                        </div>
                      </Collapse>
                    </div>

                    <div className='cartSubTotal'>
                      <b>Cart SubTotal</b>
                      <table className='subTotalTable table table-striped table-hover table-bordered table-responsive'>
                        <tbody>
                          <tr>
                            <td>Subtotal</td>
                            <td>৳ {product.ProductPrice}</td>
                          </tr>
                          <tr>
                            <td>Shipping</td>
                            <td>৳ 250</td>
                          </tr>
                          <th>Total</th>

                          {/* {updateVoucherWithTotalPrice ? (
                            <th className='animated fadeInUp'>emptyy</th>
                          ) : (
                            <th className='animated fadeInUp'>not null</th>
                          )} */}

                          <th className='animated fadeInUp'>৳ {totalValue}</th>
                          {/* <th className='animated fadeInUp'>৳ {totalValue !== null ? totalValue : 'N/A'}</th> */}
                        </tbody>
                      </table>
                    </div>

                    <div className='payment animated tada'>
                      <strong>Bkash Number:</strong> <span>017xx-xxxxxx</span>
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
