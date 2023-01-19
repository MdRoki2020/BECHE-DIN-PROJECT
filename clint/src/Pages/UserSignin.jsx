import React, { Fragment, useRef } from 'react'
import '../Assets/style/userSignUpAndLogin.css'
import {Link, useNavigate} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {AiOutlineMail,AiFillLock } from "react-icons/ai";
import { VscSignIn } from "react-icons/vsc";
import { ErrorToast, IsEmail, IsEmpty } from '../Helper/FormHelper';
import { PublisherLoginRequest } from '../APIRequest/APIRequest';
import FullScreenLoader from '../common/FullScreenLoader';

const UserSignin = () => {

  let EmailRef,PasswordRef,Loader=useRef();

    let navigate=useNavigate();

    const OnLogin=()=>{
        
        let Email=EmailRef.value;
        let Password=PasswordRef.value;


        if(IsEmail(Email)){
            ErrorToast("Valid Email Address Required");
        }else if(IsEmpty(Email)){
            ErrorToast("Email Is Required");
        }else if(IsEmpty(Password)){
            ErrorToast("Password Is Required");
        }else{
            Loader.classList.remove('d-none');
            PublisherLoginRequest(Email,Password).then((result)=>{
                if(result===true){
                    Loader.classList.add('d-none');
                    navigate("/PublisherDashboard");
                }else{
                    Loader.classList.add('d-none');
                    ErrorToast("Email And Password Dosen't Match");
                    console.log('something went wrong');
                }
            })
        }
    }

  return (
    <Fragment>
      <section>
        <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                
                <div className='signinComponents'>

                <div className='heading'>
                    <h4 className='accountHeading text-center mt-4'>Welcome To Beche Din Web Application</h4>
                    <p className='subHeading text-center'>Enter your credentials to access your account</p>
                </div>

                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><AiOutlineMail/></span>
                <input type="email" ref={(input)=>EmailRef=input} className="form-control animated fadeInUp" placeholder="Enter Email" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><AiFillLock/></span>
                <input type="password" ref={(input)=>PasswordRef=input} className="form-control animated fadeInUp" placeholder="Enter Password"  aria-describedby="basic-addon1"/>
                </div>

                <div class="input-group mb-3">
                <Button onClick={OnLogin} className="form-control btn btn-warning text-light animated fadeInUp shadow">SignIn <VscSignIn/></Button>
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

      <div className='d-none' ref={(div)=>Loader=div}>

        <FullScreenLoader />

    </div>
    </Fragment>
  )
}

export default UserSignin
