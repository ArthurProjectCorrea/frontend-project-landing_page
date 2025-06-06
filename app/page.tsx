import type { Metadata } from 'next'
import Hero from './ui/hero'
import About from './ui/about'
import Services from './ui/services'
import Contact from './ui/contact' 

export const metadata: Metadata = {
  title: 'MinhaEmpresa - Soluções inteligentes',
  description: 'Landing page institucional com Next.js, focada em soluções para o seu negócio.',
}

export default function Home() {
  return (
    <>
      <main >
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
    </>
  )
}
