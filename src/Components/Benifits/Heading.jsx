import { Tagline } from '../'

const Heading = ({ title, className, align, text, tag }) => {
    return (
        <>
            {tag &&
                <Tagline>
                    {tag}
                </Tagline>
            }
            <h1 className={`${align || "text-center"} ${className || "lg:-mt-10 "} text-2xl lg:text-5xl sm:text-4xl mt-10 `}>
                {title}
            </h1>

            {text && <p className={`body-1 ${align || "text-center"} text-base mt-3 text-n-3/80 font-extralight`}>{text}</p>}
        </>
    )
}

export default Heading