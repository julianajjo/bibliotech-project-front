import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import "./index.css";

function BookModal({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose} className="book-modal">
      <DialogTitle className="book-modal-title">
        <button className="close-button" onClick={handleClose}>X</button>
      </DialogTitle>
      <DialogContent className="book-modal-content">
        <form className="form-container book-modal-content">
          <h1 className="book-modal-title">Cadastre um novo livro:</h1>
          <div className="form-section">
            <h3>Informações Básicas</h3>
            <input className="book-modal-input" placeholder="Título" type="text" name="title" />
            <input className="book-modal-input" placeholder="Autor(es)" type="text" name="author" />
            <input className="book-modal-input" placeholder="Editora" type="text" name="publisher" />
            <input className="book-modal-input" placeholder="Edição" type="text" name="edition" />
          </div>
          <div className="form-section">
            <h3>Detalhes da Publicação</h3>
            <input className="book-modal-input" placeholder="Ano de Publicação" type="text" name="publication_year" />
            <input className="book-modal-input" placeholder="Número de Páginas" type="text" name="number_of_pages" />
            <input className="book-modal-input" placeholder="Idioma" type="text" name="language" />
            <input className="book-modal-input" placeholder="Formato" type="text" name="format" />
            <input className="book-modal-input" placeholder="Disponibilidade" type="text" name="availability" />
            <h3>Imagem do Livro</h3>
            <input className="book-modal-input" placeholder="Link da Imagem" type="text" name="image_link" />
          </div>
          <button className="book-modal-button" type="submit">Cadastrar Livro</button>
        </form>
      </DialogContent>
      {/* <DialogActions className="book-modal-actions">
        <Button onClick={handleClose} className="book-modal-button">Fechar</Button>
      </DialogActions> */}
    </Dialog>
  );
}

export default BookModal;
