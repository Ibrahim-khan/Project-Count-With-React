import { useState } from 'react'
import './App.css'
import STATE from './STATE'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <STATE/>
      </div>

    </>
  )
}

export default App
