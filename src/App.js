
import { useState } from 'react';
import './App.css';
import Display from './component/display';
import Numbers from './component/numbers';

function App() {
  const [calc, setCalc] = useState()
  return (
    <div className="App" style={{marginLeft:"35%",marginRight:"35%", marginTop:"4%"}}>
      <Display compute={7} answer={223}/>
      <Numbers />
    </div>
  );
}

export default App;
