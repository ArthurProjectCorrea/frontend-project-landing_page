import { Bone, Brain, AirVent, PersonStanding, Sparkles } from "lucide-react"; // Ícones de exemplo, Lung alterado para AirVent

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 px-4 text-center bg-white dark:bg-stone-900"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-stone-800 dark:text-white">
        Nossos Serviços
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {/* Serviço 1 */}
        <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center mb-4">
            <Bone className="w-12 h-12 text-pink-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-stone-700 dark:text-stone-100">
            Fisioterapia Ortopédica
          </h3>
          <p className="text-stone-600 dark:text-stone-300">
            Tratamento e prevenção de lesões musculares, ósseas e articulares.
          </p>
        </div>

        {/* Serviço 2 */}
        <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-12 h-12 text-pink-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-stone-700 dark:text-stone-100">
            Fisioterapia Neurológica
          </h3>
          <p className="text-stone-600 dark:text-stone-300">
            Reabilitação de pacientes com distúrbios neurológicos e sequelas.
          </p>
        </div>

        {/* Serviço 3 */}
        <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center mb-4">
            <AirVent className="w-12 h-12 text-pink-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-stone-700 dark:text-stone-100">
            Fisioterapia Respiratória
          </h3>
          <p className="text-stone-600 dark:text-stone-300">
            Melhora da função pulmonar e qualidade de vida para pacientes respiratórios.
          </p>
        </div>

        {/* Serviço 4 */}
        <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center mb-4">
            <PersonStanding className="w-12 h-12 text-pink-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-stone-700 dark:text-stone-100">
            Pilates Terapêutico
          </h3>
          <p className="text-stone-600 dark:text-stone-300">
            Fortalecimento, flexibilidade e consciência corporal com foco terapêutico.
          </p>
        </div>

        {/* Serviço 5 */}
        <div className="bg-stone-100 dark:bg-stone-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-12 h-12 text-pink-500" /> {/* Exemplo para Acupuntura */}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-stone-700 dark:text-stone-100">
            Acupuntura
          </h3>
          <p className="text-stone-600 dark:text-stone-300">
            Técnica milenar para alívio de dores e promoção do equilíbrio energético.
          </p>
        </div>
      </div>
    </section>
  );
}
