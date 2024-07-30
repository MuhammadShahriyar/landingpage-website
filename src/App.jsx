
import './App.css'
import Footer from './components/contract+footer/footer'
import Features from './components/features/features'
import Goldernvisa from './components/golden-visa-cta/goldernvisa'
import Herosections from './components/herosection/herosections'
import Partnership from './components/partership/partnership'
// import Partners from './components/partners/partners'
import Productbig from './components/products-big/productbig'
import Productscard from './components/productscard/productscard'
import Roadmap from './components/roadmap/roadmap'
import Team from './components/team/team'

function App() {

  return (
    <>
    <Herosections></Herosections>
    {/* <Partners></Partners> */}
    <Features></Features>
    <Partnership></Partnership>
    <Productscard></Productscard>
    <Productbig></Productbig>
    <Goldernvisa></Goldernvisa>
    <Team></Team>
    <Roadmap></Roadmap>
    <Footer></Footer>
    </>
  )
}

export default App
