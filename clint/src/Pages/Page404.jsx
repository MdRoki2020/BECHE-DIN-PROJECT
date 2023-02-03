import React, { Fragment } from 'react'
import { AiOutlineRollback,AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';
import '../Assets/style/Page404.css';
import ErrorImage from '../Assets/images/ErrorPageImage.gif'

const Page404 = () => {
  return (
    <Fragment>
        <div className='container'>
            <div className='row'>
                <div className='ErrorContains text-center'>
                    <h2>BECHE-DIN APP</h2>
                    <div className='ErrorPage'>
                        <img src={ErrorImage} alt='Page 404'/>
                    </div>
                    <div className='LinkOptions'>
                        <Link to="/"><p className='backBtn'><AiOutlineRollback /> Back</p></Link>
                        <Link to="/"><p className='HomeBtn'><AiOutlineHome /> Home</p></Link>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Page404