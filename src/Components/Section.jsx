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


            <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
            <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />


                {crosses && (
                    <>
                        <div
                            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${crossesOffset && crossesOffset
                                } pointer-events-none lg:block xl:left-10 right-10`}
                        />
                        <SectionSvg crossesOffset={crossesOffset} />
                    </>
                )}
        </div >
    )
}

export default Section