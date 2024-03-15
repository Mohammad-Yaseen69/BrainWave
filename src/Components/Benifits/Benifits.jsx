import { Section, Heading } from '../'
import { benefits } from '../../constant'
import BenifitCard from './BenifitCard'

const Benifits = () => {
    return (
        <Section
            id="features"
        >
            <div className='container flex flex-col justify-center items-center gap-15 relative z-2'>
                <Heading title={
                    <>
                        Chat Smarter, Not Harder <br /> with Brainwave
                    </>} />

                <div className='flex flex-wrap justify-center gap-10 mb-7'>
                    {benefits.map((item) => (
                        <BenifitCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Benifits