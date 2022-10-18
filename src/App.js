
import './App.css';

import { useState, useEffect } from 'react';

function App() {

// Ex1
  const [qtdGrande, setQtdGrande] = useState (0);
  const [qtdMedio, setQtdMedio] = useState (0);
  const [qtdPqno, setQtdPqno] = useState (0);
  const [cumpom, setCumpom] = useState (0);
  const [resposta, setResposta] = useState (0);

// Ex2
  const [mes, setMes] = useState ('');
  const [dia, setDia] = useState (1);
  const [libra, setLibra] = useState (false);

// Ex3
  const [gramas, setGramas] = useState ();
  const [valor, setValor] = useState ();

// Ex4
  const [salario, setSalario] = useState ();
  const [bonus, setBonus] = useState ();
  const [desc, setDesc] = useState ();
  const [sLiquido, setSLiquido] = useState ();

// Ex5
  const [tanque, setTanque] = useState ();
  const [dist, setDist] = useState ();
  const [consumo, setConsumo] = useState ();
  const [viagem, setViagem] = useState ();

// Ex6
  const [temp, setTemp] = useState ();
  const [febre, setFebre] = useState ();

// Ex7
  const [ganhos, setGanhos] = useState ();
  const [gastos, setGastos] = useState ();
  const [situacao, setSitituacao] = useState ();
  
// Ex8
  const [inteiras, setInteiras] = useState ();
  const [meias, setMeias] = useState ();
  const [diadasemana, setDiaDaSemana] = useState ("");
  const [nacional, setNacional] = useState ();
  const [resul, setResul] = useState ();

// Ex9
  const [inicio, setInicio] = useState ();
  const [fim, setFim] = useState ();
  const [numero, setNumero] = useState ([]);

// Ex9
const [linha, setLinha] = useState ();
const [asterisco, setAsterisco] = useState ();


  



// Ex1
    function calcular(){
      let qtd = (qtdPqno * 13.50) + (qtdMedio * 15) + (qtdGrande * 17.50);
      let desconto = (cumpom  / 100) * qtd ;
      let total = qtd - desconto;

      setResposta(total)
    }
// Ex2
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
      setLibra(resp)

    }

// Ex3
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

  // Ex4
    function Salario(){
      let cBonus = salario + ((bonus/100) * salario);
      let resp = cBonus - desc;
      setSLiquido(resp)
    }

  // Ex5
    function Carro(){
      let kmLitro = consumo / dist
      let resp = kmLitro / tanque
      
      setViagem(Math.ceil(resp))
    }
    
  // Ex6
    function calcFebre(){
      let resp = ""

      if (temp >= 41) {
        resp = "Hiperfermia"
      }

      else if (temp >= 39.6) {
        resp = "Febre alta"
      }

      else if (temp >= 37.6) {
        resp = "Febre"
      }

      else if (temp >= 36) {
        resp = "Normal"
      }

      else if (temp <= 36) {
        resp = "Hipotermia"
      }

      setFebre(resp)
    }

  // Ex7
    function orcamento(){
    let calc = gastos / ganhos;
    let resp = calc * 100;
    let resul = "";

    if (resp > 100) {
      resul = "Orçamento comprometido! Hora de rever seus gastos!"
    }

    else if (resp > 80) {
      resul = "Cuidado, seu orçamento pode ficar comprometido!"
    }

    else if (resp > 50) {
      resul = "Atenção, melhor conter os gastos!"
    }

    else if (resp > 20) {
      resul = "Muito bem, seus gastos não utrapassam metade dos ganhos"
    }

    else if (resp >= 0) {
      resul = "Parabéns, está gerenciando bem seu orçamento!"
    }

    else{
      resul = "valor invalido"
    }

    setSitituacao(resul)
  }

  // Ex8
    function cinema(){
      let resp = 0;

      if (nacional == true) {
        resp = ( inteiras + meias ) * 5;
        
      }

      else if ( diadasemana == "quarta-feira" ) {
        resp = ( inteiras + meias ) * 14.25;
        
      }

      else {
        resp = (inteiras * 28.5) + ( meias * 14.25);
      }

      setResul(resp)
    } 

  // Ex9
    function contar(){
      let resul = []
      for (let i = inicio; i <= fim; i++) {
        resul.push(i)
        
      }
      setNumero(resul)

    }
  // Ex9
    function linhas(){
      let resul = []
      for (let i = 0; i <= linha; i++) {
        resul.push("*")
        

      }
      setAsterisco(resul)

    }


   


  return (
    <main className="App">

      <h1 className='prova'>PROVA 1</h1>

       <div> 
          <h1>açaiaria</h1>

          <h2>Quantidade de pequenos</h2>
          <input type= "number" value={qtdPqno} onChange={e => setQtdPqno (Number(e.target.value))} />

          <h2>Quantidade de medios</h2>
          <input type= "number" value={qtdMedio} onChange={e => setQtdMedio (Number(e.target.value))} />

          <h2>Quantidade de grandes</h2>
          <input type= "number" value={qtdGrande} onChange={e => setQtdGrande (Number(e.target.value))} />

          <h2>desconto</h2>
          <input type= "number" value={cumpom} onChange={e => setCumpom (Number(e.target.value))} />

          <button onClick={calcular}>Comprar</button>

          <h2>{resposta}</h2>

        </div>
        <hr></hr>

        <div>

            <h1>tu é di libra é?</h1>

            <h2>Seu mes</h2>
          <input type= "text" value={mes} onChange={e => setMes (e.target.value)} />

          
          <h2>Seu dia</h2>
          <input type= "text" value={dia} onChange={e => setDia (Number(e.target.value))} />

          <button onClick={signo}>Testar</button>

          <h2>é de libra? :{libra ? 'Sim' : 'Não'}</h2>

        </div>

        <hr></hr>

        <div>
            <h1>Sorvetin pro Bruno</h1>
            <h2>Desconto apartir de 1000g/1kg</h2>

            <h2>Quantas gramas você deseja?</h2>
            <input type= "number" value={gramas} onChange={e => setGramas (Number(e.target.value))} />

            <button onClick={Sorveteria}>Comprar</button>

            <h2>total a pagar é: R${valor}</h2>

        </div>

        <br></br>
        <hr></hr>
        <h1 className='prova'>PROVA 2</h1>


        <div> 
          <h1>Salario</h1>

          <h2>Seu salario</h2>
          <input type= "number" value={salario} onChange={e => setSalario (Number(e.target.value))} />

          <h2>Bonus do salario</h2>
          <input type= "number" value={bonus} onChange={e => setBonus (Number(e.target.value))} />

          <h2>Desconto do salario</h2>
          <input type= "number" value={desc} onChange={e => setDesc (Number(e.target.value))} />

          
          <button onClick={Salario}>Calcular</button>

          <h2>{sLiquido}</h2>

        </div>

        <hr></hr>

        <div> 
          <h1>Viagem</h1>

          <h2>Tamanho do tanque</h2>
          <input type= "number" value={tanque} onChange={e => setTanque (Number(e.target.value))} />

          <h2>Distancia da viagem</h2>
          <input type= "number" value={dist} onChange={e => setDist (Number(e.target.value))} />

          <h2>Consumo do deu veiculo</h2>
          <input type= "number" value={consumo} onChange={e => setConsumo (Number(e.target.value))} />

          
          <button onClick={Carro}>Calcular</button>
    
          <h2>{viagem}</h2>

        </div>

        <hr></hr>

        <div>
          <h1>Está com febre</h1>

            <h2>Qual sua temperatura?</h2>
            <input type= "number" value={temp} onChange={e => setTemp (Number(e.target.value))} />

            <button onClick={calcFebre}>Testar</button>

            <h2>Voce esta com: {febre}</h2>
        </div>

        <hr></hr>
        <h1 className='prova'>PROVA 3</h1>


       <div> 
          <h1>Seu orçamento</h1>

          <h2>Quais são seus ganhos?</h2>
          <input type= "number" value={ganhos} onChange={e => setGanhos (Number(e.target.value))} />

          <h2>Quais são seus gastos?</h2>
          <input type= "number" value={gastos} onChange={e => setGastos (Number(e.target.value))} />

          <button onClick={orcamento}>Verificar</button>

          <h2>{situacao}</h2>

        </div>

      <hr></hr>

      <div> 
          <h1>cinema</h1>

          <h2>Quantidades de inteiras </h2>
          <input type= "number" value={inteiras} onChange={e => setInteiras (Number(e.target.value))} />

          <h2>Quantidade de meias</h2>
          <input type= "number" value={meias} onChange={e => setMeias (Number(e.target.value))} />

          <h2>Nacional?</h2>
          <h3>Sim</h3>
          <input type="checkbox" checked={nacional} onChange={e => setNacional(e.target.checked)} />

          <h2>Qual o dia da semana?</h2>
          <input type= "text" value={diadasemana} onChange={e => setDiaDaSemana (e.target.value)} />

          <button onClick={cinema}>Verificar</button>

          <h2>{resul}</h2>

        </div>

        <hr></hr>
        <h1 className='prova'>PROVA 4</h1>


       <div> 
          <h1>Contador</h1>

          <h2>inicio</h2>
          <input type= "number" value={inicio} onChange={e => setInicio (Number(e.target.value))} />

          <h2>Fim</h2>
          <input type= "number" value={fim} onChange={e => setFim (Number(e.target.value))} />

          <button onClick={contar}>Verificar</button>

          <h2>{numero}</h2>

        </div>

        <div> 
          <h1>linha</h1>

          <h2>Tamanho</h2>
          <input type= "number" value={linha} onChange={e => setLinha (Number(e.target.value))} />

          <button onClick={linhas}>Verificar</button>

          <h2>{asterisco}</h2>

        </div>




    </main>

  );

}

export default App;
