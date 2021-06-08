import Head from 'next/head'
import React from 'react'

export default function Home() {
  

  function Calcular() {
    var getID = document.getElementById("categoria");
    var value = document.getElementById("value");
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    let resultado = peso / (altura^2);
    if (resultado >= 1){
      value.innerHTML = resultado.toFixed(2);
      Classificação(resultado);
    }
    else{
      value.innerHTML = "0"
      getID.innerHTML = "Inválido"
    }
    
  }

  function Classificação(valor) {  
    var getID = document.getElementById("categoria");
    if (valor < 18.5) {
      getID.innerHTML = "Abaixo do peso"
      return
    }
    if (valor >=18.5 && valor < 24.9) {
      getID.innerHTML = "Peso ideal"
      return
    }
    if (valor > 25 && valor < 29.9) {
      getID.innerHTML = "Sobrepeso"
      return
    }
    if (valor > 30 && valor < 34.9) {
      getID.innerHTML = "Obesidade grau 1"
      return
    }
    if (valor > 35 && valor < 39.9) {
      getID.innerHTML = "Obesidade grau 2"
      return
    }
    if (valor > 40) {
      getID.innerHTML = "Obesidade grau 3"
      return
    }
  }
  
  return (
    
    <div className="container">
      <Head>
      <title>Calculadora IMC</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="title">
          <h1>Calculadora IMC</h1>
        </div>
        <div className="calc">
          <form className="forms">
            <label for="altura">
              <a>Altura</a> <a id="subtitle">(ex:1,60)</a><br />
              <input type="number" id="altura" max= "4"  placeholder="Metros"></input>
            </label>
            <label for="peso">
              <a>Peso</a>   <a id="subtitle2">(ex:55,2)</a><br />
              <input type="number" id="peso" max= "4" placeholder="Quilos"></input>

            </label>
            <button type="button" onClick={Calcular} id="button" className="button">
              Calcular
            </button>
          </form>
          <div id="value"></div>
        </div>
        <div id="categoria"></div>
        <h1 id="titulo_tabela">Tabela de peso ideal utilizando os critérios da OMS</h1>
        <table id="tabela">
        <tr>
        <td class="tbl_h">Altura</td>
        <td class="tbl_h">peso  ideal mínimo</td>
        <td class="tbl_h">peso  ideal máximo</td>
      </tr>
      <tr>
        <td>1,50 m</td>
        <td>42 kg</td>
        <td>56 kg</td>
      </tr>
      <tr>
        <td class="cor">1,52 m</td>
        <td class="cor">43 kg</td>
        <td class="cor">57 kg</td>
      </tr>
      <tr>
        <td>1,54 m</td>
        <td>44 kg</td>
        <td>59 kg</td>
      </tr>
      <tr>
        <td class="cor">1,56 m</td>
        <td class="cor">46 kg</td>
        <td class="cor">60 kg</td>
      </tr>
      <tr>
        <td>1,58 m</td>
        <td>47 kg</td>
        <td>62 kg</td>
      </tr>
      <tr>
        <td class="cor">1,60 m</td>
        <td class="cor">48 kg</td>
        <td class="cor">64 kg</td>
      </tr>
      <tr>
        <td>1,62 m</td>
        <td>49 kg</td>
        <td>65 kg</td>
      </tr>
      <tr>
        <td class="cor">1,64 m</td>
        <td class="cor">50 kg</td>
        <td class="cor">67 kg</td>
      </tr>
      <tr>
        <td>1,66 m</td>
        <td>51 kg</td>
        <td>68 kg</td>
      </tr>
      <tr>
        <td class="cor">1,68 m</td>
        <td class="cor">53 kg</td>
        <td class="cor">70 kg</td>
      </tr>
      <tr>
        <td>1,70 m</td>
        <td>54 kg</td>
        <td>72 kg</td>
      </tr>
      <tr>
        <td class="cor"> 1,72 m</td>
        <td class="cor">55 kg</td>
        <td class="cor">73 kg</td>
      </tr>
      <tr>
        <td>1,74 m</td>
        <td>57 kg</td>
        <td>75 kg</td>
      </tr>
      <tr>
        <td class="cor">1,76 m</td>
        <td class="cor">58 kg</td>
        <td class="cor">77 kg</td>
      </tr>
      <tr>
        <td>1,78 m</td>
        <td>59 kg</td>
        <td>79 kg</td>
      </tr>
      <tr>
        <td class="cor">1,80 m</td>
        <td class="cor">60 kg</td>
        <td class="cor">81 kg</td>
      </tr>
      <tr>
        <td>1,82 m</td>
        <td>62 kg</td>
        <td>82 kg</td>
      </tr>
      <tr>
        <td class="cor">1,84 m</td>
        <td class="cor">63 kg</td>
        <td class="cor">84 kg</td>
      </tr>
      <tr>
        <td>1,86 m</td>
        <td>65 kg</td>
        <td>86 kg</td>
      </tr>
      <tr>
        <td class="cor">1,88 m</td>
        <td class="cor">66 kg</td>
        <td class="cor">88 kg</td>
      </tr>
      <tr>
        <td>1,90 m</td>
        <td>67 kg</td>
        <td>90 kg</td>
      </tr>
      <tr>
        <td class="cor">1,92 m</td>
        <td class="cor">69 kg</td>
        <td class="cor">92 kg</td>
      </tr>
      <tr>
        <td>1,94 m</td>
        <td>70 kg</td>
        <td>94 kg</td>
      </tr>
      <tr>
        <td class="cor">1,96 m</td>
        <td class="cor">72 kg</td>
        <td class="cor">96 kg</td>
      </tr>
      <tr>
        <td>1,98 m</td>
        <td>73 kg</td>
        <td>98 kg</td>
      </tr>
      <tr>
        <td class="cor">2,00 m</td>
        <td class="cor">75 kg</td>
        <td class="cor">100 kg</td>
      </tr>
        </table>
      </main>

      <style jsx>{`
        #subtitle {
          font-size: 10px;
        }
        #subtitle2 {
          font-size: 10px;
        }
        #titulo_tabela {
          margin-top: 30px;
          text-align: center;
          color: #2C3E50;
        }
        table {
          border-collapse: collapse;
          width: 60%;
          margin-left: auto;
          margin-right: auto;
        }
        
        td, th {
          border: 1px solid #dddddd;
          padding: 8px;
          text-align: center;
        }
        
        tr:nth-child(even) {
          background-color: #dddddd;
        }
        #categoria {
          text-align:center;
          color: #2C3E50;
          font-size: 25px;
        }
        #value {
          text-align: center;
          color: #2980B9;
          font-weight: bold;
          font-size: 70px;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
           -webkit-appearance: none;
           margin: 0;
        }
        input[type="number"] {
           -moz-appearance: textfield;
           border: 1px solid #2980B9;
           border-radius: 4px;
        }
        .title {
          text-align: center;
          color: #2C3E50;
        }
        .forms {
          text-align: center;
          color: #2C3E50;
          margin: 50px;
          display: block;
          font-weight: bold;
          font-size: 20px;
        }
        label {
          display: block;
        }
        label {
          margin-bottom: 30px;
        }
        .button {
          background-color: transparent;
          border: solid 2px #3498DB;
          color: #2C3E50;
          padding: 10px 25px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 30px;
          transition-duration: 0.4s;
          cursor: pointer;
          border-radius: 10px;
        }
        .button:hover {
          font-size: 19px;
          background-color: #3498DB;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: #ECF0F1;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
