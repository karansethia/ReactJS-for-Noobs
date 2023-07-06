import { useState } from 'react'
import './App.css'
import Para from './components/Para';
import Des from './components/Des';

function App() {
  const [showPara, setShowPara] = useState(false);
  console.log('component rendered');

  return (
    <>
      <h1>Hello there</h1>
      <Para show={showPara} />
      <Des />
      <button onClick={() => { setShowPara(!showPara) }}>Click me</button>
    </>
  )
}

export default App
