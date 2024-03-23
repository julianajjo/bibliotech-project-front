import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import "./index.css";

function BookModal({ open, handleClose }) {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [edition, setEdition] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [numberOfPages, setNumberOfPages] = useState("");
  const [language, setLanguage] = useState("");
  const [format, setFormat] = useState("");
  const [availability, setAvailability] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Dados didgitados no formulário", { title, author, publisher, edition, publicationYear, numberOfPages, language, format, availability, imageLink, link})
    //Se quando eu abrir a modal ficar com os valores anteriores, devo setar tudo para vazio
  }

  return (
    <Dialog open={open} onClose={handleClose} className="book-modal">
      <DialogTitle className="book-modal-title">
        <button className="close-button" onClick={handleClose}>X</button>
      </DialogTitle>
      <DialogContent className="book-modal-content">
        <form className="form-container book-modal-content" onSubmit={handleSubmit}>
          <h1 className="book-modal-title">Cadastre um novo livro:</h1>
          <div className="form-section">
            <h3>Informações Básicas</h3>
            <input 
              className="book-modal-input" 
              placeholder="Título" 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input 
              className="book-modal-input" 
              placeholder="Autor(es)" 
              type="text" 
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <input 
              className="book-modal-input" 
              placeholder="Editora" 
              type="text" 
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
            />
            <input 
              className="book-modal-input" 
              placeholder="Edição" 
              type="text" 
              value={edition}
              onChange={(e) => setEdition(e.target.value)}
            />
          </div>
          <div className="form-section">
            <h3>Detalhes da Publicação</h3>
            <input
              className="book-modal-input"
              placeholder="Ano de Publicação"
              type="text"
              value={publicationYear}
              onChange={(e) => setPublicationYear(e.target.value)}
            />
            <input 
              className="book-modal-input" 
              placeholder="Número de Páginas" 
              type="text" 
              value={numberOfPages}
              onChange={(e) => setNumberOfPages(e.target.value)} 
            />
            <input 
              className="book-modal-input" 
              placeholder="Idioma" 
              type="text" 
              value={language}
              onChange={(e) => setLanguage(e.target.value)} 
            />
            <input 
              className="book-modal-input" 
              placeholder="Formato" 
              type="text" 
              value={format}
              onChange={(e) => setFormat(e.target.value)} 
            />
            <input 
              className="book-modal-input" 
              placeholder="Disponibilidade" 
              type="text" 
              value={availability}
              onChange={(e) => setAvailability(e.target.value)} 
            />
            <input 
              className="book-modal-input" 
              placeholder="Link de informações" 
              type="text" 
              value={link}
              onChange={(e) => setLink(e.target.value)} 
            />
            <h3>Imagem do Livro</h3>
            <input 
              className="book-modal-input" 
              placeholder="Link da Imagem" 
              type="text" 
              value={imageLink}
              onChange={(e) => setImageLink(e.target.value)} 
            />
          </div>
          <button 
            className="book-modal-button" 
            type="submit">
            Cadastrar Livro
          </button>
        </form>
      </DialogContent>
      {/* <DialogActions className="book-modal-actions">
        <Button onClick={handleClose} className="book-modal-button">Fechar</Button>
      </DialogActions> */}
    </Dialog>
  );
}

export default BookModal;
