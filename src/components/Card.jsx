import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

function Card() {
  return (
    <div className='w-full bg-white py-[2rem] text-black'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 p-5'>
        <div className='w-full py-10 px-5 shadow-md hover:scale-105 duration-500 text-center'>
            <img src={single} alt="single image" className='w-20 mx-auto mb-4' />
            <h2 className='text-2xl md:text-3xl font-medium pb-2'>Single User</h2>
            <p className='pb-3 text-4xl font-bold'>$20</p>
            <div className='font-medium'>
                <p className='py-2 border-b mx-6 text-sm'>500GB Storage</p>
                <p className='py-2 border-b mx-6 text-sm'>1 Granded User</p>
                <p className='py-2 border-b mx-6 text-sm'>Send up to 2 GB</p>
                <button className='bg-teal-500 text-black py-2 px-5 rounded-md w-[146px] mt-4'>Start Trial</button>
            </div>
        </div>
        <div className='w-full py-10 px-5 shadow-md hover:scale-105 duration-500 text-center'>
            <img src={double} alt="double image" className='w-20 mx-auto mb-4' />
            <h2 className='text-2xl md:text-3xl font-medium pb-2'>Double User</h2>
            <p className='pb-3 text-4xl font-bold'>$20</p>
            <div className='font-medium'>
                <p className='py-2 border-b mx-6 text-sm' >500GB Storage</p>
                <p className='py-2 border-b mx-6 text-sm'>1 Granded User</p>
                <p className='py-2 border-b mx-6 text-sm'>Send up to 2 GB</p>
                <button className='bg-teal-500 text-black py-2 px-5 rounded-md w-[146px] mt-4'>Start Trial</button>
            </div>
        </div>
        <div className='w-full py-10 px-5 shadow-md hover:scale-105 duration-500 text-center'>
            <img src={triple} alt="triple image" className='w-20 mx-auto mb-4' />
            <h2 className='text-2xl md:text-3xl font-medium pb-2'>Triple User</h2>
            <p className='pb-3 text-4xl font-bold'>$20</p>
            <div className='font-medium'>
                <p className='py-2 border-b mx-6 text-sm'>500GB Storage</p>
                <p className='py-2 border-b mx-6 text-sm'>1 Granded User</p>
                <p className='py-2 border-b mx-6 text-sm'>Send up to 2 GB</p>
                <button className='bg-teal-500 text-black py-2 px-5 rounded-md w-[146px] mt-4'>Start Trial</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
