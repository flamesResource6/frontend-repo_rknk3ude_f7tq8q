import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { t: 'Ambassador', h: 'Google Gemini Student Ambassador', d: 'Workshops, sessions, and broadcasts to empower students.', id: 'ambassador' },
  { t: 'Events', h: 'University Events', d: 'SVBIT Gandhinagar tech fests, hackathons, and meetups.', id: 'events' },
  { t: 'Project', h: 'Wispa Voice Assistant Device', d: 'R&D on embedded voice interface and app integration.', id: 'wispa' },
]

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-fuchsia-500/40 to-purple-500/40" />
      <div className="space-y-10">
        {items.map((it, i) => (
          <motion.div key={it.h} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative sm:grid sm:grid-cols-2 gap-6 items-start">
            <div className="pl-10 sm:pl-0 sm:text-right">
              <p className="text-xs uppercase tracking-widest text-cyan-300/80">{it.t}</p>
              <h3 className="text-white font-semibold">{it.h}</h3>
            </div>
            <div className="pl-10 sm:pl-0">
              <p className="text-cyan-100/80">{it.d}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
