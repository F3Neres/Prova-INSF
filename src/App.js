
import './App.css';

import { useState, useEffect } from 'react';

function App() {

  const [qtdGrande, setQtdGrande] = useState (0);
  const [qtdMedio, setQtdMedio] = useState (0);
  const [qtdPqno, setQtdPqno] = useState (0);
  const [cumpom, setCumpom] = useState (0);
  const [resposta, setResposta] = useState (0);


  const [mes, setMes] = useState ('');
  const [dia, setDia] = useState ();
  const [libra, setLibra] = useState ();
  




    function calcular(){
      let qtd = (qtdPqno * 13.50) + (qtdMedio * 15) + (qtdGrande * 17.50);
      let desconto = (cumpom  / 100) * qtd ;
      let total = qtd - desconto;

      setResposta(total)
    }

    function signo(){
      if(mes == "setembro")
      {
        if (dia >= 23 || dia <= 30 ) {
          libra = true 
        }
      }
      else if(mes == "outubro")
      {
        if (dia >= 1 || dia <= 22 ) {
          libra = true 
        }
      }
      else{
        libra = false
      }
      console.log(libra)
      setLibra(true)

    }






  return (
    <div className="App">

       <div> 
          <h1>açaiaria</h1>

          <h1>Quantidade de pequenos</h1>
          <input type= "number" value={qtdPqno} onChange={e => setQtdPqno (Number(e.target.value))} />

          <h1>Quantidade de medios</h1>
          <input type= "number" value={qtdMedio} onChange={e => setQtdMedio (Number(e.target.value))} />

          <h1>Quantidade de grandes</h1>
          <input type= "number" value={qtdGrande} onChange={e => setQtdGrande (Number(e.target.value))} />

          <h1>desconto</h1>
          <input type= "number" value={cumpom} onChange={e => setCumpom (Number(e.target.value))} />

          <button onClick={calcular}>Comprar</button>

          <h1>{resposta}</h1>

        </div>
      <hr></hr>

        <div>

            <h1>tu é di libra é?</h1>

            <h1>Seu mes</h1>
          <input type= "text" value={mes} onChange={e => setMes (e.target.value)} />

          
          <h1>Seu dia</h1>
          <input type= "text" value={dia} onChange={e => setDia (e.target.value)} />

          <button onClick={signo}>Testar</button>

        <h1>é de libra? :{libra ? 'Sim' : 'Não'}</h1>

        </div>



    </div>
  );
}

export default App;
