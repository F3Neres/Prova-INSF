
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
  const [libra, setLibra] = useState (false);

  const [gramas, setGramas] = useState ();
  const [valor, setValor] = useState (0);
  




    function calcular(){
      let qtd = (qtdPqno * 13.50) + (qtdMedio * 15) + (qtdGrande * 17.50);
      let desconto = (cumpom  / 100) * qtd ;
      let total = qtd - desconto;

      setResposta(total)
    }

    function signo(){

      let resp = false

      if(mes == "setembro")
      {
        if (dia < 23 || dia > 30) {
          resp = false
        }

        else if (dia >= 23 || dia <= 30 ) {
          resp = true 
        }
      }
      
      else if(mes == "outubro")
      {
        if (dia < 1 || dia > 22) {
          resp = false
        }
        else if (dia >= 1 || dia <= 22 ) {
          resp = true 
        }
      }
      else{
        resp = false
      }
      console.log(resp)
      setLibra(resp)

    }


    function Sorveteria(){
      let total = 0

      if (gramas >= 1000) {
        total = gramas * 0.03
      }
      else{
        total = gramas * 0.035
      }
      setValor(total.toFixed(2))

    }






  return (
    <main className="App">

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

        <hr></hr>

        <div>
            <h1>Sorvetin pro Bruno</h1>
            <h2>Desconto apartir de 1000g/1kg</h2>

            <h3>Quantas gramas você deseja?</h3>
            <input type= "number" value={gramas} onChange={e => setGramas (Number(e.target.value))} />

            <button onClick={Sorveteria}>Comprar</button>

            <h1>total a pagar é: R${valor}</h1>

        </div>



    </main>
  );
}

export default App;
