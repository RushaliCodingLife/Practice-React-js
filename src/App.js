
import './App.css';
import Props from './Components/Props/Props';
import State from './Components/State/State';
import ComponentA from './Components/ContextAPI/A';
import UseContextComp from './Components/UseContext/UseContext';
import MyContext from './Components/UseRef/MyContext';
import UseRef from './Components/UseRef/UseRef';


function App() {
  const carInfo= {name:'BMW', model:'I8'}
  return (
    <div>
    <Props title= ' Hello ' text=' '
    brand= {carInfo} />
    <State/>
    <ComponentA/>
    <UseContextComp/>
    <MyContext/>
    <UseRef/>
   
    </div>
   
  );
}

export default App;
