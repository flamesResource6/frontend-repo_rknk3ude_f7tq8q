import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Shield, Code2, Bot, Sparkles } from 'lucide-react'

const skills = [
  { icon: Cpu, name: 'Systems', items: ['Linux', 'Docker', 'Kubernetes', 'CI/CD'] },
  { icon: Code2, name: 'Web & Apps', items: ['React', 'Node', 'FastAPI', 'Vite'] },
  { icon: Shield, name: 'Security', items: ['Pentesting', 'OWASP', 'Forensics', 'CTFs'] },
  { icon: Bot, name: 'AI/ML', items: ['RAG', 'LLMs', 'Vision', 'Agents'] },
]

export default function Skills() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {skills.map(({ icon: Icon, name, items }, i) => (
        <motion.div key={name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
          <div className="absolute -top-20 -right-20 w-52 h-52 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 blur-3xl rounded-full group-hover:scale-110 transition-transform" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center text-white"><Icon className="w-5 h-5" /></div>
              <p className="text-white font-semibold">{name}</p>
            </div>
            <ul className="mt-4 space-y-1.5 text-cyan-100/90">
              {items.map(it => <li key={it} className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-cyan-300/80" /> {it}</li>)}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
