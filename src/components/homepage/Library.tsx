import { ILibrary } from '@/types/LibraryType';
import LibraryCard from './LibraryCard';
import React from 'react'

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


const Library = async() => {
    const libraryData = await getLibraryCard();
    return (
        <section className='bg-maintheme opacity-95 px-5'>
            <div className='container mx-auto pt-16'>
                <h2 className='font-oswald font-bold text-3xl text-white '>THE LIBRARY</h2>
                <p className='font-inter text-sm text-offwhite'>Twelve lifts covering every major muscle group.</p>
                <div className='mt-8 grid grid-cols-3 gap-6'>
                    {
                        libraryData.slice(0,9).map((item:ILibrary, index:number) =>  
                            <LibraryCard key={index} item = {item} />
                        )
                    }

                    


                </div>

            </div>
        </section>
    )
}

export default Library