import './App.css'
import Cover from './componenets/Cover/Cover'
import Navbar from './componenets/Navbar/Navbar'
import Recipe from './componenets/Recipe/Recipe'

function App() {

  return (
    <div className='bg-white w-11/12 lg:max-w-[1420px] m-auto text-black'>
      {/* header */}
      <Navbar></Navbar>
      <Cover></Cover>

      {/* main */}
      <Recipe></Recipe>

    </div>
  )
}

export default App
