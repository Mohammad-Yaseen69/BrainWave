import ButtonGradient from './assets/svg/ButtonGradient'
import { Button, Header, Hero } from './Components'

function App() {

  return (
    <div className='flex w-full h-full overflow-x-hidden'>
      <Header />
      <Hero />
      <ButtonGradient />
    </div>
  )
}

export default App