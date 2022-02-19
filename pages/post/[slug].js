import React, {useState, useEffect} from 'react'
import {getPosts, getPostDetails} from '../../services'

import {PostDetail, Categories, PostWidget, Author, Comments, CommentsForm} from '../../components'

const PostDetails = ({post}) => {

    
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='cols-span-1 lg:col-span-8'>
                <PostDetail post={post}/>
                <Author author={post.authors[0]}/>
                <CommentsForm slug={post.slug}/>
                <Comments slug={post.slug}/>
            </div>
            <div className='cols-span-1 lg:col-span-4'>
                <div className='relative lg:sticky top-8'>
                    <PostWidget slug={post.slug}  categories={post.categories.map((cat) => cat.slug)}/>
                    <Categories />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({params}){
    const post = await getPostDetails(params.slug) 
    return {
      props: {post: post}
    }
}

export async function getStaticPaths(){
    const posts = await getPosts()
    return {
      paths: posts.map(({node: {slug}}) => ({params: {slug}})),
      fallback: true
    }
}