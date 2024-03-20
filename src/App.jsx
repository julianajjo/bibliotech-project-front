import { useState } from 'react';
import './app.css';

function App() {

  const cardsData = [
   
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const cardsFiltrados = cardsData.filter(card => {
    return card.title.toLowerCase().includes(searchTerm.toLowerCase())
  });

  return (
    <>
      <div class="container">
        <div class="logo">
          <img src="src/images/bibliotech-logo.png" alt="Logotipo da BiblioTech" />
        </div>
        <div class="buttons">
          <button>Devolução</button>
          <button>Empréstimo</button>
          <button>Novo</button>
        </div>
      </div>
      <header>
        <h1>Expandindo mentes, página por página</h1>
        <input
          type='text'
          placeholder='Digite aqui sua busca...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      <div className="gallery">
        {cardsFiltrados.map(item => {
          return (
            <>
              <div className="card">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={item.link} target="_blank">
                  Saiba mais
                </a>
              </div>
            </>
          )
        })}
      </div>

      <form className="form-container">
        <h1>Cadastre um novo conteúdo:</h1>
        <input
          placeholder="Título:"
          type="text"
        />
        <textarea
          placeholder="Descrição:"
        />
        <input
          placeholder="Link:"
          type="text"
        />
        <button type="submit">Criar FlashCard</button>
      </form>
      <footer>
        <p className="read-the-docs">
          Criado Juliana de Jesus de Oliveira - Aluna da Faculdade Impacta do Curso de ADS.
        </p>
      </footer>
    </>
  );
}

export default App;
