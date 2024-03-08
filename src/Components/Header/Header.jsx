import React from 'react'
import { brainwave } from '../../assets'
import { Button } from '../'
import { navigation as navLinks } from '../../constant'
import { useLocation } from 'react-router-dom'

const Header = () => {


    return (
        <div className='fixed py-[1.30rem] bg-n-8/90 backdrop-blur border-b border-n-6 top-0 left-0 flex z-20 items-center  justify-between w-full'>
            <div className='px-5 lg:px-8'>
                <a href="#">
                    <img src={brainwave} alt="" width={190} height={40} />
                </a>
            </div>
            <nav className='hidden flex-1 lg:flex '>
                <div className=' flex items-center  w-full  justify-evenly'>
                    {navLinks.map((link, index) => (
                        <a href={link.url} key={index} className={`text-n-3/90 font-code text-sm font-bold ${link.onlyMobile && "lg:hidden"} lg:text-xs hover:text-n-1`}>{link.title.toUpperCase()}</a>
                    ))}
                </div>

                <div className='flex px-5 lg:px-8 items-center justify-center gap-9'>
                    <a href="" className='text-n-3/90 whitespace-nowrap font-code text-sm font-extrabold lg:text-xs hover:text-n-1'>NEW ACCOUNT</a>
                    <Button className="whitespace-nowrap hidden lg:flex">
                        Sign In
                    </Button>
                </div>
            </nav>
        </div>
    )
}

export default Header