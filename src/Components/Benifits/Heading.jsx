import React from 'react'

const Heading = ({ title, className }) => {
    return (
        <div>
            <h1 className={`text-2xl lg:text-5xl sm:text-4xl mt-10 lg:-mt-10 text-center ${className || ""}`}>
                {title}
            </h1>



        </div>
    )
}

export default Heading