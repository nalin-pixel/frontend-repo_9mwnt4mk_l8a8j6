import { Rocket, Code2, Smartphone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(147,197,253,0.15),transparent_25%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300 bg-blue-500/10 border border-blue-400/20 rounded-full px-3 py-1">
              <Rocket className="w-3.5 h-3.5" /> Studio de Criação
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-tight">
              Sites e Apps sob medida, prontos para lançar
            </h1>
            <p className="mt-4 text-blue-200/90 text-lg">
              Conte sua ideia. Nós transformamos em um produto digital bonito, rápido e funcional.
            </p>
            <div className="mt-6 flex items-center gap-6 text-blue-200/80">
              <div className="flex items-center gap-2"><Code2 className="w-5 h-5" /> Websites modernos</div>
              <div className="flex items-center gap-2"><Smartphone className="w-5 h-5" /> Aplicativos incríveis</div>
            </div>
          </div>
          <div className="rounded-2xl border border-blue-500/20 bg-slate-800/40 backdrop-blur p-6">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/20 flex items-center justify-center text-blue-100">
              <div className="text-center">
                <p className="text-sm uppercase tracking-widest text-blue-300/80">Seu próximo projeto</p>
                <p className="text-2xl font-semibold mt-2">Vamos construir juntos</p>
              </div>
            </div>
            <p className="mt-4 text-blue-200/80 text-sm">
              Integramos design, desenvolvimento e implantação para você focar no seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
