import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Card({
    image, 
    title, 
    description, 
    price, 
    slug
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
                <div className=' w-full mx-auto md:h-44 flex justify-center bg-slate-200 py-3 rounded-sm cursor-pointer'>
                    <Link href={`/books/${slug}`}>
                        <Image src={image} height={200} width={125}/>
                    </Link>
                </div>
                <div className='pt-6 md:h-60'>
                    <p>{description}</p>                    
                </div>
                <div className="flex">
                    {/* <div className="flex-grow"></div> */}
                    <div style={{right: '0', bottom: '-17px'}} className="bg-slate-100 w-max px-2 py-1 rounded-sm cursor-pointer mx-auto absolute"><Link href={`/books/${slug}`}>see more</Link></div>
                </div>
                <h2 className='w-max pr-2 absolute -bottom-4 bg-white font-bold'>
                    <div>{currencyConvert(price)}</div>
                </h2>
            </div>            
            
        </div>
  )

    

}
  