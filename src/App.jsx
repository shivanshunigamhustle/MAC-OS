import {useState} from 'react'
import "./App.scss"
import Dock from './componets/Dock'
import Nav from './componets/Nav'
import Github from './componets/Windows/Github'

function App() {
  return (
  
<main>
  <Nav/>
 <Dock/>
 <Github/>
 </main>
   
  )
}

export default App
