// import Image from 'next/image'
import { ILibrary } from '@/types/LibraryType';
import Image from 'next/image';
import React from 'react'
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import TodayButton from '@/components/buttonfunction/TodayButton';
import SavedLaterButton from '@/components/buttonfunction/SavedLaterButton';

interface IAllPlanDetails {
    params: Promise<{
        id: string;
    }>
}

const getLibraryCard = async () => {

    try {
        const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error Fetching Data", error);
        return [];
    }

}



const PlanDetails = async ({ params }: IAllPlanDetails) => {

    const { id } = await params;

    const libraryData = await getLibraryCard();

    const item = libraryData.find((item: ILibrary) => item.id === Number(id)) as ILibrary;

    return (

        <section className='bg-maintheme opacity-95 px-5'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-2 gap-14'>

                    <div>
                        <Image src={item.image} alt='Image' width={300} height={300} className='w-full object-cover rounded-2xl' ></Image>

                    </div>
                    <div>
                        <h3 className='font-bold text-white font-oswald text-4xl' >{item.name}</h3>
                        <p className='text-offwhite font-inter text-base mt-4 mb-10'>{item.description}</p>
                        <div className='flex gap-2 mt-6 mb-7'>
                            <button className="bg-lightgreen text-black py-0.5 px-2.5 font-inter font-bold rounded-full">{item.muscleGroups[0]}</button>
                            {
                                item.muscleGroups[1] && (
                                    <button className="bg-lightgreen text-black py-0.5 px-2.5 font-inter font-bold rounded-full">{item.muscleGroups[1]}</button>
                                )
                            }


                        </div>
                        <table className='bg-[#151922] text-offwhite font-inter text-[12px] w-full rounded-2xl '>
                            <tbody>
                                <tr className=' border-b border-[#1E2330]'>
                                    <td className='font-bold tracking-wider pl-6 py-4'>EQUIPMENT</td>
                                    <td className='text-right pr-6 py-4 font-inter'>{item.equipment}</td>
                                </tr>
                                <tr className=' border-b border-[#1E2330]'>
                                    <td className='font-bold tracking-wider pl-6 py-4'>DIFFICULTY</td>
                                    <td className='text-right pr-6 py-4 font-inter'>{item.difficulty}</td>
                                </tr>
                                <tr className=' border-b border-[#1E2330]'>
                                    <td className='font-bold tracking-wider pl-6 py-4'>EQUIPMENT</td>
                                    <td className='text-right pr-6 py-4 font-inter'>{item.equipment}</td>
                                </tr>
                                <tr className=' border-b border-[#1E2330]'>
                                    <td className='font-bold tracking-wider pl-6 py-4'>REPS</td>
                                    <td className='text-right pr-6 py-4 font-inter'>{item.reps}</td>
                                </tr>
                                <tr className=' border-b border-[#1E2330]'>
                                    <td className='font-bold tracking-wider pl-6 py-4'>DURATION</td>
                                    <td className='text-right pr-6 py-4 font-inter'>{item.duration}</td>
                                </tr>
                                <tr className=' border-b border-[#1E2330]'>
                                    <td className='font-bold tracking-wider pl-6 py-4'>CALORIES</td>
                                    <td className='text-right pr-6 py-4 font-inter'>{item.caloriesBurned}</td>
                                </tr>
                                <tr className=' border-b border-[#1E2330]'>
                                    <td className='font-bold tracking-wider pl-6 py-4'>RATING</td>
                                    <td className='text-right pr-6 py-4 font-inter'>{item.rating}</td>
                                </tr>
                            </tbody>

                        </table>

                        <h4 className='text-base font-extrabold text-white font-inter mt-8 mb-4'>INSTRUCTIONS</h4>
                        <ol className='list-decimal list-inside font-inter space-y-3' >
                            <li className='text-[#D1D5DB]'>{item.instructions[0]}</li>
                            <li className='text-[#D1D5DB]'>{item.instructions[1]}</li>
                            <li className='text-[#D1D5DB]'>{item.instructions[2]}</li>
                            <li className='text-[#D1D5DB]'>{item.instructions[3]}</li>

                        </ol>
                        <div className='flex gap-4' >
                            <TodayButton item = {item}  />
                            <SavedLaterButton item = {item} />
                        </div>


                    </div>

                </div>


            </div>

        </section>
    )
}

export default PlanDetails