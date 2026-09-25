
import LogoImage from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import PlanValue from './PlanValue'
import SavedValue from './SavedValue'

const Navbar = () => {

    




    return (
        <nav className='bg-maintheme opacity-95'>
            <section className='container mx-auto pt-6.5 pb-18.5 px-5'>
                <div className='flex justify-between items-center'>
                    <Link href='/' >

                        <div className='flex gap-2.5 items-center'>
                            <div>
                                <Image width={28} height={28} src={LogoImage} alt='Logo Image' />
                            </div>
                            <h6 className='font-oswald font-extrabold text-lg text-white'>FITLOG</h6>
                        </div>

                    </Link>

                    <div>
                        <Link href='/allplans' >
                            <button className="px-4 py-1.5 text-lightgreen font-semibold font-inter bg-theme rounded-full cursor-pointer text-[12px] ">Workouts</button>

                        </Link>
                        <Link href='/myplanpage'>
                            <button className='cursor-pointer py-1.5 px-4 font-inter font-medium text-[12px] text-offwhite '>My Plan</button>

                        </Link>

                    </div>
                    <div className='flex gap-6'>

                        <PlanValue />
                        <SavedValue />



                    </div>

                </div>

            </section>

        </nav>
    )
}

export default Navbar