import Hero from './ui/hero'
import Benefits from './ui/benefits' // Importando o novo componente
import About from './ui/about'
import Services from './ui/services'
import FormEmail from './ui/formemail'

export default function Home() {
  return (
    <>
      <main >
        <Hero />
        <Benefits /> {/* Adicionando o componente Benefits */}
        <About />
        <Services />
        <FormEmail />
      </main>
    </>
  )
}
