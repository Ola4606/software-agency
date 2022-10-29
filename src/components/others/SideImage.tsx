import React from 'react'

type SideImagePropType = {
  image: any
}

export function SideImage1({image}: SideImagePropType) {
  return (
    <div className='mt-8 w-full h-[520px] bg-split-image-background-a flex justify-end items-start'>
          <img src={image} alt="Team" className='h-full w-min rounded-l-xl'/>
    </div>
  )
}

export function SideImage2({image}: SideImagePropType) {
  return (
    <div className='mt-8 w-full h-[520px] bg-split-image-background-b flex justify-start items-start'>
          <img src={image} alt="Team" className='h-full w-min rounded-r-xl'/>
    </div>
  )
}