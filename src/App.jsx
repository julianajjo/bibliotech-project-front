import { useState } from "react";
import BookModal from "./Components/BookModal";
import "./app.css";

function App() {

  const cardsData = [
    {
      "title": "Um defeito de cor",
      "author": " Ana Maria Gonçalves ",
      "publisher": "Record",
      "edition": "28",
      "publication_year": 2006,
      "number_of_pages": 952,
      "language": "Português",
      "format": "Livro",
      "availability": "Sim",
      "image_link": "src/images/bibliotech-book.png",
      "link": "https://a.co/d/eGNS6j0"
    },
    {
      "title": "Um defeito de cor",
      "author": " Ana Maria Gonçalves ",
      "publisher": "Record",
      "edition": "28",
      "publication_year": 2006,
      "number_of_pages": 952,
      "language": "Português",
      "format": "Livro",
      "availability": "Sim",
      "image_link": "src/images/bibliotech-book.png",
      "link": "https://a.co/d/eGNS6j0"
    },
    {
      "title": "Um defeito de cor",
      "author": " Ana Maria Gonçalves ",
      "publisher": "Record",
      "edition": "28",
      "publication_year": 2006,
      "number_of_pages": 952,
      "language": "Português",
      "format": "Livro",
      "availability": "Sim",
      "image_link": "src/images/bibliotech-book.png",
      "link": "https://a.co/d/eGNS6j0"
    },
    {
      "title": "Um defeito de cor",
      "author": " Ana Maria Gonçalves ",
      "publisher": "Record",
      "edition": "28",
      "publication_year": 2006,
      "number_of_pages": 952,
      "language": "Português",
      "format": "Livro",
      "availability": "Sim",
      "image_link": "src/images/bibliotech-book.png",
      "link": "https://a.co/d/eGNS6j0"
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cardsFiltered = cardsData.filter(card => {
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
          <button onClick={handleClickOpen}>Novo Livro</button> 
          <BookModal open={open} handleClose={handleClose} /> 
        </div>
      </div>
      <header>
        <h1>Expandindo mentes, página por página</h1>
        <input
        className="search-input"
          type='text'
          placeholder='Digite aqui sua busca...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      <div className="gallery">
        {cardsFiltered.map(item => {
          return (
            <>
              <div className="card">
                <img className="card-img" src={item.image_link} alt="Book Cover" />
                <h2>{item.title}</h2>
                <p>Autor(es): {item.author}</p>
                <p>Formato: {item.format}</p>
                <p>Disponível: {item.availability}</p>
                <a href={item.link} target="_blank">
                  Saiba mais
                </a>
              </div>
            </>
          )
        })}
      </div>
      <footer>
        <p className="read-the-docs">
          Criado Juliana de Jesus de Oliveira - Aluna da Faculdade Impacta do Curso de ADS.
        </p>
      </footer>
    </>
  );
}

export default App;
