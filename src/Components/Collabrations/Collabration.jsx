import { Section, Heading, Button, CollabCircle } from '../'
import { collabContent, collabText } from '../../constant'
import {  check } from '../../assets'


const Collabration = () => {
    return (
        <Section
            crosses
            crossesOffset="lg:translate-y-[5.28rem]"
        >

            <div className='flex flex-col lg:flex-row gap-10 justify-between p-14'>

                <div className='flex flex-col gap-15 sm:px-3 w-full'>
                    <Heading className="xl:max-w-[70%] text-left leading-[5rem] mt-0" align="left" title="AI Chat App for seamless collaboration" />

                    {collabContent.map((item, index) => (
                        <div key={index} className='flex flex-col gap-3'>
                            <div className={`flex gap-4 ${item.title && "-mt-6"}`}>
                                <img src={check} alt="" />
                                <p className={`body-1 text-[1rem] `}>{item.title}</p>
                            </div>
                            {item.text && <p className='body-1 text-base text-n-3/80 font-extralight sm:max-w-[50%] '>{item.text}</p>}
                        </div>
                    ))}

                    <Button className="w-[10rem]">
                        Try it now
                    </Button>
                </div>

                <div className='flex flex-col gap-9 justify-center items-center lg:gap-28 lg:mr-9'>
                    <p className='body-1 text-base text-n-3/80 font-extralight lg:w-[65%]'>{collabText}</p>
                    <CollabCircle />
                </div>
            </div>

        </Section>
    )
}

export default Collabration