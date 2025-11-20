import Hero from './components/Hero'
import Showcase from './components/Showcase'
import BriefForm from './components/BriefForm'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      <header className="relative border-b border-blue-500/20">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/flame-icon.svg" alt="logo" className="w-8 h-8" />
            <span className="font-semibold">Studio</span>
          </a>
          <nav className="flex items-center gap-6 text-blue-200/80">
            <a href="#servicos" className="hover:text-white">Serviços</a>
            <a href="#brief" className="hover:text-white">Brief</a>
            <a href="/test" className="hover:text-white">Status</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <div id="servicos">
          <Showcase />
        </div>
        <div id="brief">
          <BriefForm />
        </div>
      </main>

      <footer className="relative border-t border-blue-500/20 py-6 text-center text-blue-300/70 text-sm">
        Feito para você criar sites e aplicativos com facilidade.
      </footer>
    </div>
  )
}

export default App
