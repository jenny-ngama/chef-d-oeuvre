
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Body from './Composants/Body'
import Header from './Composants/Header'
import Footer from './Composants/Footer'
import About from './Composants/About'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route  path='/' element={<Body/>} />
        <Route  path='/about' element={<About/>} />
      </Routes>
      <Footer/>

      </BrowserRouter>
    </>

  )
}

export default App
