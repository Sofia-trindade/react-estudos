import React from "react";
import logoImg from './assets/imagens/logo.png'


// Componente em classe é uma classe que herda a classe component do React,
// e retorna HTML dentro do método render.

class App extends React.Component {

  // Método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
    <header>
      <nav>
        <div className="navbar">
          <img src={logoImg} alt="" />
          <h1>Space Flight News</h1>
        </div>

        <ul className="nav-list">
          <li><a href="/"></a>Home</li>
          <li><a href="/"></a>Trending</li>
          <li><a href="/"></a>Categories</li>
          <li><a href="/"></a>About us</li>
        </ul>
      </nav>
    </header>
  );
  }
}

export default App;
