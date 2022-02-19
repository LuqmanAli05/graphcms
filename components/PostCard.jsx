import React from 'react'
import Link from 'next/link'
import moment from 'moment'
const PostCard = ({post}) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-4 lg:p-8  mb-8'>
       <div className='relative overflow-hidden  mb-6'>
         <img 
            src={post.featuredImage.url} 
            alt={post.title} 
            className='object-top h-80 mb-8 w-full object-cover rounded-t-lg lg:rouded-lg' 
          />
          <h1 className='transition duration-300 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
            <Link href={`/post/${post.slug}`}>
              {post.title}
            </Link>
          </h1>
          <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
            <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
              <img 
                alt={post.authors[0].name}
                height="30px"
                width="30px"
                className='align-middle rounded-full object-auto'
                src={post.authors[0].photo.url}
              />
              <p className='inline ml-1'>
                {post.authors[0].name}
              </p>
            </div>
            <div className='font-medium text-gray-700'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>
            </div>
          </div>
          <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>
            {post.excerpt}
          </p>
          <div className='text-center'>
            <Link href={`/post/${post.slug}`}>
              <span className='transition duration-300 tranform hover:-translate-y-1 cursor-pointer inline-block bg-pink-600 text-white font-medium rounded-full px-4 py-2'>
                Continue Reading
              </span>
            </Link>
          </div>
       </div>
       
    </div>
  )
}

export default PostCard