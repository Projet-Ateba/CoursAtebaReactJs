import React, { useState } from 'react';
import './exo2.css'
function ContactForm() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name} Email: ${email} Message: ${message}`);
    }
    return (
        <form onSubmit={handleSubmit} className='formm'>
        <input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Envoyer</button>
        </form>
    );
    }
    export default ContactForm;