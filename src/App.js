
import './App.css';
// import Props from './Components/Props/Props';
// import State from './Components/State/State';
// import ComponentA from './Components/ContextAPI/A';
// import UseContextComp from './Components/UseContext/UseContext';
// import MyContext from './Components/UseRef/MyContext';
// import UseRef from './Components/UseRef/UseRef';
// import UseReducer from './Components/UseReducer/UseRuducer';
// import Axios from './Components/Axios/Axios';
// import Electronics from './Components/Axios/Electronics'
import AxiosGet from './Components/Axios/AxiosGet';
import FetchMethod from './Components/FetchData/FetchMethod';
import AxiosPost from './Components/Axios/AxiosPost';


function App() {
  // const carInfo= {name:'BMW', model:'I8'}
  return (
    <div>
    {/* <Props title= ' Hello ' text=' '
    brand= {carInfo} />
    <State/>
    <ComponentA/>
    <UseContextComp/>
    <MyContext/>
    <UseRef/>
    <UseReducer/>
    <UseRef/> */}
    {/* <Axios/> */}
    {/* <Electronics/> */}
    <AxiosGet/>
    <FetchMethod/>
    <AxiosPost/>
    </div>
   
  );
}

export default App;
