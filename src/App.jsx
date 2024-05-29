import { useState, useEffect } from "react";
import BookModal from "./Components/BookModal";
import BookEditModal from "./Components/BookEditModal";
import "./app.css";
import Axios from "axios";
import BookDetailsModal from "./Components/BookDetailsModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [openCreateBookModal, setOpenCreateBookModal] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const baseURL = "http://localhost:3333/books";

  const handleOpenCreateModal = () => {
    setOpenCreateBookModal(true);
  };

  const handleCloseCreateBookModal = () => {
    setOpenCreateBookModal(false);
  };

  const handleOpenDetailsModal = (book) => {
    setSelectedBook(book);
    setDetailsModalOpen(true);
  };

  const handleCloseDetailsModal = () => {
    setDetailsModalOpen(false);
  };

  const handleOpenEditModal = (book) => {
    setSelectedBook(book);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };


  const booksFiltered = books.filter(card => {
    return card.title.toLowerCase().includes(searchTerm.toLowerCase())
  });

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(baseURL)
      setBooks(response.data)
    }
    getData()
  }, [books])

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="src/images/bibliotech-logo.png" alt="Logotipo da BiblioTech" />
        </div>
        <div className="buttons">
          <button>Devolução</button>
          <button>Empréstimo</button>
          <button onClick={handleOpenCreateModal}>Novo Livro</button>
          <BookModal
            open={openCreateBookModal}
            handleClose={handleCloseCreateBookModal}
            baseURL={baseURL}
          />
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
                <div className="card-content">
                  <img className="card-img" src={item.image_link} alt="Book Cover" />
                  <h2>{item.title}</h2>
                  <p>Autor(es): {item.author}</p>
                  <p>Formato: {item.format}</p>
                  <p>Disponível: {item.availability}</p>
                </div>
                <div className="card-actions">
                  <button onClick={() => handleOpenDetailsModal(item)}>Saiba mais</button>
                  <FontAwesomeIcon icon={faEdit} className="edit-icon" onClick={() => handleOpenEditModal(item)} />
                  <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={() => handleDelete(item)} />
                </div>
              </div>
              <BookDetailsModal
                open={detailsModalOpen}
                handleClose={handleCloseDetailsModal}
                book={selectedBook}
              />
              <BookEditModal
                open={editModalOpen}
                handleClose={handleCloseEditModal}
                book={selectedBook}
              />
            </>
          )
        })}
      </div>
      <footer>
        <p className="read-the-docs">
          Criado por Juliana de Jesus de Oliveira - Aluna da Faculdade Impacta do Curso de ADS.
        </p>
      </footer>
    </>
  );
}

export default App;
