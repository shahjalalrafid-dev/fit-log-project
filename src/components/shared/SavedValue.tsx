'use client'

import { PlanContextValue } from '@/context/PlanContext';
import Link from 'next/link'
import React, { useContext } from 'react'

const SavedValue = () => {

    const {save} = useContext(PlanContextValue); 

    return (
        <Link href='/myplanpage'>

            <div className='flex items-center gap-2'>
                <h6 className='font-inter text-[12px] text-offwhite '>Saved</h6>
                <div className='w-5 h-5 bg-lightgreen rounded-full flex justify-center items-center'>
                    <p className='font-inter font-bold'>{save.length}</p>

                </div>
            </div>


        </Link>
    )
}

export default SavedValue