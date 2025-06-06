"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton({
  phone = "5565981366997",
  message = "Olá! Gostaria de mais informações.",
}) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed animate-bounce bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4 py-4 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium transition shadow-lg"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}
