import './App.css'
import Navbar from './components/Navbar'
import View from './components/View'
import {Route,Routes} from 'react-router-dom'
import Add from './components/Add'

function App() {

  return (
    <>
    <View/>
    <Routes>
      <Route path='/' element={<Navbar/>}> </Route>
      <Route path='/add' element={<Add/>}> </Route>
   </Routes>
   
       </>
  )
}

export default App