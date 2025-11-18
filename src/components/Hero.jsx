import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden" id="top">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <p className="text-cyan-300/90 text-sm tracking-widest uppercase mb-3">Portfolio · Sci‑Fi Interface</p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
              Aryan Patel
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400">
                Engineer · SVBIT Gandhinagar
              </span>
            </h1>
            <p className="mt-6 text-cyan-100/90 text-lg leading-relaxed">
              High‑interaction portfolio with parallax scroll, micro‑interactions, and GPU‑accelerated transitions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="px-5 py-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/10 transition">
                View Projects
              </a>
              <a href="#skills" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-lg shadow-cyan-500/20">
                Explore Skills
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-500/20 blur-3xl rounded-full animate-[pulse_5s_infinite]" />
      </div>
    </section>
  )
}
