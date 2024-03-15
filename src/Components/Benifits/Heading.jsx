import React from 'react'

const Heading = ({ title, className , align}) => {
    return (
        <div>
            <h1 className={`${align || "text-center"} ${className || "lg:-mt-10 "} text-2xl lg:text-5xl sm:text-4xl mt-10 `}>
                {title}
            </h1>



        </div>
    )
}

export default Heading