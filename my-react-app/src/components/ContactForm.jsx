import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [messaggio, setMessaggio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Messaggio:', messaggio);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact form</h2>
      <div className="form-group">
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="messaggio">Messaggio:</label>
        <textarea
          id="messaggio"
          value={messaggio}
          onChange={(e) => setMessaggio(e.target.value)}
          className="form-input"
        />
      </div>
      <button className="contact-btn" type="submit">Invia</button>
    </form>
  );
}

export default ContactForm;
