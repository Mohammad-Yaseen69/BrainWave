import { Section, Heading, Button } from '../'
import { collabContent, collabText, collabApps } from '../../constant'
import { brainwaveSymbol, check } from '../../assets'


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

                <div className='flex flex-col gap-9 justify-center items-center lg:gap-28 lg:mr-11'>
                    <p className='body-1 text-base text-n-3/80 font-extralight lg:w-[65%]'>{collabText}</p>

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
                    </div>
                </div>
            </div>

        </Section>
    )
}

export default Collabration