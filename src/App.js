import MyComp from './Components/MyComp';
import MyComp2 from './Components/MyComp2';
import './App.css';
import Wrapper from './Helper/Wrapper';

function App() {

const onClickHandler= () => {
  
}

  return (
    <Wrapper>
      <MyComp/>
      <MyComp2 onClick={onClickHandler}/>
    </Wrapper>
  );
}

export default App;
