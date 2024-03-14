import { useRef } from 'react'
import { Button, Section } from '../'
import { curve, heroBackground, robot } from '../../assets/index'
import { BackgroundCircles, BottomLine, Gradient } from '../Design/Hero'
import { heroIcons, } from '../../constant'
import { ScrollParallax } from 'react-just-parallax'

const Hero = () => {
    const parallaxRef = useRef(null)

    return (
        <Section
            className="-my-[5.25]"
            paddings="pt-[12rem] "
            crosses
            crossesOffset="lg:translate-y-[5.28rem]"
            id="hero"
        >

            <div ref={parallaxRef} className='container relative '>
                <div className='text-center mb-[4rem] lg:pt-[2rem] sm:w-full max-w-[55rem]  relative mx-auto'>
                    <h1 className='h1 mb-6'>
                        Explore the Possibilities of AI Chatting
                        with <span className='relative'>
                            Brainwave
                            <img src={curve} className='w-full absolute top-full left-0 xl:-mt-2' alt="" />
                        </span>
                    </h1>
                    <p className='body-1 max-w-[50rem] mx-auto mb-6 lg:mb-10 text-n-2 '>
                        Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.
                    </p>
                    <Button white>
                        Get Started
                    </Button>
                </div>

                <div className=' relative mx-auto xl:mb-24 max-w-[20rem] sm:max-w-5xl'>
                    <div className='relative rounded-2xl bg-conic-gradient p-0.5'>
                        <div className='relative bg-n-8 rounded-[1rem]'>
                            <div className='bg-n-10 h-[1.5rem] rounded-t-[0.9rem]' />
                            <div className='aspect-[33/40] md:aspect-[688/490] lg:aspect-[1024/490] overflow-hidden  rounded-b-[0.9rem]'>
                                <img src={robot}
                                    className= 'z-3 w-full scale-[1.7] lg:-translate-y-[23%]  md:scale-100  md:-translate-y-[10%] translate-y-[8%]'
                                    width={1024}
                                    height={490}
                                    alt="robot"
                                />
                            </div>
                            <ScrollParallax isAbsolutelyPositioned >
                                <ul className='hidden xl:flex absolute -left-[5.5rem] 
                                bottom-[7.8rem] backdrop-blur p-1 rounded-2xl bg-n-9/40 border-n-1/10 border'>
                                    {heroIcons.map((icon, idx) => (
                                        <li key={idx} className='p-5'>
                                            <img src={icon} alt="" />
                                        </li>
                                    ))}
                                </ul>
                            </ScrollParallax>

                            <ScrollParallax isAbsolutelyPositioned>
                                <ul className='hidden xl:flex absolute -right-[5.5rem] 
                                bottom-[13rem] backdrop-blur p-1 rounded-2xl bg-n-9/40 border-n-1/10 border'>
                                    {heroIcons.map((icon, idx) => (
                                        <li key={idx} className='p-5'>
                                            <img src={icon} alt="" />
                                        </li>
                                    ))}
                                </ul>
                            </ScrollParallax>
                        </div>
                        <Gradient />
                    </div>
                    <div className="absolute -z-3 -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                        <img
                            src={heroBackground}
                            className="w-full"
                            width={1440}
                            height={1800}
                            alt="hero"
                        />
                    </div>
                    <BackgroundCircles parallaxRef={parallaxRef} />

                </div>
            </div>
            <BottomLine />
        </Section>
    )
}

export default Hero