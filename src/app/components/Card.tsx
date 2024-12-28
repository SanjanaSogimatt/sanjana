'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
interface CardProps {
  Vdsrc?: string;
  src?: string;
  heading: string;
  subheading: string;
  inProgress: boolean;
  link: string; // Add a link prop to specify the destination route
}
const Card = ({ Vdsrc, src, heading, subheading, inProgress, link }: CardProps) => {
  const router = useRouter()
  const handle = () => {
    if (!inProgress) {
      router.push(link)
    }
  }
  return (
    <div className={`relative w-full ${inProgress ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={handle}>
      <div className='container block h-full border-2 border-white/20'>
        <div className=' flex justify-center items-center align-center'>
          {Vdsrc ? <video src={Vdsrc} autoPlay loop className=''  ></video> : <img src={src} alt="" className='object-contain' />}
          {inProgress && (
            <div className="absolute top-3 left-3 bg-orange-200 text-orange-800 text-sm px-4 py-1 rounded-full">
              In Progress
            </div>
          )}
        </div>
        <div className=' bottom-0 p-4 border-t-2 border-white/20'>
          <h1 className='text-white leading-[1.2] tracking-[0.3rem] font-bold'>{heading}</h1>
          <p className='text-white tracking-[.1rem] opacity-40'>{subheading}</p>
         
        </div>
      </div>
    </div>
  )
}

export default Card