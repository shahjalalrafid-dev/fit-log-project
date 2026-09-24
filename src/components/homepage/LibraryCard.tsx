import React from 'react'
import { GoClock } from "react-icons/go";
import { FaFireFlameCurved } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

import Image from 'next/image'
import { ILibrary } from '@/types/LibraryType';

const LibraryCard = ({item} : {item: ILibrary}) => {
    return (
        <div>
            <div className='bg-[#15171D] rounded-2xl'>
                <Image className='rounded-t-2xl w-full h-48 object-cover' width={392} height={192} src={item.image} alt='Library Image' />
                <div className='p-6'>
                    <div className='flex gap-2 mt-6 mb-3'>
                        <button className="bg-lightgreen text-black py-0.5 px-2.5 font-inter font-bold rounded-full">{item.muscleGroups}</button>
                        <button className="bg-lightgreen text-black py-0.5 px-2.5 font-inter font-bold rounded-full">{item.muscleGroups}</button>

                    </div>
                    <h3 className='font-bold text-white font-oswald text-lg' >{item.name}</h3>
                    <p className='text-offwhite font-inter text-[12px] pb-4 border-b border-[#20242E]'>{item.equipment}</p>
                    <div className='flex gap-x-4 items-center mt-3'>
                        <div className='flex items-center gap-2'>
                            <GoClock className='text-offwhite text-[12px]' />
                            <p className='text-offwhite text-[12px]'>{item.duration} min</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaFireFlameCurved className='text-offwhite text-[12px]' />
                            <p className='text-offwhite text-[12px]'>{item.caloriesBurned} kCal</p>

                        </div>
                        <div className='flex items-center gap-2'>
                            <CiStar className='text-offwhite text-[12px]' />
                            <p className='text-offwhite text-[12px]'>{item.rating}</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default LibraryCard