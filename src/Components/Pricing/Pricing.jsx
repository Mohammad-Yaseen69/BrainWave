import { Section, Heading, PricingCard } from '../'
import { smallSphere, stars } from '../../assets'
import { LeftLine, RightLine } from '../Design/Pricing'
import { pricing } from '../../constant'


const Pricing = () => {
    return (
        <Section
            id="pricing"
            className="overflow-hidden"
        >
            <div className='container z-2 relative'>
                <div className='hidden relative lg:flex justify-center mb-[6.5rem]'>
                    <img
                        src={smallSphere}
                        alt=""
                        className='relative z-1'
                        width={255}
                        height={255}
                    />

                    <div className='absolute pointer-events-none top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2'>
                        <img
                            src={stars}
                            alt="stars"
                            className='w-full'
                        />
                    </div>

                </div>
                <div className='flex  justify-center items-center flex-col'>
                    <Heading tag="GET STARTED WITH BRAINWAVE" title="Pay once, use forever" className="mt-4" />
                </div>

                <div className='relative mt-32'>
                    <div className='flex  max-lg:flex-wrap items-center gap-[1rem]'>
                        {pricing.map((pricing, index) => (
                            <PricingCard key={index}  item={pricing} index={index} />
                        ))}

                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Pricing