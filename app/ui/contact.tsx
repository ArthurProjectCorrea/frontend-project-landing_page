"use client";

import { useState, FormEvent } from 'react';
import Alert from './alert';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFeedbackMessage(data.message || 'E-mail enviado com sucesso!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setFeedbackMessage(data.error || 'Falha ao enviar e-mail. Tente novamente.');
      }
    } catch (error) {
      setStatus('error');
      setFeedbackMessage('Ocorreu um erro. Tente novamente mais tarde.');
      console.error('Erro ao enviar formulário:', error);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Fale conosco</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input type="text" name="name" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-3 rounded border" />
        <input type="email" name="email" placeholder="Seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-3 rounded border" />
        <textarea name="message" placeholder="Sua mensagem" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} required className="w-full p-3 rounded border"></textarea>
        <button type="submit" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50" disabled={status === 'loading'}>
          {status === 'loading' ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
      {feedbackMessage && (status === 'success' || status === 'error') && (
        <Alert
          message={feedbackMessage}
          type={status === 'success' ? 'success' : 'error'}
        />
      )}
    </section>
  )
}
