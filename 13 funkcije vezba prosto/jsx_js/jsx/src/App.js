
import './App.css';
var boja={
  color:"grey",
  backgroundColor:""
}

function App() {
  const ime="Dejan";
  const prezime = "Mitrovic"
  const vreme = parseInt((new Date()).getHours());
  var pozdrav="";

if(vreme<12){
pozdrav="Dobro jutro"
boja.backgroundColor="white"

}else{
pozdrav="Dobro ti sve ostalo"
boja.backgroundColor="white"
}

  return (
    <div className="pozdrav">
     <p>{pozdrav} {ime}e {prezime}u, sada je {vreme} sati </p>
     <p style={boja}>Ovo je paragraf za inline style</p>
    </div>
  );
}

export default App;
