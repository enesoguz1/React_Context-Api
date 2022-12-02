import React, { useEffect, useState } from 'react';
import Araba from './Araba';

function ArabaList({fonk}) {

    const [arabalar, setArabalar] = useState([
        {arabaId:1, arabaAd:'Mercedes', arabaModel:'C 180'},
        {arabaId:2, arabaAd:'Seat', arabaModel:'Leon'}
    ]);

    useEffect(() =>{
      fonk(arabalar.length)
    })

  return (
    <div>
      <h1> Araba Listesi </h1>
      {arabalar.map(araba => (
        <Araba ad={araba.arabaAd} model={araba.arabaModel}></Araba>
      ))}
    </div>
  )
}

export default ArabaList;
