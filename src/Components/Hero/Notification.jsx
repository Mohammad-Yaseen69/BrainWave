import React from 'react'
import { notificationImages } from '../../constant'
import { notification1 } from '../../assets'

const Notification = () => {
    return (
        <div className='hidden xl:flex absolute -right-[5.5rem] 
    bottom-[13rem] backdrop-blur gap-4 p-4  rounded-2xl bg-n-9/40 border-n-1/10 border'>
            <div>
                <img
                    src={notification1}
                    className='size-16 rounded-2xl'
                    alt="" />
            </div>

            <div className='flex-1'>
                <h6 className='font-semibold text-base mb-1'>Code generating</h6>
                <div className='flex gap-10'>
                    <div className='flex gap-1'>
                        {notificationImages.map((img, idx) => (
                            <img className='rounded-full size-6' src={img} alt="" key={idx} />
                        ))}
                    </div>

                    <h6 className='font-sans text-n-13'>1m ago</h6>
                </div>
            </div>
        </div>
    )
}

export default Notification