import './App.css'
import Charts from './Components/Charts/Charts'
import Navbar from './Components/Navbar/Navbar'
import PriceOprtions from './Components/Navbar/PriceOptions/PriceOprtions'
import Phone from './Components/Phone/Phone'

function App() {
 

  return (
    <>
     <Navbar></Navbar>
     <PriceOprtions></PriceOprtions>
     <div className='container mx-auto my-5'>
      <h1 className='text-3xl lg:text-6xl font-semibold text-center my-10'> Charts </h1>
    <div>
    <Charts></Charts>
    </div>
    <Phone></Phone>
     </div>
  
      
    </>
  )
}

export default App
