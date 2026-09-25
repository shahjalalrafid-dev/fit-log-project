import { PlanContextValue } from '@/context/PlanContext';
import { ILibrary } from '@/types/LibraryType'
import React, { useContext } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { Bounce, toast } from 'react-toastify';

const RemoveTodaysButton = ({item} : {item: ILibrary}) => {

    const { plan , setPlan } = useContext(PlanContextValue);
    const handleRemoveButton = () => {
    
        setPlan(plan.filter((current) => current.id !== item.id));
        toast.warn(`You have removed ${item.name}`, {
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
    <RxCross1 className='text-offwhite cursor-pointer' onClick={() => handleRemoveButton() } />
  )
}

export default RemoveTodaysButton