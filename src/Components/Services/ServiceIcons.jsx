import React from 'react'

const ServiceIcons = ({ item, index }) => {
    return (
        <div>
            <div className={`flex w-10 h-10 md:w-15 md:h-15 rounded-xl md:rounded-2xl
                                         ${index == 2 ? "scale-125 bg-conic-gradient p-0.25 overflow-hidden" : "bg-n-6 justify-center items-center"}`}
            >
                <div className={`${index == 2 && "w-full h-full rounded-xl md:rounded-2xl object-cover flex justify-center items-center bg-n-7"}`}>
                    <img
                        key={index}
                        src={item}
                        alt="service"
                        className="size-6"
                    />
                </div>
            </div>
        </div>
    )
}

export default ServiceIcons