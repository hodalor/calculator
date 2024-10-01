
import './App.css';
import Display from './component/display';
import Numbers from './component/numbers';

function App() {
  return (
    <div className="App" style={{marginLeft:"35%",marginRight:"35%", marginTop:"4%"}}>
      <Display/>
      <Numbers/>
    </div>
  );
}

export default App;
