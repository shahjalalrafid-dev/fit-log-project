// import Image from 'next/image'
import { ILibrary } from '@/types/LibraryType';
import React from 'react'

interface IAllPlanDetails {
    params: Promise<{
        id: string;
    }>
}

const getLibraryCard = async() => {

    try {
        const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
        const data = await response.json();
        return data;
    }catch(error){
        console.log("Error Fetching Data", error);
        return [];
    }

}



const PlanDetails = async ({params} : IAllPlanDetails ) => {

    const {id} = await params;

    const libraryData = await getLibraryCard();

    const item = libraryData.find((item: ILibrary) => item.id === Number(id)) as ILibrary;

    return (

        <section>
            <div className='container mx-auto'>
                <div className='grid grid-cols-2'>

                    <div>
                        {/* <Image src={ } alt='' width={ } height={ } className='' ></Image> */}
                    </div>
                    <div>
                        <h3 className='font-bold text-white font-oswald text-4xl' >{item.name}</h3>
                        <p className='text-offwhite font-inter text-base'>hello</p>
                        <div className='flex gap-2 mt-6 mb-3'>
                            <button className="bg-lightgreen text-black py-0.5 px-2.5 font-inter font-bold rounded-full"></button>
                            <button className="bg-lightgreen text-black py-0.5 px-2.5 font-inter font-bold rounded-full"></button>

                        </div>

                        <h4 className='text-base font-extrabold'>Instructions</h4>
                        <p text-offwhite font-inter text-base>Lie on the bench with eyes under the bar and feet planted.</p>
                        <p text-offwhite font-inter text-base>Lie on the bench with eyes under the bar and feet planted.</p>
                        <p text-offwhite font-inter text-base>Lie on the bench with eyes under the bar and feet planted.</p>
                        <p text-offwhite font-inter text-base>Lie on the bench with eyes under the bar and feet planted.</p>
                        <p text-offwhite font-inter text-base>Lie on the bench with eyes under the bar and feet planted.</p>

                    </div>

                </div>


            </div>

        </section>
    )
}

export default PlanDetails