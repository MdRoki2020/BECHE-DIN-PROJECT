import React, { Fragment } from 'react'
import '../Assets/style/userSignUpAndLogin.css'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {AiOutlineMail,AiFillLock } from "react-icons/ai";
import { VscSignIn } from "react-icons/vsc";

const PostAuth = () => {
  return (
    <Fragment>
      <section>
        <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                
                <div className='signinComponents'>

                <div className='heading'>
                    <h4 className='accountHeading text-center mt-4'>Please Signin After Posting ADs</h4>
                    <p className='subHeading text-center'>Enter your credentials to access your account</p>
                </div>

                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><AiOutlineMail/></span>
                <input type="password" className="form-control animated fadeInUp" placeholder="Enter Email" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><AiFillLock/></span>
                <input type="password" className="form-control animated fadeInUp" placeholder="Enter Password"  aria-describedby="basic-addon1"/>
                </div>

                <div class="input-group mb-3">
                <Button className="form-control btn btn-warning text-light animated fadeInUp shadow">SignIn <VscSignIn/></Button>
                </div>

                </div>

                <div className='otherDetails'>
                    <Link to='/UserSignup'><p className='haventAccount text-center text-primary'>Haven't An Account !</p></Link>
                    <Link to='#'><p className='forgetPassForSignin text-center text-primary'>Forget Password</p></Link>
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

export default PostAuth
