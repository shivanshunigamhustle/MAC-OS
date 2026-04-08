import {useState} from 'react'
import "./App.scss"
import Dock from './componets/Dock'
import Nav from './componets/Nav'
import Github from './componets/Windows/Github'
import Note from './componets/Windows/Note'
import Resume from './componets/Windows/Resume'
import Spotify from './componets/Windows/Spotify'
import Cli from './componets/Windows/Cli'

function App() {
  const [windowsState,setWindowsState]=useState({
    github:false,
    note:false,
    resume:false,
    spotify:false,
    cli:false,
  })
  return (
  
<main>
  <Nav/>
 <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
{windowsState.github && <Github windowName="github"  setWindowsState={setWindowsState} />}
{ windowsState.note && <Note windowName="note"  setWindowsState={setWindowsState} />}

{windowsState.resume && <Resume windowName="resume"  setWindowsState={setWindowsState} />}

{ windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}

{windowsState.cli &&  <Cli windowName="cli"  setWindowsState={setWindowsState} />}
 </main>
   
  )
}

export default App
