import Image from 'next/image'
import React from 'react'
import BannerImage from '@/assets/banner.png'

const Banner = () => {
  return (
    <main className='bg-maintheme opacity-95 px-5'>
        {/* Adjusted padding for mobile/tablet, keeping p-14 for desktop */}
        <section className='container mx-auto p-8 lg:p-14 bg-[#15171D] rounded-2xl'>
            {/* Switched to a 1-column grid on mobile/tablet, 2-column on desktop. Added gap for stacked items. */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0'>
                <div>
                    <h5 className='font-inter font-bold text-[11px] text-lightgreen tracking-widest '>WORKOUT LIBRARY</h5>
                    {/* Scaled down text size for smaller screens, keeping text-6xl for desktop */}
                    <h1 className='font-oswald font-extrabold text-4xl md:text-5xl lg:text-6xl my-5 text-white'>TRAIN WITH INTENT. LOG EVERY SET.</h1>
                    <p className='text-offwhite font-inter text-base max-w-125'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
                    <a href="#library"><button className='mt-7 px-6 py-3 bg-lightgreen text-black font-inter font-bold text-[12px] rounded-md cursor-pointer'>BROWSE WORKOUTS</button></a>
                    
                </div>
                {/* Added top margin for mobile to separate image from text, removed it on desktop */}
                <div className='justify-self-center mt-8 lg:mt-0'>
                    <Image src={BannerImage} width={334} height={334} alt='Banner Image' />
                </div>

            </div>
            
        </section>
    </main>
  )
}

export default Banner