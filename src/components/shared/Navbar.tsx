
import LogoImage from '@/assets/logo.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='bg-[#0C0D10] opacity-95'>
        <section className='container mx-auto py-6.5 px-5'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2.5 items-center'>
                    <div>
                        <Image width={28} height={28} src={LogoImage} alt='Logo Image' />
                    </div>
                    <h6 className='font-oswald font-extrabold text-lg text-white'>FITLOG</h6>
                </div>
                <div>
                    <button className="px-4 py-1.5 text-lightgreen font-semibold font-inter bg-theme rounded-full cursor-pointer text-[12px] ">Workouts</button>
                    <button className='cursor-pointer py-1.5 px-4 font-inter font-medium text-[12px] text-offwhite '>My Plan</button>
                </div>
                <div className='flex gap-6'>
                    <div className='flex items-center gap-2'>
                        <h6 className='text-[#D1D5DB] font-inter text-[12px]  '>Plan</h6>
                        <div className='w-5 h-5 bg-lightgreen rounded-full flex justify-center items-center'>
                            <p className='font-inter font-bold'>0</p>

                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h6 className='font-inter text-[12px] text-offwhite '>Saved</h6>
                        <div className='w-5 h-5 bg-lightgreen rounded-full flex justify-center items-center'>
                            <p className='font-inter font-bold'>0</p>

                        </div>
                    </div>
                    
                </div>

            </div>

        </section>

    </nav>
  )
}

export default Navbar