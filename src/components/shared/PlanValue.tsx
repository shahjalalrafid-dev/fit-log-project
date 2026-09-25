'use client'

import { PlanContextValue } from '@/context/PlanContext';
import Link from 'next/link'
import React, { useContext } from 'react'

const PlanValue = () => {

    const {plan} = useContext(PlanContextValue); 

    return (
        <Link href='/myplanpage'>
            <div className='flex items-center gap-2'>
                <h6 className='text-[#D1D5DB] font-inter text-[12px]  '>Plan</h6>
                <div className='w-5 h-5 bg-lightgreen rounded-full flex justify-center items-center'>
                    <p className='font-inter font-bold'>{plan.length}</p>

                </div>
            </div>

        </Link>
    )
}

export default PlanValue