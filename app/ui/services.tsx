export default function Services() {
  return (
    <section id="services" className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Nossos Serviços</h2>
      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Consultoria</h3>
          <p>Oferecemos análises personalizadas para o seu negócio.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Desenvolvimento Web</h3>
          <p>Criamos sites modernos e responsivos.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Marketing Digital</h3>
          <p>Planejamos e executamos campanhas para alcançar resultados reais.</p>
        </div>
      </div>
    </section>
  )
}
