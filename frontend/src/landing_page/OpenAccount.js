import React from 'react'

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img className='mb-5' src='media/images/homeHero.png'  alt='Hero Image'/>
                <h1 className='mt-5'>Open a ZenoTrade account</h1>
                <p>Modern platform and apps, ₹0 and flat ₹20 Intraday and F&O trades</p>
                <button className=' mb-5 p-2 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}}>Sign up Now</button>
            </div>
        </div>
    );
}

export default OpenAccount;