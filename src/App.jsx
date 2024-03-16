import './App.css'
import Cover from './componenets/Cover/Cover'
import Navbar from './componenets/Navbar'

function App() {

  return (
    <div className='bg-white w-11/12 lg:max-w-[1420px] m-auto text-black'>
      <Navbar></Navbar>
      <Cover></Cover>
    </div>
  )
}

export default App
