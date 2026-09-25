'use client'
import SavePlanCard from '@/components/shared/SavePlanCard';
import TodaysPlanCard from '@/components/shared/TodaysPlanCard';
import { PlanContextValue } from '@/context/PlanContext'
import React, { useContext, useState } from 'react'

const MyPlanPage = () => {


  const { plan, save } = useContext(PlanContextValue);

  const [click, setClick] = useState(false);

  const handleSaveButton = () => {
      setClick(true);
  }
  const handleTodayButton = () => {
      setClick(false);
  }

  return (
    <section className='bg-maintheme opacity-95 '>
      <div className='container mx-auto px-5'>

        <h2 className='font-oswald font-bold text-3xl text-white'>MY PLAN</h2>
        <p className='text-offwhite font-inter text-[14px]'>Cap of five lifts for today. Finish them, then load more.</p>
        <div className='bg-[#13161D] px-6 py-8 rounded-2xl'>
          <div className='grid grid-cols-3 '>
            <div>
              <p className='text-offwhite font-inter text-[12px]'>Excercises</p>
              {
                click ? <h4 className='font-oswald font-bold text-4xl text-lightgreen'>{save.length}</h4> : <h4 className='font-oswald font-bold text-4xl text-lightgreen'>{plan.length}</h4> 
              }
              
            </div>
            <div>
              <p className='text-offwhite font-inter text-[12px]'>Minutes</p>
              <h4 className='font-oswald font-bold text-4xl text-white'>{plan.reduce((sum, item) => sum + item.duration, 0)}</h4>
            </div>
            <div>
              <p className='text-offwhite font-inter text-[12px]'>Calories</p>
              <h4 className='font-oswald font-bold text-4xl text-white'>{plan.reduce((sum, item) => sum + item.caloriesBurned , 0 )}</h4>
            </div>

          </div>


        </div>
        <div className='flex justify-between my-6'>

          <div className="tabs w-full bg-maintheme opacity-95 text-offwhite  p-1 gap-1 rounded-xl">
            <input type="radio" name="my_tabs_6" className="tab text-offwhite bg-[#1f242D] px-9 py-2 rounded-lg font-inter font-bold" aria-label="Today's Plan" onClick={handleTodayButton} defaultChecked/>
            <div className="tab-content mt-6">

              {
                plan.length > 0 ? plan.map((item, index) => <TodaysPlanCard key={index} item={item} />) : <div className='bg-[#101216] border border-[#282A2D] rounded-2xl py-24.5'>
                  <div className='text-center'>
                    <h4 className='uppercase font-oswald font-bold text-xl text-white'>Nothing Here Yet</h4>
                    <p className='text-offwhite font-inter text-[14px] mt-2'>Browse the library and add a lift to get today moving.</p>
                    <button className='mt-6 px-6 py-3 bg-lightgreen text-black font-inter font-bold text-[12px] rounded-full cursor-pointer'>Go to Workouts</button>
                  </div>

                </div>
              }


            </div>

            <input type="radio" name="my_tabs_6" className="tab text-white bg-[#1f242D] px-9 py-2 rounded-lg font-inter font-bold" aria-label="Saved" onClick={handleSaveButton}  />
            <div className="tab-content mt-6">

              {
                save.length > 0 ? save.map((item, index) => <SavePlanCard key={index} item={item} />) : <div className='bg-[#101216] border border-[#282A2D] rounded-2xl py-24.5'>
                  <div className='text-center'>
                    <h4 className='uppercase font-oswald font-bold text-xl text-white'>Nothing Here Yet</h4>
                    <p className='text-offwhite font-inter text-[14px] mt-2'>Browse the library and add a lift to get today moving.</p>
                    <button className='mt-6 px-6 py-3 bg-lightgreen text-black font-inter font-bold text-[12px] rounded-full cursor-pointer'>Go to Workouts</button>
                  </div>
                </div>
              }


            </div>
            <div className='flex items-center gap-x-2 ml-auto'>
              <p className='text-offwhite font-inter text-[12px]'>Sort By</p>
              <div>
                <select defaultValue="Pick a font" className="select select-ghost bg-[#1f242D] text-offwhite outline-none font-inter text-[12px]">

                  <option>Durartion</option>
                  <option>Calories</option>
                  <option>Rating</option>
                </select>
              </div>


            </div>


          </div>


        </div>







      </div>
    </section>
  )
}

export default MyPlanPage