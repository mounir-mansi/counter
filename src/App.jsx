import { useState } from 'react'
import './App.css'
import Button from './components/Button'



function App() {
  const [count, setCount] = useState(0)

  const upCount = increment => {
    setCount(count + increment)
  }


  return (
    <div>
      <h2>Compteur</h2>
      <span>{count}</span>
      <div>
        <Button increment={-1} onClickFunction={upCount} />
        <Button increment={1} onClickFunction={upCount} />
      </div>
    </div>
  )
}

export default App
