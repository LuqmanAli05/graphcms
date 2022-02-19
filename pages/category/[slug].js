import Head from 'next/head'
import { useEffect, useState } from 'react'
import { PostCard, Categories, PostWidget} from '../../components'
import {getCategoryPosts, getCategories} from '../../services'

const Category = ({posts}) => {
  const [noPosts, setNoPosts] = useState(false)
  useEffect(()=> {
    if(!posts.length){
        setNoPosts(true)
    }
  },[])
  return (
    <div className="container mx-auto px-10 mb-8">
      <h1 className='md:text-3xl font-bold text-white mb-8 text-xl'>Category: <span className='text-pink-500'>{ noPosts ? '' : posts[0].categories[0].name}</span></h1>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
        {
           noPosts ? <h1>No Posts found!</h1> : posts.map((post) => <PostCard post={post} key={post.title} /> )
        }
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget slug="" categories={[]}/>
            <Categories />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Category

export async function getStaticProps({params}){
    const posts = await getCategoryPosts(params.slug) 
    return {
      props: posts ? {posts} : []
    }
}

export async function getStaticPaths(){
    const categories = await getCategories()
    return {
      paths: categories.map((category) => ({params: {slug: category.slug}})),
      fallback: true
    }
}
