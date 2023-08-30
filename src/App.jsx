import './App.css'
import Carosule from './components/Carosule/Carosule'
import NavBar from './components/NavBar/NavBar'
import NavMain from './components/NavMain/NavMain'
import NavPlus from './components/NavPlus/NavPlus'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <NavPlus></NavPlus>
      <NavMain></NavMain>
      <Carosule></Carosule>
      <h2 className='para'>This is app</h2>

    </>
  )
}

export default App
