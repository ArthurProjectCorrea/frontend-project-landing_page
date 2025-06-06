export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen  flex items-center justify-center text-center bg-gray-600 text-white px-4 pt-[3.75rem]" // pt-[3.75rem] ou pt-15 (60px) para compensar a navbar
    >
      <div className="">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 "> {/* Alterado para h1 por ser o título principal da página */}
          Bem-vindo à MinhaEmpresa
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mb-6">
          Soluções simples para seus problemas reais
        </p>
        <a href="#contact" className="bg-white text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Fale conosco</a>
      </div>
    </section>
  )
}
