import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import Axios from "axios";
import "./index.css";

function BookEditModal({ open, handleClose, book }) {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [edition, setEdition] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [numberOfPages, setNumberOfPages] = useState("");
  const [language, setLanguage] = useState("");
  const [format, setFormat] = useState("");
  const [availability, setAvailability] = useState("");
  const [imageLink, setImageLink] = useState("src/images/bibliotech-book.png");
  const [link, setLink] = useState("");

  const baseURL = `http://localhost:3333/books/${book._id}`;

  useEffect(() => {
    if (book) {
      setTitle(book.title || "");
      setAuthor(book.author || "");
      setPublisher(book.publisher || "");
      setEdition(book.edition || "");
      setPublicationYear(book.publication_year || "");
      setNumberOfPages(book.number_of_pages || "");
      setLanguage(book.language || "");
      setFormat(book.format || "");
      setAvailability(book.availability || "");
    }
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault()

    async function sendData() {
      await Axios.put(baseURL, {
        title: title,
        author: author,
        publisher: publisher,
        edition: edition,
        publication_year: publicationYear,
        number_of_pages: numberOfPages,
        language: language,
        format: format,
        availability: availability,
        image_link: imageLink,
        link: link
      })
    }
    sendData();
    handleClose();
    setTitle("");
    setAuthor("");
    setPublisher("");
    setEdition("");
    setPublicationYear("");
    setNumberOfPages("");
    setLanguage("");
    setFormat("");
    setAvailability("");
    setImageLink("src/images/bibliotech-book.png");
    setLink("");
  }

  return (
    <Dialog open={open} onClose={handleClose} className="book-modal">
      <DialogTitle className="book-modal-title">
        <button className="close-button" onClick={handleClose}>X</button>
      </DialogTitle>
      <DialogContent className="book-modal-content">
        <form className="form-container book-modal-content" onSubmit={handleSubmit}>
          <h1 className="book-modal-title">Edição do livro:</h1>
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
              placeholder="Disponível?" 
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
              disabled={true}
              onChange={(e) => setImageLink(e.target.value)} 
            />
          </div>
          <button 
            className="book-modal-button" 
            type="submit">
            Editar Livro
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default BookEditModal;
