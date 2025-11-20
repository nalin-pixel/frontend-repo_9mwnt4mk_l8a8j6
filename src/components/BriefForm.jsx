import { useState } from 'react'

export default function BriefForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  const [form, setForm] = useState({
    title: '',
    type: 'website',
    description: '',
    target_audience: '',
    key_features: '',
    style: '',
    budget: '',
    deadline: '',
    contact_email: ''
  })

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const payload = {
        title: form.title,
        type: form.type,
        description: form.description,
        target_audience: form.target_audience || undefined,
        key_features: form.key_features
          ? form.key_features.split(',').map((s) => s.trim()).filter(Boolean)
          : [],
        style: form.style || undefined,
        budget: form.budget || undefined,
        deadline: form.deadline || undefined,
        contact_email: form.contact_email || undefined,
      }

      const res = await fetch(`${backend}/api/briefs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error(`Erro ao enviar: ${res.status}`)
      const data = await res.json()
      setSuccess(`Brief recebido! ID: ${data.id}`)
      setForm({
        title: '', type: 'website', description: '', target_audience: '',
        key_features: '', style: '', budget: '', deadline: '', contact_email: ''
      })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-slate-800/50 border border-blue-500/20 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-white mb-1">Conte sua ideia</h2>
          <p className="text-blue-200/80 mb-6">Preencha o brief e retornaremos com proposta e escopo.</p>

          {success && <div className="mb-4 text-green-300 text-sm">{success}</div>}
          {error && <div className="mb-4 text-red-300 text-sm">{error}</div>}

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-blue-200/80 text-sm mb-1">Título do projeto</label>
              <input name="title" value={form.title} onChange={handleChange} required className="w-full bg-slate-900/60 border border-blue-500/20 rounded-lg px-3 py-2 text-white outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-blue-200/80 text-sm mb-1">Tipo</label>
              <select name="type" value={form.type} onChange={handleChange} className="w-full bg-slate-900/60 border border-blue-500/20 rounded-lg px-3 py-2 text-white">
                <option value="website">Website</option>
                <option value="app">Aplicativo</option>
              </select>
            </div>

            <div>
              <label className="block text-blue-200/80 text-sm mb-1">Público-alvo</label>
              <input name="target_audience" value={form.target_audience} onChange={handleChange} className="w-full bg-slate-900/60 border border-blue-500/20 rounded-lg px-3 py-2 text-white" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-blue-200/80 text-sm mb-1">Descrição</label>
              <textarea name="description" value={form.description} onChange={handleChange} required rows={4} className="w-full bg-slate-900/60 border border-blue-500/20 rounded-lg px-3 py-2 text-white" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-blue-200/80 text-sm mb-1">Principais funcionalidades (separe por vírgula)</label>
              <input name="key_features" value={form.key_features} onChange={handleChange} className="w-full bg-slate-900/60 border border-blue-500/20 rounded-lg px-3 py-2 text-white" />
            </div>

            <div>
              <label className="block text-blue-200/80 text-sm mb-1">Estilo/Referências</label>
              <input name="style" value={form.style} onChange={handleChange} className="w-full bg-slate-900/60 border border-blue-500/20 rounded-lg px-3 py-2 text-white" />
            </div>

            <div>
              <label className="block text-blue-200/80 text-sm mb-1">Orçamento</label>
              <input name="budget" value={form.budget} onChange={handleChange} className="w-full bg-slate-900/60 border border-blue-500/20 rounded-lg px-3 py-2 text-white" />
            </div>

            <div>
              <label className="block text-blue-200/80 text-sm mb-1">Prazo</label>
              <input name="deadline" value={form.deadline} onChange={handleChange} className="w-full bg-slate-900/60 border border-blue-500/20 rounded-lg px-3 py-2 text-white" />
            </div>

            <div>
              <label className="block text-blue-200/80 text-sm mb-1">Email para contato</label>
              <input type="email" name="contact_email" value={form.contact_email} onChange={handleChange} className="w-full bg-slate-900/60 border border-blue-500/20 rounded-lg px-3 py-2 text-white" />
            </div>

            <div className="md:col-span-2 flex items-center gap-3 mt-2">
              <button disabled={loading} className="bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-semibold px-4 py-2 rounded-lg">
                {loading ? 'Enviando...' : 'Enviar Brief'}
              </button>
              <a href="/test" className="text-blue-300/80 hover:text-blue-200 text-sm">Testar conexão</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
