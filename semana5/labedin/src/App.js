import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import FotoRodrigo from './img/Foto-rodrigo.jpeg';
import LogoCnpq from './img/logocnpq.png';
import IconeEndereco from './img/icone-endereco.png';
import IconeEmail from './img/icone-email.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoRodrigo} 
          nome="Rodrigo Brezolin Buquera" 
          descricao="Olá, eu sou Rodrigo. Possuo formação em engenharia ambiental, com mestrado e doutorado em áreas distintas. Atualmente estou em uma transição de carreira, indo para a programação "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <CardPequeno  imagem={IconeEmail} texto="Email: rodrigo@fake.com"></CardPequeno>      

      <CardPequeno imagem={IconeEndereco} texto="Endereço: Em algum lugar"/>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="http://www.scs.usp.br/identidadevisual/wp-content/uploads/2013/08/usp-logo-png.png" 
          nome="Programa de pós-graduação em Ecologia Aplicada" 
          descricao="Projeto de doutorado realizado de 2018-2021" 
        />
        
        <CardGrande 
          imagem={LogoCnpq}
          nome="Projeto - Edital 016/16" 
          descricao="Implementação do projeto do início ao fim" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
