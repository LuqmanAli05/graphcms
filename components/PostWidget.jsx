import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'
const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(()=>{
    if(slug){
      getSimilarPosts(categories, slug) 
        .then((result) => setRelatedPosts(result))
    }else{
      getRecentPosts() 
        .then((result) => setRelatedPosts(result))
    }
  },[slug])
  return (
    <div className='bg-white shadow-lg p-8 mb-8 rounded-lg'>
    <h2 className='font-1xl border-b-2 pb-2 mb-4 border-pink font-semibold'>{slug ? 'Related Posts' : 'Recent Posts'}</h2>
    {relatedPosts.map((post) => (
      
      <div className='flex mb-3 items-center' >
        <div className='flex-item span-4 items-center'>
          <Link  href={`/post/${post.slug}`}>
            <img src={post.featuredImage.url} className='w-10 h-10 rounded-full mr-2 shadow-md cursor-pointer' />
          </Link>
        </div>
        <div className='flex-item span-8 items-center'>
          <Link  href={`/post/${post.slug}`} >
            <h3 className='py-1 block cursor-pointer'>{post.title}</h3>
          </Link>
          <p className='text-sm text-gray-500 block'>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
        </div>
      </div>
      
    ))}
    </div>
  )
}

export default PostWidget