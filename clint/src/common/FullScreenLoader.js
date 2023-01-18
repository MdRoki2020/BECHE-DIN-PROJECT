import React from 'react'
import loader from "../Assets/images/loaderTransparent.svg"
import '../Assets/style/loader.css';

function FullScreenLoader(){
    return(
        <div className='ProcessingDiv'>
            <div className='center-screen'>
                <img className='loader-size' src={loader} alt='loader'/>
            </div>
        </div>
    )
}



export default FullScreenLoader;