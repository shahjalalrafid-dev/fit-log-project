'use client'
import LogoImage from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import PlanValue from './PlanValue'
import SavedValue from './SavedValue'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const pathName = usePathname();

    const isWorkOutActive = pathName === '/allplans';
    const isPlanActive = pathName === '/myplanpage';

    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);





    return (
        <nav className='bg-maintheme opacity-95 '>
            <section className='container mx-auto pt-6.5 pb-18.5 px-5 hidden lg:block'>
                <div className='flex justify-between items-center'>
                    <Link href='/' >

                        <div className='flex gap-2.5 items-center'>
                            <div>
                                <Image width={28} height={28} src={LogoImage} alt='Logo Image' />
                            </div>
                            <h6 className='font-oswald font-extrabold text-lg text-white'>FITLOG</h6>
                        </div>

                    </Link>

                    <div className='flex gap-1'>
                        <Link href='/allplans' >
                            <button className={`px-4 py-1.5 text-lightgreen font-semibold font-inter bg-theme rounded-full cursor-pointer text-[12px] ${isWorkOutActive ? "border border-lightgreen" : "border-none"} `} >Workouts</button>

                        </Link>
                        <Link href='/myplanpage'>
                            <button className={`cursor-pointer py-1.5 px-4 font-inter font-medium text-[12px] text-offwhite ${isPlanActive ? "border border-lightgreen rounded-full" : "border-none"} `}>My Plan</button>

                        </Link>

                    </div>
                    <div className='flex gap-6'>

                        <PlanValue />
                        <SavedValue />



                    </div>

                </div>

            </section>
            {/* --- MOBILE SECTION --- */}
            <section className='container mx-auto py-5 px-5 block lg:hidden'>
                <div className='flex justify-between items-center'>
                    {/* Mobile Logo */}
                    <Link href='/'>
                        <div className='flex gap-2.5 items-center'>
                            <div>
                                <Image width={28} height={28} src={LogoImage} alt='Logo Image' />
                            </div>
                            <h6 className='font-oswald font-extrabold text-lg text-white'>FITLOG</h6>
                        </div>
                    </Link>

                    {/* Hamburger Menu Button (react-icons) */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="cursor-pointer focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <HiX className="text-lightgreen text-3xl" />
                        ) : (
                            <HiMenu className="text-lightgreen text-3xl" />
                        )}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMobileMenuOpen && (
                    <div className="flex flex-col items-center gap-6 mt-6 pb-4 animate-fade-in-down">
                        <div className='flex gap-4'>
                            <Link href='/allplans'>
                                <button
                                    className={`px-4 py-2 text-lightgreen font-semibold font-inter bg-theme rounded-full cursor-pointer text-[14px] ${isWorkOutActive ? "border border-lightgreen" : ""}`}
                                    onClick={() => { setIsMobileMenuOpen(false); }}
                                >
                                    Workouts
                                </button>
                            </Link>
                            <Link href='/myplanpage'>
                                <button
                                    className={`cursor-pointer py-2 px-4 font-inter font-medium text-[14px] text-offwhite border-none ${isPlanActive ? "border border-lightgreen rounded-full" : ""}`}
                                    onClick={() => {  setIsMobileMenuOpen(false); }}
                                >
                                    My Plan
                                </button>
                            </Link>
                        </div>
                        <div className='flex gap-8'>
                            <PlanValue />
                            <SavedValue />
                        </div>
                    </div>
                )}
            </section>

        </nav>
    )
}

export default Navbar