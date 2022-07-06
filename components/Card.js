import Image from "next/image";
import React from "react";

export default function Card({
    image, 
    title, 
    description, 
    price
 }) {

    function currencyConvert(number) {
        return new Intl.NumberFormat('en-US', {
            currency: `GBP`,
            style: 'currency',
        }).format(number)
    }

    return (
        <div className=' mb-16 bg-white py-4'>
            <div className='border-t-4 border-b-4 border-blue-200 relative py-6 mx-auto w-10/12'>
                <h2 className='w-max pr-2 absolute -top-3 bg-white font-bold'>
                    {title}
                </h2>
                <div className=' w-full mx-auto md:h-44 flex justify-center bg-slate-200 py-3 rounded-sm'>
                    <Image src={image} height={200} width={125}/>
                </div>
                <div className='pt-6 md:h-60'>
                    <p>{description}</p>
                </div>
                <h2 className='w-max pr-2 absolute -bottom-4 bg-white font-bold'>
                    {currencyConvert(price)}
                </h2>
            </div>
        </div>
  )
}
  