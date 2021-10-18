import Usestatehook from "./Usestate"
import Useestatearrey from "./Usestatearrey";
import Usestateobject from"./Usestateobject";
import Counter from "./Counter"
import './App.css';

function App() {
  return (
    <div className="container">
    <Usestatehook/>
    <hr/>
    {/* <Useestatearrey/>
    <hr/> */}
    {/* <Usestateobject/> */}
    <Counter/>
    </div>
  );
}

export default App;
