import { Section, Heading, Button } from '../'
import { collabContent, collabText, collabApps } from '../../constant'
import { brainwaveSymbol, check } from '../../assets'
import { LeftCurve, RightCurve } from '../Design/Collaboration'

import React from 'react'

const CollabCircle = () => {
    return (

        <div className='flex relative rounded-full aspect-square w-[22rem] scale-75 sm:scale-100 border border-n-6'>
            <div className='flex rounded-full aspect-square w-[15rem] border scale-75 sm:scale-100 m-auto border-n-6'>
                <div className='flex rounded-full m-auto w-[6rem] p-0.5 bg-conic-gradient aspect-square'>
                    <div className='flex justify-center items-center rounded-full w-full h-full bg-n-8'>
                        <img
                            src={brainwaveSymbol}
                            width={48}
                            height={48}
                            alt="brainwave"
                        />
                    </div>
                </div>
            </div>
            <ul className=''>
                {collabApps.map((item, index) => (
                    <li key={item.id} className={`absolute rotate-${index * 45} h-1/2 top-0 left-1/2 origin-bottom -ml-[2rem]`}>
                        <div className={`relative
                flex w-[3.2rem] -top-[1.6rem] h-[3.2rem] justify-center items-center bg-n-7 border
                 border-n-1/15 rounded-xl -rotate-${index * 45}`}
                        >
                            <img
                                src={item.icon}
                                alt={item.title}
                                width={item.width}
                                height={item.height}
                            />
                        </div>
                    </li>
                ))}
            </ul>
            <LeftCurve />
            <RightCurve />
        </div>
    )
}

export default CollabCircle