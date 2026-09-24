import Image from 'next/image'
import React from 'react'
import BannerImage from '@/assets/banner.png'

const Banner = () => {
  return (
    <main className='bg-maintheme opacity-95 px-5'>
        <section className='container mx-auto p-14 bg-[#15171D] rounded-2xl'>
            <div className='grid grid-cols-2'>
                <div>
                    <h5 className='font-inter font-bold text-[11px] text-lightgreen tracking-widest '>WORKOUT LIBRARY</h5>
                    <h1 className='font-oswald font-extrabold text-6xl my-5 text-white'>TRAIN WITH INTENT. LOG EVERY SET.</h1>
                    <p className='text-offwhite font-inter text-base max-w-125'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
                    <button className='mt-7 px-6 py-3 bg-lightgreen text-black font-inter font-bold text-[12px] rounded-md'>BROWSE WORKOUTS</button>
                </div>
                <div className='justify-self-center'>
                    <Image src={BannerImage} width={334} height={334} alt='Banner Image' ></Image>
                </div>

            </div>
            

        </section>
    </main>
  )
}

export default Banner