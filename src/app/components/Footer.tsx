// @ts-nocheck
import React from 'react'
import Marquee from 'react-fast-marquee'
function Footer() {
  return (
    <div className='sticky bottom-0 bg-[#1C1C1C]'>
      <section className=' grid relative col-start-1 col-end-13 md:grid-cols-3 w-full gap-8 p-4'>
        <div className="flex flex-col">
          <div className="absolute top-3 left-3 text-yellow-400 text-sm px-4 py-1 rounded-full border border-yellow-400 bg-transparent">
            v1.0.0
          </div>
          <p className="opacity-40 py-4 my-4">
            Last updated 2024-12-20
          </p>
        </div>
        <div className="flex flex-col">
          <a href="https://www.linkedin.com/in/sanjana-sogimatt-764a931ba/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Linkedin
          </a>
          <a href="https://github.com/SanjanaSogimatt" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Github
          </a>
          <a href="https://x.com/SSogimatt5099" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Twitter
          </a>
        </div>

        <div className="flex flex-col">
          <p className="text-white">Let's build something togerther</p>
          <a
            href="mailto:sanjanasogimatt@gmail.com"
            className="text-white hover:underline"
          >
            sanjanasogimatt@gmail.com
          </a>
        </div>
      </section>
      <div className='text-white p-4'>
        <Marquee gradient={false} speed={40}>
          PE_▞▚▞▚▞▚▞_Copyright_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_INPUT MONO_▞▚▞▚▞▚▞_OFFBIT TYPE_▞▚▞▚▞▚▞_Copyright_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_INPUT MONO_▞▚▞▚▞▚▞_OFFBIT TYPE_▞▚▞▚▞▚▞_Copyright_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_INPUT MONO_▞▚▞▚▞▚▞_OFFBIT TYPE_▞▚▞▚▞▚▞_Copyright_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_INPUT MONO_▞▚▞▚▞▚▞_OFFBIT TYPE_▞▚▞▚▞▚▞_Copyright_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_INPUT MONO_▞▚▞▚▞▚▞_OFFBIT TYPE_▞▚▞▚▞▚▞_Copyright_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_INPUT MONO_▞▚▞▚▞▚▞_OFFBIT TYPE_▞▚▞▚▞▚▞_Copyright_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_INPUT MONO_▞▚▞▚▞▚▞_OFFBIT TYPE_▞▚▞▚▞▚▞_Copyright_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_INPUT MONO_▞▚▞▚▞▚▞_OFFBIT TYPE_▞▚▞▚▞▚▞_Copyright_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_INPUT MONO_▞▚▞▚▞▚▞_OFFBIT TYPE_▞▚▞▚▞▚▞_Copyright_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_INPUT MONO_▞▚▞▚▞▚▞_OFFBIT TY
        </Marquee>
      </div>
    </div>
  )
}

export default Footer