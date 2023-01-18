import Link from "next/link"

export default function Navbar() {

    const links = ['home', 'author', 'contact']

    return (
        <div className='bg-gray-100 w-full px-5 py-2 border-t-4 border-blue-200 mt-2'>
            <div className='flex w-max mx-auto '>
                {links.map((link, index) => (
                    <div key={`${index}: ${link}`} className=' mx-8 hover:bg-slate-300 transition-colors duration-300 px-2 rounded-sm'>
                        <Link href={link === 'home' ? '/' : `/${link}`}>
                            <button className='capitalize font-header text-xs'>{link}</button>
                        </Link>
                    </div>
                ))}
            </div>
      </div>
    )
}
  