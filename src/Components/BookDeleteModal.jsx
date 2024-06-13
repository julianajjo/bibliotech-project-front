import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions } from '@mui/material';
import "./index.css";
import Axios from 'axios';

function BookDeleteModal({ open, handleClose, book, onDelete }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (book) {
      setTitle(book.title);      
    }
  }, [book]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!book || !book._id) {
      console.error("O livro não está definido ou não possui um _id");
      return;
    }

    const baseURL = `http://localhost:3333/books/${book._id}`;

    try {
      await Axios.delete(baseURL, {
        id: book._id
      });
      handleClose();
      onDelete();
    } catch (error) {
      console.error('Erro ao tentar excluir o livro:', error);
      alert('Erro ao tentar excluir o livro. Por favor, tente novamente.');
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} className="book-delete-modal">
      <DialogTitle>{"Confirmar Exclusão"}</DialogTitle>
      <button className="close-button-delete-modal" onClick={handleClose}>X</button>
      <DialogContent>
        <DialogContentText>
          Tem certeza que deseja excluir o cadastro do livro <b>{title}</b>?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <button
          className="book-delete-modal-button"
          onClick={handleSubmit}>
          Excluir Livro
        </button>
      </DialogActions>
    </Dialog >
  )
};

export default BookDeleteModal;
