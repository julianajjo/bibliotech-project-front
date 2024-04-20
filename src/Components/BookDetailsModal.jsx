import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import Axios from "axios";
import "./index.css";

function BookDetailsModal({ open, handleClose, baseURL, book }) {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [edition, setEdition] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [numberOfPages, setNumberOfPages] = useState("");
  const [language, setLanguage] = useState("");
  const [format, setFormat] = useState("");
  const [availability, setAvailability] = useState("");

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

  return (
    <Dialog open={open} onClose={handleClose} className="book-modal">
      <DialogTitle className="book-modal-title">
        <button className="close-button" onClick={handleClose}>X</button>
      </DialogTitle>
      <DialogContent className="book-modal-content">
        <form className="form-container book-modal-content" >
          <h1 className="book-modal-title">Detalhes do Livro</h1>
          <div className="form-section">
            <h3>Informações Básicas</h3>
            <input 
              className="book-modal-input" 
              placeholder="Título" 
              type="text" 
              value={`Título: ${title}`}
              onChange={(e) => setTitle(e.target.value)}
              readOnly
            />
            <input
              className="book-modal-input"
              placeholder="Autor(es)"
              type="text"
              value={`Autor(es): ${author}`}
              onChange={(e) => setAuthor(e.target.value)}
              readOnly
            />
            <input
              className="book-modal-input"
              placeholder="Editora"
              type="text"
              value={`Editora: ${publisher}`}
              onChange={(e) => setPublisher(e.target.value)}
              readOnly
            />
            <input
              className="book-modal-input"
              placeholder="Edição"
              type="text"
              value={`Edição: ${edition}`}
              onChange={(e) => setEdition(e.target.value)}
              readOnly
            />
          </div>
          <div className="form-section">
            <h3>Detalhes da Publicação</h3>
            <input
              className="book-modal-input"
              placeholder="Ano de Publicação"
              type="text"
              value={`Ano de publicação: ${publicationYear}`}
              onChange={(e) => setPublicationYear(e.target.value)}
              readOnly
            />
            <input
              className="book-modal-input"
              placeholder="Número de Páginas"
              type="text"
              value={`Número de páginas: ${numberOfPages}`}
              onChange={(e) => setNumberOfPages(e.target.value)}
              readOnly
            />
            <input
              className="book-modal-input"
              placeholder="Idioma"
              type="text"
              value={`Idioma: ${language}`}
              onChange={(e) => setLanguage(e.target.value)}
              readOnly
            />
            <input
              className="book-modal-input"
              placeholder="Formato"
              type="text"
              value={`Formato: ${format}`}
              onChange={(e) => setFormat(e.target.value)}
              readOnly
            />
            <input
              className="book-modal-input"
              placeholder="Disponível?"
              type="text"
              value={`Disponível? ${availability}`}
              onChange={(e) => setAvailability(e.target.value)}
              readOnly
            /> 
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default BookDetailsModal;
