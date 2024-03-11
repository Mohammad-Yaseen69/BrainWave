import React from 'react'
import SectionSvg from '../assets/svg/SectionSvg'

const Section = ({
    paddings,
    className,
    crosses,
    id,
    crossesOffset,
    children,
}) => {
    return (
        <div id={id || ""} className={
            `
            relative
            w-full
           ${className || ""} 
           ${paddings || `py-8 lg:py-10 xl:py-16`} 
           ${crosses ? "lg:py-28 xl:py-36" : ""} 
          `}>
            
            {children}

            <div className='
              hidden md:block absolute top-0 left-5 h-full lg:left-7.5
             xl:left-11 bg-stroke-1 pointer-events-none w-0.25'
            />
            <div className='
              hidden md:block absolute top-0 right-5 h-full lg:right-7.5
             xl:right-11 bg-stroke-1 pointer-events-none w-0.25'
            />

            {crosses &&
                <>
                    <div className={`
                            ${crossesOffset && crossesOffset} 
                            absolute hidden top-0 left-7.5 lg:block right-7.5 lg:right-10 lg:left-10
                    `} />
                    <SectionSvg crossesOffset={crossesOffset}/>
                </>
            }
        </div>
    )
}

export default Section