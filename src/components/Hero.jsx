import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Button from './Button';

const Hero = () => {
  return (
    <div className='text-white mt-[-90px]'>
        <div className='max-w-[900px] w-full h-screen mx-auto text-center flex justify-center flex-col px-5'>
            <p className='p-2 text-teal-500 uppercase md:text-lg sm:text-sm text-xs'>Growing With Data Analytics</p>
            <h2 className='font-bold md:text-7xl sm:text-6xl text-4xl'>Grow With Data</h2>
            <p className='md:text-3xl sm:text-2xl text-xl pt-2'>Fast, Flexible financing for&nbsp;
            <TypeAnimation
                sequence={[
                    'BTB', // Types 'One'
                    1000, // Waits 1s
                    'BTC', // Deletes 'One' and types 'Two'
                    1000, // Waits 2s
                    'Sass', // Types 'Three' without deleting 'Two'
                    1000,
                ]}
                wrapper="span"
                cursor={true}
                speed={200}
                repeat={Infinity}
                />
            </p>
            <p className='text:xs md:text-2xl sm:text-xl text-gray-500 pt-3 pb-5'>Monitor your data analytics to increase revenue for BTB, BTC and Sass platform.</p>
            <Button/>
        </div>
    </div>
  )
}

export default Hero
