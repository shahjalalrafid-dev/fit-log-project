'use client'


import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa6'
import { Bounce, toast } from 'react-toastify';


const MarkAsDoneButton = () => {

    const [click, setClick] = useState(false);
    const handleMarkButton = () => {
        setClick(true);
        toast.info('You have successfully made this plan', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    return (
        <>

            {
                click ? <button className='px-6 py-3 bg-lightgreen text-black font-inter font-bold text-[12px] rounded-full cursor-pointer flex gap-1 items-center' onClick={handleMarkButton} >  Done</button> : (<button className='px-6 py-3 bg-lightgreen text-black font-inter font-bold text-[12px] rounded-full cursor-pointer flex gap-1 items-center' onClick={handleMarkButton} > <FaCheck className='text-[12px]' /> Mark as Done</button>)
            }


        </>



    )
}

export default MarkAsDoneButton
