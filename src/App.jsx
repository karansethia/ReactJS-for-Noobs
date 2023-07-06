import { useState, useCallback } from 'react'
import './App.css'
import Para from './components/Para';
import Des from './components/Des';
import Button from './components/UI/Button';

function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false)
  console.log('component rendered');

  const showParaHandler = useCallback(() => {
    if (allowToggle) {
      setShowPara((prev) => !prev);
    }
  }, [allowToggle]);  //? If this allow toggle is not used the useCallback hook stored the initial value which is false hence the function never runs

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  return (
    <>
      <h1>Hello there</h1>
      <Para show={showPara} />
      <Des />
      <Button onClick={showParaHandler}>Toggle Paragraph</Button>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
    </>
  )
}

export default App
