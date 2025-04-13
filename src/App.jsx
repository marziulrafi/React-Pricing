import { Suspense } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Pricing from './components/options/Pricing';


const pricingPromise = fetch('pricing.json')
.then(res=>res.json());

function App() {

  return (
    <>
      
      <header>
        <Navbar/>
      </header>

      <main>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <Pricing pricingPromise = {pricingPromise}></Pricing>
        </Suspense>
      </main>
     
    </>
  )
}

export default App
