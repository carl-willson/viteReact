import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w3-sidebar w3-bar-block" >
  <a href="#" className="w3-bar-item w3-button">Link 1</a>
  <a href="#" className="w3-bar-item w3-button">Link 2</a>
  <a href="#" className="w3-bar-item w3-button">Link 3</a>
   </div>

      <div className="w3-container">
      <div className="w3-container w3-indigo w3-margin w3-round-xxlarge">
        <h3>My Car</h3>
        </div>
        <div className="w3-container w3-padding-16 w3-margin">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        </div>
        <div className="w3-container">
  <p>A car is a wheeled, self-powered motor vehicle used for transportation.</p>


<div className="w3-container w3-indigo">
  <p>My footer information</p>
</div>        
      </div>
      <div className='w3-border'>
      <h1>Vite + React</h1>
      </div>
      <div className="card">
        <button className='w3-button w3-indigo' onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className='w3-panel w3-red'>
  <h3>Danger!</h3>
  <p>Red often indicates a dangerous or negative situation.</p>
</div> 
      <p className="read-the-docs">
        Slick on the Vite  React logos to learn more
      </p>
      </div>    
    </>
  )
}

export default App
