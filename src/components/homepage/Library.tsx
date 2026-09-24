import Image from 'next/image'
import React from 'react'
import LibraryImage from '@/assets/library.png'
import { GoClock } from "react-icons/go";
import { FaFireFlameCurved } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";


const Library = () => {
    return (
        <section className='bg-maintheme opacity-95'>
            <div className='container mx-auto pt-16'>
                <h2 className='font-oswald font-bold text-3xl text-white '>THE LIBRARY</h2>
                <p className='font-inter text-sm text-offwhite'>Twelve lifts covering every major muscle group.</p>
                <div className='mt-8 grid grid-cols-3'>
                    <div>
                        <div className='bg-[#15171D] rounded-2xl'>
                            <Image className='w-full rounded-t-2xl' src={LibraryImage} alt='Library Image' />
                            <div className='p-6'>
                                <div className='flex gap-2 mt-6 mb-3'>
                                    <button className="bg-lightgreen text-black py-0.5 px-2.5 font-inter font-bold rounded-full">CHEST</button>
                                    <button className="bg-lightgreen text-black py-0.5 px-2.5 font-inter font-bold rounded-full">ARMS</button>

                                </div>
                                <h3 className='font-bold text-white font-oswald text-lg' >BARBELL BENCH PRESS</h3>
                                <p className='text-offwhite font-inter text-[12px] pb-4 border-b border-[#20242E]'>Barbell, Bench</p>
                                <div className='flex gap-x-4 items-center mt-3'>
                                    <div className='flex items-center gap-2'>
                                        <GoClock className='text-offwhite text-[12px]' />
                                        <p className='text-offwhite text-[12px]'>25 min</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <FaFireFlameCurved className='text-offwhite text-[12px]' />
                                        <p className='text-offwhite text-[12px]'>25 min</p>

                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <CiStar className='text-offwhite text-[12px]' />
                                        <p className='text-offwhite text-[12px]'>25 min</p>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default Library