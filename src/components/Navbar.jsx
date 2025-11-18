import React from 'react'
import { Menu, Sparkles } from 'lucide-react'

const links = [
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'security', label: 'Cybersecurity' },
  { id: 'youtube', label: 'YouTube' },
  { id: 'wispa', label: 'Wispa' },
  { id: 'events', label: 'Events' },
  { id: 'ambassador', label: 'Ambassador' },
]

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg flex items-center justify-between px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/40 blur-xl rounded-full" />
              <div className="relative bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-white w-9 h-9 rounded-xl grid place-items-center shadow-inner">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold">Aryan Patel</p>
              <p className="text-xs text-cyan-200/80">Engineer · SVBIT Gandhinagar</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            {links.map(l => (
              <a key={l.id} href={`#${l.id}`} className="text-sm text-cyan-100/90 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <button className="md:hidden p-2 rounded-lg hover:bg-white/10 text-cyan-100" aria-label="menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
