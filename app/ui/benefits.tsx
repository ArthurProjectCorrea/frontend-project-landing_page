import { CheckCircle2 } from "lucide-react"; // Ícone de exemplo

const benefitsData = [
  "Atendimento humanizado e individualizado",
  "Profissionais especializados",
  "Resultados comprovados",
  "Ambientes modernos e seguros",
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-16 px-4 bg-stone-50 dark:bg-stone-900 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-stone-800 dark:text-white">
          Benefícios da Fisioterapia na VivaBem
        </h2>
        <ul className="space-y-4 text-left">
          {benefitsData.map((benefit, index) => (
            <li
              key={index}
              className="flex items-start text-lg text-stone-700 dark:text-stone-300"
            >
              <CheckCircle2 className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0 mt-1" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}