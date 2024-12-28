// @ts-nocheck
import React from 'react'

const ContentCard = ({src,title,description}) => {
  return (
      <div className='relative w-full my-6 max-w-xl'>
          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg flex justify-center items-center">
              <div className='max-w-xl p-4 border-2 border-white/20 '>
              <h1 className='uppercase text-white font-bold'>
                    {title}
              </h1>
              {src && <img src={src} alt="" className='object-contain' />}
              <p className='text-white opacity-80 pt-4'>
                    {description}
                  </p>
              </div>
          </div>
    </div>
  )
}

export default ContentCard