import React from 'react'
import Image from 'next/image'
const Author = ({author}) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 rounded-lg bg-black bg-opacity-25'>
      <div className='text-center'>
        <Image
          alt={author.name}
          unoptimized
          height="100px"
          width="100px"
          className='align-middle rounded-full'
          src={author.photo.url}
        />
      </div>
      <h3 className='text-white my-4 text-xl fond-bold'>{author.name}</h3>
      <p className='text-white text-lg'>{author.bio}</p>
      
    </div>
  )
}

export default Author