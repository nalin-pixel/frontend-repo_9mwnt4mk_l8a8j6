export default function Showcase() {
  const items = [
    { title: 'Landing Pages', desc: 'Conversões altas com design moderno.' },
    { title: 'Lojas Virtuais', desc: 'Catálogo, carrinho e pagamento.' },
    { title: 'Apps Mobile', desc: 'iOS/Android com UX impecável.' },
    { title: 'Sistemas Web', desc: 'Painéis, integrações e automações.' },
  ]

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-white mb-6">O que podemos criar</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-blue-500/20 bg-slate-800/40 p-4 text-blue-100 hover:border-blue-400/40 transition-colors">
              <p className="font-semibold text-white">{it.title}</p>
              <p className="text-sm text-blue-200/80 mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
