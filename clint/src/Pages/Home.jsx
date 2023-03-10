import React, { Fragment } from 'react'
import '../Assets/style/Home.css'
import {AiOutlinePlusSquare,AiOutlineDoubleRight,AiFillCaretRight,AiTwotonePhone,AiTwotoneMail,AiFillEnvironment } from "react-icons/ai"
import { TbBellRinging2 } from "react-icons/tb";
import laptop from '../Assets/images/laptop.jpg'
import watch from '../Assets/images/watch.jpg'
import mobile from '../Assets/images/mobile.jpg'
import tv from '../Assets/images/tv.jpg'
import electronic from '../Assets/images/electronics.jpg'
import fashion from '../Assets/images/fashion.jpg'
import poster1 from '../Assets/images/poster1.png'
import poster2 from '../Assets/images/poster2.png'
import largeposter from '../Assets/images/largePoster.png'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { Badge, Button } from 'react-bootstrap';
import 'hover.css/css/hover-min.css';

function Home() {
  return (
    <Fragment>
      <section>
        <div className='wrapper'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
              {/* <div className='coverMeta text-center'>
                <h2 className='textContentWrapper animated fadeInUp delay-2s'>BECHE DIN Will Change</h2>
                <h2 className='textContentWrapper animated fadeInUp'>Expression Every Visit</h2>
                <p className='coverText animated fadeInUpBig'>Sold Your Old Drafts Safely</p>
                <p className='coverText animated fadeInUpBig'>Safe Delevered Of Our Own Community</p>
              </div> */}
              </div>
              <div className='col-md-6'>
                  <div className='subscribeComponents mt-5 text-center animated fadeInUp'>
                  <input className='shadow' placeholder='Enter Email'/><Button className='hvr-sweep-to-right hvr-pop shadow btn btn-info text-light'> <TbBellRinging2/></Button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='categorySection'>
        <div className='container'>
          <div className='category mt-4 mb-4'>
            {/* <h5 className='mb-4'>Category</h5> */}
            <Badge bg="danger mb-3">
            Categories
            </Badge>
            
            <div className='row'>
              <div className='col-md-2 hvr-pulse-shrink'>
              <Link to='/Products/Laptop'>
              <div className='allItems'>
                <div className="card">
                  <img className="card-img-top" src={laptop} alt="laptop" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Laptop</h5>
                  </div>
                </div>
              </div>
              </Link>
              </div>

              <div className='col-md-2 hvr-pulse-shrink'>
              <Link to='/Products/Mobile'>
              <div className='allItems'>
                <div className="card">
                  <img className="card-img-top" src={mobile} alt="Mobile" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Mobile</h5>
                  </div>
                </div>
              </div>
              </Link>
              </div>

              <div className='col-md-2 hvr-pulse-shrink'>
              <Link to='/Products/Watch'>
              <div className='allItems'>
                <div className="card">
                  <img className="card-img-top" src={watch} alt="watch" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Watch</h5>
                  </div>
                </div>
              </div>
              </Link>
              </div>

              <div className='col-md-2 hvr-pulse-shrink'>
              <Link to='/Products/Television'>
              <div className='allItems'>
                <div className="card">
                  <img className="card-img-top" src={tv} alt="tv" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Television</h5>
                  </div>
                </div>
              </div>
              </Link>
              </div>

              <div className='col-md-2 hvr-pulse-shrink'>
              <Link to='/Products/Electronics'>
              <div className='allItems'>
                <div className="card">
                  <img className="card-img-top" src={electronic} alt="electronic" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Electronics</h5>
                  </div>
                </div>
              </div>
              </Link>
              </div>

              <div className='col-md-2 hvr-pulse-shrink'>
              <Link to='/Products/Fashion'>
              <div className='allItems'>
                <div className="card">
                  <img className="card-img-top" src={fashion} alt="fashion" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Fashion</h5>
                  </div>
                </div>
              </div>
              </Link>
              </div>

            </div>
          </div>
        </div>

        <div className='container mb-4'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='card posterWrapper animated fadeInLeft'>
              <div className='row'>
                <div className='col-sm-3'>
                <img className='poster' src={poster1} alt='poster1'/>
                </div>
                <div className='col-sm-9'>
                <div className='posterText'>
                  <h2>Sell Your Product's and Earn Money!</h2>
                  <p>If you want to sell any of your products then you can sell now. One of the easiest and quickest works</p>
                  <Link to='/PostAuth'><button className='btn btn-warning shadow rounded-pill hvr-pop'>Post Your Ads <AiOutlinePlusSquare/></button></Link>
                </div>
                </div>
              </div>
              </div>
            </div>

            <div className='col-md-6'>
            <div className='card posterWrapper animated fadeInRight'>
              <div className='row'>
                <div className='col-sm-3'>
                <img className='poster' src={poster2} alt='poster2'/>
                </div>
                <div className='col-sm-9'>
                <div className='posterText'>
                  <h2>Buy items at your fingertips !</h2>
                  <p>You can easily select your desired product and purchase it from here. It is easy and safe to use.</p>
                  <Link to='/AllAds'><button className='btn btn-info shadow rounded-pill hvr-pop'>See All Ads <AiOutlineDoubleRight/></button></Link>
                </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className='largeposter mt-4'>
            <div className='row'>
              <div className='col-md-12'>
              <div className='card posterWrapper animated fadeInRight'>
              <div className='row'>
                <div className='col-sm-3'>
                <img className='poster' src={largeposter} alt='largeposter'/>
                </div>
                <div className='col-sm-9'>
                <div className='posterText'>
                  <h2>Find the right product for you !</h2>
                  <p>Get the product directly in hand and have the facility of fastest delivery. In the case of buying and selling products, you get the benefit of seeing and understanding , that is, you can see any product with your own hands and then buy and sell it. ad!</p>
                  <button className='btn btn-primary shadow rounded-pill hvr-pop'>Shop Now <AiFillCaretRight/></button>
                </div>
                </div>
              </div>
              </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='getInTouch pt-4'>
        <div className='container'>
        {/* <h5 className='mb-4'>Get In Touch</h5> */}
        <Badge bg="danger mb-3">
        Get In Touch
        </Badge>
          <div className='row'>
            <div className='col-md-4'>
              <div className='singleContact'>
                <div className='singleContactBox card shadow mb-3 hvr-float-shadow hvr-pop'><AiTwotonePhone/></div>
                <h5>Phone</h5>
                <p>If you have to need any help you can call any time. Our teem spend there time for give best service.</p>
                <p>++8801717453205</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='singleContact'>
                <div className='singleContactBox card shadow mb-3 hvr-float-shadow hvr-pop'><AiTwotoneMail/></div>
                <h5>Email</h5>
                <p>If you have want to send massage, You can send email us. We shall back to response very quickly!</p>
                <p>mroki815@gmail.com</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='singleContact'>
                <div className='singleContactBox card shadow mb-3 hvr-float-shadow hvr-Buzz hvr-pop'><AiFillEnvironment/></div>
                <h5>Location</h5>
                <p>Our Company has located in Chittagong, Bangladesh. please visit <a href='https://rsroki.info'>Rs Roki (Protfolio)</a> for more info.</p>
                <p>Mirpur Dhaka</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
      
    </Fragment>
  )
}

export default Home
