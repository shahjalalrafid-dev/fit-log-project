import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const MyPlanPage = () => {
  return (
    <section className='bg-maintheme opacity-95 '>
      <div className='container mx-auto px-5'>

        <h2 className='font-oswald font-bold text-3xl text-white'>MY PLAN</h2>
        <p className='text-offwhite font-inter text-[14px]'>Cap of five lifts for today. Finish them, then load more.</p>
        <div className='bg-[#13161D] px-6 py-8 rounded-2xl'>
          <div className='grid grid-cols-3 '>
            <div>
              <p className='text-offwhite font-inter text-[12px]'>Excercises</p>
              <h4 className='font-oswald font-bold text-4xl text-lightgreen'>3</h4>
            </div>
            <div>
              <p className='text-offwhite font-inter text-[12px]'>Minutes</p>
              <h4 className='font-oswald font-bold text-4xl text-white'>3</h4>
            </div>
            <div>
              <p className='text-offwhite font-inter text-[12px]'>Calories</p>
              <h4 className='font-oswald font-bold text-4xl text-white'>3</h4>
            </div>

          </div>


        </div>
        <div className='flex justify-between my-6 items-center'>

          <div className="tabs tabs-box bg-[#151921] text-offwhite  p-1 gap-1 rounded-xl">
            <input type="radio" name="my_tabs_1" className="tab text-offwhite bg-[#1f242D] px-9 py-2 rounded-lg font-inter font-bold" aria-label="Today's Plan" />
            <input type="radio" name="my_tabs_1" className="tab text-white bg-[#1f242D] px-9 py-2 rounded-lg font-inter font-bold" aria-label="Saved" defaultChecked />

          </div>

          <div className='flex items-center gap-x-2'>
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
        <div className='bg-[#101216] border border-[#282A2D] rounded-2xl py-24.5'>
          <div className='text-center'>
            <h4 className='uppercase font-oswald font-bold text-xl text-white'>Nothing Here Yet</h4>
            <p className='text-offwhite font-inter text-[14px] mt-2'>Browse the library and add a lift to get today moving.</p>
            <button className='mt-6 px-6 py-3 bg-lightgreen text-black font-inter font-bold text-[12px] rounded-full uppercase'>Go to Workouts</button>
          </div>

        </div>


      </div>
    </section>
  )
}

export default MyPlanPage