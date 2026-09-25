'use client'

import { ILibrary } from '@/types/LibraryType'
import React, { useState } from 'react'
import { createContext } from 'react'

interface IPlanContext {
    plan: ILibrary[],
    setPlan: React.Dispatch<React.SetStateAction<ILibrary[]>>,
    save: ILibrary[],
    setSave: React.Dispatch<React.SetStateAction<ILibrary[]>>

}

export const PlanContextValue = createContext<IPlanContext>({
    plan: [],
    setPlan: () => {},
    save: [],
    setSave: () => {}
});


const PlanContext = ({children} : {children: React.ReactNode}) => {

    const [plan, setPlan] = useState<ILibrary[]>([]);
    const [save, setSave] = useState<ILibrary[]>([]);
    const shareData = {
        plan,
        setPlan,
        save, 
        setSave
    }

  return (
    <PlanContextValue.Provider value = {shareData}>{children}</PlanContextValue.Provider>
  )
}

export default PlanContext