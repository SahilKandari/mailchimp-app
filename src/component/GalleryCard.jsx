import React from 'react'
import AnimButton from './AnimButton'

const GalleryCard = ({ title, desc, show }) => {
  return (
    <div className='h-[calc(100vh-80px)] flex flex-col justify-center px-[80px]'>
      <h2 className='text-[32px] max-w-[420px] leading-10 mb-5'>{title}</h2>
      <p className='text-xl	max-w-[420px] text-gray-600 mb-5'>{desc}</p>
      {
        show && <AnimButton className="ml-[-8px] w-fit">Learn more</AnimButton>
      }
    </div>
  )
}

export default GalleryCard