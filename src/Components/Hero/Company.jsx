import React from 'react'
import { companyLogos } from '../../constant'


const Company = () => {
  return (
    <div className='hidden lg:flex flex-col justify-center items-center gap-20'>
        <h5 className=' text-n-13/80 text-sm font-semibold'>HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT</h5>

        <div className='flex flex-wrap justify-evenly w-full gap-8'>
            {companyLogos.map((logo, index) => (
                <img key={index} src={logo} alt="" />
            ))}
        </div>
    </div>
  )
}

export default Company