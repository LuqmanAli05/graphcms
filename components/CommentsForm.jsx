import React, { useEffect, useRef, useState } from 'react'
import { submitComment } from '../services'
const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false)
  // const [storeData, setStoreData] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false) 

  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  useEffect(()=> {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')
  },[])

  const handleCommentSubmit = () => {
    setError(false)
    const comment = commentEl.current.value
    const name = nameEl.current.value
    const email = emailEl.current.value
    const storeData = storeDataEl.current.value

    if(!comment || !name || !email){
      
      setError(true)
      console.log({name, email, comment, slug})
      return
    }

    const commentObj = {name, email, comment, slug}

    if(storeData){
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    }else{
      window.localStorage.removeItem('name')
      window.localStorage.removeItem('email')
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
    })


  }

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-4'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Leave a Reply</h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea ref={commentEl} 
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' 
          name="comment"
          placeholder='Comment'
          required
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 '>
        <input 
          type='text'
          ref={nameEl}
          placeholder='Name'
          name='name'
          required
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
        />
        <input 
          type='email'
          ref={emailEl}
          placeholder='Email'
          name='email'
          required
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 '>
        <label className='text-xs text-gray-400 pointer-cursor'>
          <input ref={storeDataEl} type="checkbox" id="storeData" name="storeData"/> Remember me
        </label>
      </div>
      <div className='mb-8'>
        <button type="button" 
          onClick={handleCommentSubmit}
          className='transition duration-500 ease hover:bg-indigo-900 inline-block px-8 py-3 rounded-full bg-pink-600 text-lg text-white cursor-pointer'
        >
          Post Comment
        </button>
      </div>
      {error && <p className='text-xl font-semi-bold text-red-500 text-center'>All fields are required</p> }
      {showSuccessMessage && <p className='text-xl text-center font-semibold text-green-500'>Comment submitted for review!</p> }
    </div>
  )
}

export default CommentsForm