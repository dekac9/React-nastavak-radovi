
import './App.css';

function App() {
  const ime="Dejan";
  const prezime = "Mitrovic"
  const vreme = parseInt((new Date()).getHours());
  var pozdrav="";

if(vreme<12){
pozdrav="Dobro jutro"

}else{
pozdrav="Dobro ti sve ostalo"
}

  return (
    <div className="pozdrav">
     {pozdrav} {ime}e {prezime}u, sada je {vreme} sati 
    </div>
  );
}

export default App;
