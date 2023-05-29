import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='bg-white py-16 px-5'>
      <div className='grid md:grid-cols-2'>
        <img src={laptop} alt="laptop" className='sm:pb-3'/>
        <div className='flex flex-col justify-center'>
            <p className='uppercase md:text-md sm:text-sm pb-sm text-teal-500'>Data Analytics Dashboard</p>
            <h2 className='md:text-3xl sm:text-2xl pb-3 text-xl text-black'>Manage Data Analytics Central</h2>
            <p className='md:text-base sm:text-sm text-black pb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptates velit error quae commodi voluptas, pariatur ipsum debitis aspernatur fugiat, eligendi ut placeat cupiditate cum, modi possimus et excepturi inventore?</p>
            <div className='flex items-center'>
                <a href="#" className='text-teal-500 py-2 px-5 ease-linear duration-150 rounded bg-black border- hover:bg-teal-500 hover:ease-linear hover:duration-150 hover:text-black'>Subscribe</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
