import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-black px-5 py-10'>
      <div className='grid lg:grid-cols-3'>
        <div className='text-white lg:col-span-2 pb-4'>
            <h2 className='md:text-4xl text-2xl'>Want tips & tricks to optimize your flow?</h2>
            <p className='md:text-base sm:text-sm'>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className=''>
            <div className='md:flex items-center text-center'>
                <input type="text" placeholder='Send me' className='flex w-full rounded-md bg-white text-gray-500 border p-2  border-gray mr-3'/>
                <button className='bg-teal-500 text-black py-2 px-5 rounded-md w-[146px] mt-3 md:mt-0'>Notify me</button>
            </div>
            <p className='text-white mt-2 text-sm'>We care about the production of your data. Read our <a href="#" className='text-teal-500 underline'>Privacy policy</a></p>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
