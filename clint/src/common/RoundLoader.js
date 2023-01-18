import React from 'react'
import roundLoader from "../Assets/images/loader2.svg"
import '../Assets/style/loader.css';


function RoundLoader(){
  return (
    <div className='ProcessingDiv'>
        <div className='center-screen'>
            <img className='loader-size' src={roundLoader} alt='loader'/>
        </div>
    </div>
  )
}

export default RoundLoader;
