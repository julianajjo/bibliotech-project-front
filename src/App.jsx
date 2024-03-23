import { useState, useEffect } from "react";
import BookModal from "./Components/BookModal";
import "./app.css";
import Axios from "axios";

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const baseURL = "localhost:3333/books";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const booksFiltered = booksData.filter(card => {
    return card.title.toLowerCase().includes(searchTerm.toLowerCase())
  });

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(baseURL)
    }
    getData()
  }, [])

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="src/images/bibliotech-logo.png" alt="Logotipo da BiblioTech" />
        </div>
        <div className="buttons">
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
        {booksFiltered.map(item => {
          return (
            <>
              <div className="card" key={item.id}>
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
