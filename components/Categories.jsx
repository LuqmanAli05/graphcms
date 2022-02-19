import React, {useState, useEffect} from 'react'
import { getCategories } from '../services'
import Link from 'next/link'
const Categories = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((cats) => {
        setCategories(cats)
      })
  },[])
  
  return (
    <div className='bg-white shadow-lg p-8 mb-8 rounded-lg'>
    <h2 className='font-1xl border-b-2 pb-2 mb-4 border-pink font-semibold'>Categories</h2>
    {categories.map((category) => (
      <div className='flex mb-3 items-center'>
        <Link href={`/category/${category.slug}`} className='text-1xl font-400 hover:text-pink-400'>
          {category.name}
        </Link>
      </div>
    ))}
    </div>
  )
}

export default Categories