import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  { name: 'Wispa Voice Assistant Device', tag: 'Hardware · Embedded · AI', link: '#wispa', color: 'from-cyan-500 to-fuchsia-500' },
  { name: 'Cybersecurity Notes', tag: 'Study · Knowledge Base', link: '#security', color: 'from-purple-500 to-cyan-500' },
  { name: 'YouTube Content', tag: 'Creator · Tutorials', link: '#youtube', color: 'from-fuchsia-500 to-purple-500' },
]

export default function Projects() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {projects.map((p, i) => (
        <motion.a key={p.name} href={p.link} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
          className={`group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
          <div className="relative">
            <p className="text-white text-lg font-semibold">{p.name}</p>
            <p className="text-cyan-200/80 text-sm mt-1">{p.tag}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-cyan-200 group-hover:text-white">
              <span>Explore</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
