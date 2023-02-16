import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from "react-icons/ai"
import { TbBellRinging2 } from "react-icons/tb";
import logo from '../Assets/images/logo.png'
import '../Assets/style/Footer.css'
import 'hover.css/css/hover-min.css';
const Footer = () => {
  return (
    <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <img className='footerImage' src={logo} alt='footerImage' />
              <p>BECHE DIN website Build ReactJs, ExpressJS, NodeJS, MongoDB. If you have any question you can visit https://rsroki.info or email: mroki815@gmail.com</p>
            </div>
            <div className='col-md-4 mt-4'>
              <h6 className='text-light'>Important Link</h6>
              <Link to='/'><p className='footerLink'><AiOutlineArrowRight/> Home</p></Link>
              <Link to='/'><p className='footerLink'><AiOutlineArrowRight/> All Ads</p></Link>
              <Link to='/'><p className='footerLink'><AiOutlineArrowRight/> Post Your Ads</p></Link>
              <Link to='/'><p className='footerLink'><AiOutlineArrowRight/> My Account</p></Link>
            </div>
            <div className='col-md-4'>
            <h6 className='text-light mt-4'>Newsletter</h6>
            <p>Sign up and receive the latest tips via email.</p>
            <p>Email*</p>
            <input className='footerInput' placeholder='you@example.com'/>
            <button className='btn btn-warning hvr-sweep-to-right'>Subscribe <TbBellRinging2/></button>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
