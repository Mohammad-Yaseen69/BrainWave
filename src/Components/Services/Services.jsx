import { Section, Heading, Generating } from '../'
import { service1, service2, service3, check, play } from '../../assets'
import { brainwaveServices, brainwaveServicesIcons } from '../../constant'
import { Gradient, PhotoChatMessage, VideoBar, VideoChatMessage } from '../Design/Services'
import ServiceIcons from './ServiceIcons'

const Services = () => {
    return (
        <Section id="how-to-use" className="pt-9">
            <div className='container'>
                <Heading align="text-center" text="Brainwave unlocks the potential of AI-powered applications" title="Generative AI made for creators." />

                <div className='relative mt-6'>
                    <div className=' relative z-1 flex items-center p-8 mb-5 h-[35rem] md:h-[39rem] xl:h-[46rem] lg:p-20 overflow-hidden border border-n-1/10 rounded-3xl'>
                        <div className='absolute top-0 left-0 h-full w-full pointer-events-none  lg:w-auto'>
                            <img
                                src={service1}
                                alt="service1"
                                className='object-cover w-full h-full md:object-right'
                                width={800}
                                height={730}
                            />
                            <Gradient />
                        </div>

                        <div className='relative  md:left-1/2 lg:left-3/4 z-1 md:max-w-[17rem]'>
                            <Heading
                                title="Smartest AI"
                                text="Brainwave unlocks the potential of AI-powered applications"
                                align="text-left"
                                className="lg:text-3xl mb-4"
                            />

                            <ul className="body-2 mt-10">
                                {brainwaveServices.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start py-4 border-t border-n-6"
                                    >
                                        <img width={24} height={24} src={check} />
                                        <p className="ml-4 whitespace-nowrap">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Generating className="absolute left-4 right-3 bottom-4 border border-n-1/10 
                        lg:left-1/2 lg:-translate-x-1/2 lg:bottom-8"/>
                    </div>

                    <div className='grid lg:grid-cols-2 gap-5 z-1 '>
                        <div className='h-[35rem] lg:h-[46rem] relative  border border-n-1/10 overflow-hidden rounded-3xl'>
                            <div className='absolute inset-0'>
                                <img
                                    src={service2}
                                    alt="robot"
                                    className='object-cover w-full h-full'
                                    width={630}
                                    height={750}
                                />
                            </div>
                            <div className='absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-16'>
                                <h4 className="h4 mb-4">Photo editing</h4>
                                <p className="body-2 mb-[3rem] text-n-3">
                                    Automatically enhance your photos using our AI app&apos;s
                                    photo editing feature. Try it now!
                                </p>
                            </div>
                            <PhotoChatMessage />
                        </div>

                        <div className='lg:h-[46rem] bg-n-7 flex flex-col gap-7 items-center justify-center relative border border-n-1/10 overflow-hidden rounded-3xl'>
                            <div className='px-3 md:px-10'>
                                <Heading
                                    title="Video generation"
                                    text="The world’s most powerful AI photo and video art generation engine. What will you create?"
                                    align="text-left"
                                    className="lg:text-3xl pb-4"
                                />

                                <div className='mt-9 flex items-center justify-between'>
                                    {brainwaveServicesIcons.map((item, index) => (
                                        <ServiceIcons index={index} item={item} />
                                    ))}
                                </div>

                            </div>
                            <div className='flex-1 w-[95%]  m-5 relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]'>
                                <img
                                    src={service3}
                                    width={520}
                                    height={400}
                                    className='object-cover w-full h-full'
                                    alt=""
                                />
                                <VideoChatMessage />
                                <VideoBar />
                            </div>
                        </div>
                    </div>

                    <Gradient />
                </div>
            </div>
        </Section>
    )
}

export default Services