
'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import {projects} from '../content/data'


function Page() {
    const { project } = useParams<{ project: string }>()
    const data = projects.find((p) => p.titleLink === project)
    return (
        <section className='flex mx-auto relative overflow-hidden flex-col px-3 pb-8 w-full border-b border-solid shadow-xl max-w-8xl z-[9] text-padding md:px-3 border-neutral-800 bg-[#111111]'>
            
                <div className="banner h-[60vw]">
                        {data?.banner && <img src={data?.banner} alt="" className='object-cover w-full h-screen' />}
                        {data?.bannerVdo && <video src={data?.bannerVdo} autoPlay loop className=' w-full h-screen' ></video>}
                    </div>
                
                <div className=" my-6 grid grid-cols-12 gap-4 col-start-1 col-end-13 w-full max-md:grid-cols-1 max-md:gap-6">
                    <div className="col-start-1 col-end-3 col-span-4 max-md:col-span-12">
                        <div className='sticky top-0 m-4 max-md:static'>
                            <h1 className="text-lg">{data?.title}</h1>
                            <p className='text-white opacity-40'>{data?.subtitle}</p>
                        </div>
                    </div>
                    <div className='col-start-5 col-end-13 col-span-8 max-md:col-span-12 m-4'>
                        <div className="flex flex-col">
                            <p >
                                { data?.description }
                            </p>
                        </div>
                        <div className="grid grid-cols-6 my-6 gap-4">
                            <h1 className='col-start-1 col-span-2 opacity-40'>Tech stack used</h1>
                            <div className='col-start-3 col-span-5'>
                                <div className='flex flex-row gap-6'>
                                    {data?.tech && data?.tech.map((tech, idx) => (
                                        <div key={idx}>{tech}</div>
                                    ))}
                                </div>
                            </div>
                            <h1 className='col-start-1 col-span-2 opacity-40'>Color palatte</h1>
                            <div className='col-start-3 col-span-5'>
                                <div className='flex flex-row gap-6'>
                                {data?.colors && data?.colors.map((color,idx) => (
                                    <div className='w-10 h-10 rounded-xl' key={idx} style={{ backgroundColor: color }}></div>
                                ))}
                                </div>
                            </div>
                            <br />
                            <h1 className='col-start-1 col-span-2 opacity-40'>Typography</h1>
                            <p className='col-start-3 col-span-5'>{data?.typography}</p>
                            
                            
                                <button className='flex flex-row col-start-3 rounded-md text-white/80 bg-white/[.05] p-4 my-4 col-span-full hover:bg-white/10 hover:text-white ' onClick={() => window.open(data?.link)}>
                                Main website
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-3 w-3 my-2 ml-auto stroke-[3px] stroke-white/30 group-hover:stroke-white"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>
                                </button>
                            
                        </div>
                        <div className='flex flex-col'>
                            {data?.vdsrc && <video src={data?.vdsrc} autoPlay loop className='w-full h-full' ></video>}
                            {data?.image && data?.image.map((img, idx) => (
                            <div className='w-full h-full my-4' key={idx}>
                                    <img src={img} alt="" className='object-contain' />
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
            
        </section>
    )
}

export default Page