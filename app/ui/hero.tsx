export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center text-white px-4 pt-[3.75rem] bg-cover bg-center" // pt-[3.75rem] ou pt-15 (60px) para compensar a navbar
      style={{ backgroundImage: "url('image/bg-hero.jpg')" }}
    >
      {/* Overlay para melhorar a legibilidade do texto sobre a imagem */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60 z-0"></div>

      {/* Conteúdo do Hero */}
      <div className="relative z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ">
          {" "}
          {/* Alterado para h1 por ser o título principal da página */}
          Bem-vindo
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mb-6">
          Cuidando do seu bem-estar com excelência
        </p>
        <a
          href="#contact"
          className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 
                        transition-colors"
        >
          Agende sua consulta agora
        </a>
      </div>
    </section>
  );
}
