import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function CardAlt({
    image, 
    title, 
    description, 
    price, 
    slug,
    reduced
 }) {

    function currencyConvert(number) {
        return new Intl.NumberFormat('en-US', {
            currency: `GBP`,
            style: 'currency',
        }).format(number)
    }

    const reducedContent = {
        title: "Reduced price offer",
        description: "Both books can be bought together for the reduced price of £52."
    }

    return (
        
        <div className=' mb-16 bg-white py-4'>
            <div className='border-t-4 border-b-4 border-blue-200 relative py-6 mx-auto w-10/12'>
                
                <h2 className='w-max pr-2 absolute -top-3 bg-white font-bold'>
                    {reduced ? reducedContent.title : title}
                </h2>
                <div className={`w-full mx-auto flex justify-center bg-slate-200 py-3 rounded-sm ${reduced ? '' : 'cursor-pointer'}`}>
                    {reduced ? 
                        <Image src={image} height={200} width={reduced ? 250 : 125} alt={"book cover image"}/> :
                        <Link href={`/books/${slug}`} passHref>                            
                            <div className=" w-32"><Image src={image} layout="intrinsic" alt={"book cover image"} /></div>
                        </Link>
                    }
                </div>
                <div className={`pt-6 ${reduced ? 'md:h-24' : 'md:h-60'}`}>
                    <p>{reduced ? reducedContent.description : description}</p>                    
                </div>
                <div className="flex">
                    {reduced ? <></> : <div style={{right: '0', bottom: '-17px'}} className="bg-slate-100 w-max px-2 py-1 rounded-sm cursor-pointer mx-auto absolute"><Link href={`/books/${slug}`}>see more</Link></div>}
                </div>
                <h2 className='w-max pr-2 absolute -bottom-4 bg-white font-bold'>
                    <div>{`£${price} + £${reduced ? 7 : 5} P&P`}</div>
                </h2>
                
            </div>            
            
        </div>
  )   
}
  