import { Button, Heading, Section, Tagline } from '../'
import { check2, grid, loading1 } from '../../assets'
import { roadmap } from '../../constant'

const Roadmap = () => {
    return (
        <Section id="roadmap" className="pt-11">
            <div className='container relative'>
                <div className='flex items-center justify-center flex-col'>
                    <Heading title="What we’re working on" className="lg:mt-4" tag="READY TO GET STARTED" />
                </div>

                <div className='relative mt-10 grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]'>
                    {roadmap.map((item, index) => (
                        <div className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"
                            }`}>
                            <div className='relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15 w-full'>
                                <div className='absolute top-0 left-0 w-full'>
                                    <img
                                        className="w-full"
                                        src={grid}
                                        width={550}
                                        height={550}
                                        alt="Grid"
                                    />
                                </div>

                                <div className='relative z-1'>
                                    <div className='flex items-center justify-between max-w-[27rem] mb-8 md:mb-20'>
                                        <Tagline>
                                            {item.date}
                                        </Tagline>

                                        <div className='flex items-center px-4 py-1 bg-n-1 rounded text-n-8'>
                                            <img
                                                className="mr-2.5"
                                                src={item.status === "done" ? check2 : loading1}
                                                width={16}
                                                height={16}
                                            />
                                            <div className='tagline'>{item.status.toUpperCase()}</div>
                                        </div>

                                    </div>
                                    <div className="mb-10 md:-my-10 -mx-15">
                                        <img
                                            className="w-full"
                                            src={item.imageUrl}
                                            width={628}
                                            height={426}
                                            alt={item.title}
                                        />
                                    </div>

                                    <Heading title={item.title} text={item.text} align="text-left" className="md:text-xl lg:text-2xl" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center my-15'>

                    <Button className="">
                        OUR ROADMAP
                    </Button>
                </div>
            </div>
        </Section>
    )
}

export default Roadmap