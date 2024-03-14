import { Section, Heading } from '../'
import { benefits } from '../../constant'
import { GradientLight } from '../Design/Benefits'
import Arrow from '../../assets/svg/Arrow'

const Benifits = () => {
    return (
        <Section
            id="features"
        >
            <div className='container flex flex-col justify-center items-center gap-15 relative z-2'>
                <Heading />

                <div className='flex flex-wrap gap-10 mb-7'>
                    {benefits.map((item, idx) => (
                        <div key={idx}
                            className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'
                            style={{
                                backgroundImage: `url(${item.backgroundUrl})`
                            }}
                        >
                            <div className='relative select-none z-2 p-[2.4rem] justify-start flex flex-col gap-7'>
                                <h5 className='text-xl'>{item.title}</h5>
                                <h6 className='text-n-2/80 font-thin'>{item.text}</h6>

                                <div className='w-full flex justify-between mt-8 items-center'>
                                    <img src={item.iconUrl} alt="" />
                                    <div className='flex'>
                                        <h5 className='font-code  font-extrabold text-xs'>EXPLORE MORE</h5>
                                        <Arrow />
                                    </div>
                                </div>

                                {item.light && <GradientLight />}

                                <div className='absolute -z-4 inset-0.5 bg-n-8'
                                    style={{ clipPath: "url(#benifits)" }}
                                >
                                    <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                        {item.imageUrl && (
                                            <img
                                                src={item.imageUrl}
                                                width={380}
                                                height={362}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Benifits