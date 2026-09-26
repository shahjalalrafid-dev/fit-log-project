'use client'
import { PlanContextValue } from '@/context/PlanContext';
import { ILibrary } from '@/types/LibraryType';
import React, { useContext } from 'react'
import { FaRegBookmark } from 'react-icons/fa6'
import { toast } from 'react-toastify';

const SavedLaterButton = ({ item }: { item: ILibrary }) => {


  const { save, setSave } = useContext(PlanContextValue);

  const handleSaveButton = () => {

    const duplicate = save.find((article: ILibrary) => article.id === item.id);
    if (duplicate) {
      setSave([...save]);
      toast.error(`You have already added it for saved plan`);
    } else {
      setSave([...save, item]);
      toast.success(`You have Added ${item.name} for saved plan`);
    }

  }


  return (
    <button className='mt-7 px-6 py-3 bg-maintheme text-offwhite border border-[#374151] font-inter font-bold text-[12px] rounded-md cursor-pointer' onClick={() => handleSaveButton()}> <FaRegBookmark className='inline-block' /> Save for later</button>
  )
}

export default SavedLaterButton