import React, { Fragment } from 'react'
import '../Assets/style/userSignUpAndLogin.css'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import { AiOutlineUserAdd } from "react-icons/ai";

const UserSignup = () => {
  return (
    <Fragment>
      <section>
        <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='heading'>
                    <h4 className='accountHeading text-center mt-4'>Get Your Free Account Now</h4>
                    <p className='subHeading text-center'>Free Forever. No Payment Needed</p>
                </div>
                
                <div className='row my-4'>
                        <div className='col-md-6'>
                            <input type='text' className='form-control animated fadeInUp' placeholder='Enter First Name'/>
                        </div>
                        <div className='col-md-6'>
                            <input type='text' className='form-control animated fadeInUp' placeholder='Enter Last Name'/>
                        </div>
                </div>

                <div className='row'>
                        <div className='col-md-6'>
                            <input type='text' className='form-control animated fadeInUp' placeholder='Enter Age'/>
                        </div>
                        <div className='col-md-6'>
                            <input type='text' className='form-control animated fadeInUp' placeholder='Enter Mobile Number'/>
                        </div>
                </div>

                <div className='row py-4'>
                        <div className='col-md-12 input-group'>
                            <input type='email' className='form-control animated fadeInUp' placeholder='Enter Email'/>
                        </div>
                </div>

                <div className='row mb-4'>
                        <div className='col-md-6'>
                            <input type='file' className='form-control animated fadeInUp'/>
                        </div>
                        <div className='col-md-6'>
                            <input type='text' className='form-control animated fadeInUp' placeholder='Enter District'/>
                        </div>
                </div>

                <div className='row'>
                        <div className='col-md-6'>
                            <input type='password' className='form-control animated fadeInUp' placeholder='Enter Password'/>
                        </div>
                        <div className='col-md-6'>
                            <input type='password' className='form-control animated fadeInUp' placeholder='Enter Conform Password'/>
                        </div>
                </div>

                <div className='row py-4'>
                        <div className='col-md-12'>
                            <Button className='form-control btn btn-warning text-light animated fadeInUp shadow'>Signup With Email <AiOutlineUserAdd/></Button>
                        </div>
                </div>

                <div className='otherDetails'>
                    <Link to='/UserSignin'><p className='haveAnAccount text-center text-primary'>Already Have An Account !</p></Link>
                    <Link to='#'><p className='forgetPass text-center text-primary'>Forget Password</p></Link>
                </div>
      
            </div>

            <div className='col-md-6'>
                <div className='ImageCover'>
                    
                </div>
            </div>
        </div>
        </div>

      </section>
    </Fragment>
  )
}

export default UserSignup
