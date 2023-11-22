import { useState } from 'react'
import './App.css'

const Button = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment)
  }
  return <button onClick={handleClick}>{increment}</button>
}



function App() {
  const [count, setCount] = useState(0)

  const upCount = increment => {
    setCount(count + increment)
  }


  return (
    <div>
      <Button increment={1} onClickFunction={upCount} />
      <Button increment={-1} onClickFunction={upCount} />

      <span>{count}</span>
    </div>
  )
}

export default App
