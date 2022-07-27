
import './App.css';
import profile from './assets/profile.jpg'

export default function App() {
  return (

    <div className="container">
      <header>
        <h2>Nara.dev</h2>
        <ul className="menu">
          <li>Artigos</li>
          <li>Contato</li>
        </ul>
      </header>

      <section>
        <div className="left">
          <img src={profile} alt="sinara" />
          <strong>Sinara Tibel</strong>
          <span>
            <br />
            Eu sou o Sinara , estudante fullstack na
            Cubos Academy, com foco em ser desenvolvedora frontend.
            <br />
            Sou apaixonada por tecnologia!
          </span>
        </div>
        <div className="right">
          <strong>22 de Novembro de 2030</strong>
          <h2>Introdução ao React</h2>
          <span>Nesse post nós iremos falar sobre como o React,
            é importante para o desenvolvedor frontend moderno.
          </span>
          <a href="#">Ler mais</a>
        </div>
      </section>

      <footer>
        <ul className="menu">
          <li>Artigos</li>
          <li>Contato</li>
        </ul>
      </footer>
    </div>

  );
}

