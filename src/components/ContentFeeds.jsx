import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Note: WhatsApp group content cannot be fetched client-side due to authentication.
// We present contextual placeholders with animated cards ready for backend integration.

function Card({ title, desc, cta }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl overflow-hidden">
      <div className="absolute -inset-20 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="mt-2 text-cyan-100/80 text-sm">{desc}</p>
        {cta && <a href={cta.href} className="inline-block mt-4 text-cyan-200 hover:text-white">{cta.label} →</a>}
      </div>
    </div>
  )
}

export default function ContentFeeds() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <Card title="Google Gemini Student Ambassador"
        desc="Highlights and broadcasts curated into an ambient timeline."
        cta={{ href: '#ambassador', label: 'See timeline' }} />
      <Card title="University Events"
        desc="Talks, workshops, and campus initiatives at SVBIT Gandhinagar."
        cta={{ href: '#events', label: 'See events' }} />
      <Card title="Cybersecurity Notes"
        desc="Concise study notes with links, labs, and checklists."
        cta={{ href: '#security', label: 'Open notes' }} />
    </div>
  )
}
