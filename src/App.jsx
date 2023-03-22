import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Countries from './Components/Countries/Countries'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <h2 className='page-title'>Let's start a world tour!</h2>
      <Countries></Countries>
    </>
  )
}

export default App
