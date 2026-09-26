import { ILibrary } from '@/types/LibraryType'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiStar } from 'react-icons/ci'
import { FaCheck, FaFireFlameCurved } from 'react-icons/fa6'
import { GoClock } from 'react-icons/go'
import { RxCross1 } from 'react-icons/rx'
import RemoveButton from './RemoveButton'
import RemoveTodaysButton from './RemoveTodaysButton'
import MarkAsDoneButton from './MarkAsDoneButton'

const TodaysPlanCard = ({ item }: { item: ILibrary }) => {
    return (
        <div className='p-4 bg-[#13161D] rounded-2xl grid grid-cols-2 justify-between mb-4'>

            <div className='flex gap-4'>
                <div className='w-36 h-20'>
                    <Image className='rounded-xl w-full h-full object-cover' src={item.image} alt='' width={36} height={36} ></Image>
                </div>
                <div>
                    <h4 className='font-bold text-white font-oswald text-base'>{item.name}</h4>
                    <p className='text-offwhite font-inter text-[12px]'>{item.equipment}</p>
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
            <div className='flex items-center gap-x-3 justify-self-end'>
                <Link href= {`/allplans/${item.id}`} >
                    <button className='text-white px-4.5 py-2.5 border border-offwhite text-[12px] bg-[#14171E] rounded-full cursor-pointer'>View Details</button>
                </Link>
                
                <MarkAsDoneButton />
                <RemoveTodaysButton item = {item} />

            </div>

        </div>
    )
}

export default TodaysPlanCard