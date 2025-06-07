"use client";

import { useState, FormEvent } from 'react';
import Alert from './alert';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const serviceOptions = [
    "Fisioterapia Ortopédica",
    "Fisioterapia Neurológica",
    "Fisioterapia Respiratória",
    "Pilates Terapêutico",
    "Acupuntura"
  ];

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
        body: JSON.stringify({ name, email, phone, serviceType, message: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nTipo de atendimento: ${serviceType}\nMensagem: ${message}` }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFeedbackMessage(data.message || 'E-mail enviado com sucesso!');
        setName('');
        setEmail('');
        setMessage('');
        setPhone('');
        setServiceType('');
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
    <section id="contact" className="py-16 px-4 bg-stone-100 dark:bg-stone-800">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-stone-800 dark:text-white">
          Agendamento Rápido
        </h2>
        <p className="text-lg mb-8 text-stone-700 dark:text-stone-300">
          Agende sua avaliação gratuita!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Nome</label>
          <input type="text" id="name" name="name" placeholder="Seu nome completo" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-3 rounded-md bg-white border border-gray-300 dark:border-stone-600 dark:bg-stone-700 dark:text-white focus:ring-pink-500 focus:border-pink-500" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">E-mail</label>
          <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-3 rounded-md bg-white border border-gray-300 dark:border-stone-600 dark:bg-stone-700 dark:text-white focus:ring-pink-500 focus:border-pink-500" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Telefone</label>
          <input type="tel" id="phone" name="phone" placeholder="(XX) XXXXX-XXXX" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full p-3 rounded-md bg-white border border-gray-300 dark:border-stone-600 dark:bg-stone-700 dark:text-white focus:ring-pink-500 focus:border-pink-500" />
        </div>
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Tipo de atendimento desejado</label>
          <select
            id="serviceType"
            name="serviceType"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            required
            className="w-full p-3 rounded-md bg-white border border-gray-300 dark:border-stone-600 dark:bg-stone-700 dark:text-white focus:ring-pink-500 focus:border-pink-500"
          >
            <option value="" disabled>Selecione um serviço</option>
            {serviceOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        {/* <textarea name="message" placeholder="Sua mensagem (opcional)" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full p-3 rounded-md bg-white border border-gray-300 dark:border-stone-600 dark:bg-stone-700 dark:text-white focus:ring-pink-500 focus:border-pink-500"></textarea> */}
        <button
          type="submit"
          className="w-full bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 dark:hover:bg-pink-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar e Agendar'}
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
