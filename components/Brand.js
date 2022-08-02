import Image from "next/image";
import React from "react";
import wapLogo from '../public/img/wap-logo.svg'

export default function Brand() {

  const logo = wapLogo 

  return (
    <div 
      className='p-5 mt-4 mb-5 relative flex'
      style={{
        height: '190px'
      }}    
    >
        <h1 className='capitalize font-header text-4xl leading-snug sm:w-max my-auto ml-6 sm:ml-8 max-w-md'>
          waverley aerospace publications
        </h1>
        <div 
            className='absolute max-w-sm' 
            style={{
                right: '1rem',
                // left: '40%',
                top: '2rem',
                bottom: '1rem',
                // backgroundImage: `url(${logo})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                zIndex: '-1',
                // height: '1000px',
                width: '95%',
                //   opacity: '0.8'
            }}
        >
          <Image 
            src={logo} 
            alt={"Waverley Aerospace Publications logo"}
            // height={500} 
            // width={500}
          />
          {/* <img src={logo}/> */}

        </div>
    </div>
  )
}