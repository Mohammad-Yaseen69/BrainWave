import ButtonGradient from './assets/svg/ButtonGradient'
import { Header, Hero , Benifits , Collabration , Services} from './Components'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Header />
      <Hero />
      <Benifits />
      <Collabration />
      <Services />
      <ButtonGradient />
    </div>
  )
}

export default App