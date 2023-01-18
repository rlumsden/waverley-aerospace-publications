import React from 'react'
import Link from 'next/link'

export default function BackButton(props) {
  return (
    <Link href="/"><div className={`bg-slate-100 w-max px-2 py-1 rounded-sm cursor-pointer ${props.ml && 'ml-5'} ${props.top && 'mb-4'} ${props.bottom && 'mt-4'} ${props.mt && 'mt-10'} hover:bg-slate-300 transition-colors duration-300`}>back</div></Link>
  )
}
