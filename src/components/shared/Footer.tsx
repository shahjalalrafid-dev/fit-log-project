import Link from 'next/link'
import React from 'react'
import FooterImage from '@/assets/logo.png'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='bg-maintheme opacity-95'>
            <section className='container mx-auto px-5 pt-25 pb-8'>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-4 py-6 text-center lg:text-left'>
                    <Link href='/'>
                        <div className='flex gap-2.5 items-center justify-center lg:justify-start'>
                            <div>
                                <Image width={28} height={28} src={FooterImage} alt='Logo Image' />
                            </div>
                            <h6 className='font-oswald font-extrabold text-lg text-white'>FITLOG</h6>
                        </div>
                    </Link>
                    <div>
                        <p className='text-offwhite font-inter text-[12px] font-medium'>
                            © 2026 FitLog — Workout Library. Train hard, log honest.
                        </p>
                    </div>
                </div>

            </section>
        </footer>
    )
}

export default Footer