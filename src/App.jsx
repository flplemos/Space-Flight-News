import React from "react";
import { Navbar } from './components/Navbar/Navbar'
import { Article } from "./components/Article/Article";
import { Counter } from "./components/Counter/Counter";

import  './styles/App.css';

import article1Img from './assets/images/article1.png'
import article2Img from './assets/images/article2.png'
import article3Img from './assets/images/article3.png'

// Componente em classe é uma classe que herda a classe Component do React, e retorna HTML dentro do método render. 

class App extends React.Component {
  //Método responsável por renderizar o conteúdo HTML do nosso componente.
  render() {
    return (
    <>
    <Navbar/>

    <Counter/>

    {/* <section id="articles">
    <Article 
    title="Designing Dashboards" 
    provider="NASA" 
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente beatae natus mollitia obcaecati porro tenetur voluptatem odit amet ex reprehenderit laborum, vitae error. Est facere expedita neque laudantium iste officiis."
    thumbnail={article1Img}
    />

    <Article 
    title="Vibrant Portraits of 2020" 
    provider="Spacenews" 
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum consequuntur necessitatibus delectus nobis. Doloremque provident, perspiciatis, quas distinctio recusandae architecto eligendi ullam veniam tempore error ratione suscipit magni impedit."
    thumbnail={article2Img}
    /> 
    

    <Article 
    title="36 Days of Malayalan type" 
    provider="SpaceFlight Now" 
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente beatae natus mollitia obcaecati porro tenetur voluptatem odit amet ex reprehenderit laborum, vitae error. Est facere expedita neque laudantium iste officiis."
    thumbnail={article3Img}
    />

    <Article 
    title="Designing Dashboards" 
    provider="NASA" 
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente beatae natus mollitia obcaecati porro tenetur voluptatem odit amet ex reprehenderit laborum, vitae error. Est facere expedita neque laudantium iste officiis."
    thumbnail={article1Img}
    />
    </section> */}
    </>
    )
  }
}

export default App;
