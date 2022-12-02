import { useState } from 'react';
import './App.css';
import ArabaList from './ArabaList';
import ArabaSayisi from './ArabaSayisi';


function App() {

  const [sayi, setSayi] = useState(0);

  const arabaSayisiGetir =(s) => {
    setSayi(s);
  }

  return (
    <div className="App">
     <ArabaList fonk={arabaSayisiGetir}></ArabaList>

     <ArabaSayisi arabaSayi={sayi}></ArabaSayisi>
    </div>
  );
}

export default App;
