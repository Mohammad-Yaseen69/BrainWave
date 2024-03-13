import React from 'react'
import { curve, heroBackground, robot } from '../../assets/index'
import { Button, Section } from '../'

const Hero = () => {
    return (
        <Section
            className="pt-[12rem] -my-[5.25]"
            crosses
            crossesOffset="lg:translate-y-[5.28rem]"
            id="hero"
        >

            <div className='container relative '>
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

                <div className='relative mx-auto xl:mb-24 max-w-[20rem] sm:max-w-5xl'>
                    <div className='relative rounded-2xl bg-conic-gradient p-0.5'>
                        <div className='relative bg-n-8 rounded-[1rem]'>
                            <div className='bg-n-10 h-[1.5rem] rounded-t-[0.9rem]' />
                            <div className='aspect-[33/40] md:aspect-[688/490] lg:aspect-[1024/490] overflow-hidden  rounded-b-[0.9rem]'>
                                <img src={robot}
                                    className='w-full scale-[1.7] lg:-translate-y-[23%]  md:scale-100  md:-translate-y-[10%] translate-y-[8%]'
                                    width={1024}
                                    height={490}
                                    alt="robot"
                                />
                            </div>
                        </div>
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

                </div>
            </div>
        </Section>
    )
}

export default Hero