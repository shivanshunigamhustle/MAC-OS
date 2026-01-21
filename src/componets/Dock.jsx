import React from 'react'
import "./Dock.scss"

const Dock = () => {
  return (
    <footer className="dock">
        <div className='icon github'><img src="/doc-icon/github.png" alt=''/></div>
        <div className='icon note'><img src="/doc-icon/vs.svg" alt=''/></div>
        <div className='icon pdf'><img src="/doc-icon/vs.svg" alt=''/></div>
        <div className='icon calender'><img src="/doc-icon/github.png" alt=''/></div>
        <div className='icon vs'><img src="/doc-icon/github.png" alt=''/></div>

    </footer>
  )
}

export default Dock
