'use client'

import { PlanContextValue } from '@/context/PlanContext'
import { ILibrary } from '@/types/LibraryType'
import React, { useContext } from 'react'
import { FaRegCalendarCheck } from 'react-icons/fa6'
import { toast } from 'react-toastify'

const TodayButton = ({item} : {item:ILibrary}) => {
    const {plan, setPlan} = useContext(PlanContextValue); 

    const handleToadayButton = () => {
        setPlan([...plan, item]);
        toast.success(`You have Added ${item.name} for today's plan`);
    }


  return (
    <button className='mt-7 px-6 py-3 bg-lightgreen text-black font-inter font-bold text-[12px] rounded-md cursor-pointer flex gap-1 items-center' onClick={() => handleToadayButton()} > <FaRegCalendarCheck className='text-[12px]' /> Add to today's plan</button>
  )
}

export default TodayButton