import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>hello world</h1>
        <iframe src="https://embed.tidal.com/mix/002d7fdb238f708e7194ed77279182?layout=gridify" frameborder="0" allowfullscreen></iframe>
    </>
  )
}

export default App
