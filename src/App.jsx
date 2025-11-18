import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParallaxSection from './components/ParallaxSection'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContentFeeds from './components/ContentFeeds'
import Timeline from './components/Timeline'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-cyan-100">
      <Navbar />
      <Hero />

      <ParallaxSection id="skills" headline="Skills" sub="Core capabilities">
        <Skills />
      </ParallaxSection>

      <ParallaxSection id="projects" headline="Projects" sub="Selected work" tint="from-fuchsia-500/10 via-purple-500/5 to-cyan-500/10">
        <Projects />
      </ParallaxSection>

      <ParallaxSection id="teaching" headline="Teaching & Notes" sub="Knowledge sharing">
        <ContentFeeds />
      </ParallaxSection>

      <ParallaxSection id="security" headline="Cybersecurity Study Notes" sub="Prepared references" tint="from-purple-500/10 via-cyan-500/5 to-fuchsia-500/10">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <p className="text-cyan-100/90">A curated set of notes covering pentesting methodologies, OWASP Top 10, network forensics, and incident response flow. Organized as checklists and quick reads for fast recall.</p>
        </div>
      </ParallaxSection>

      <ParallaxSection id="youtube" headline="YouTube Content" sub="Tutorials & demos">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <p className="text-cyan-100/90">Latest videos and shorts focused on app development, security, and AI tips. Embed feed here later.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <p className="text-cyan-100/90">Production pipeline: scripting, recording, editing, and publishing with motion graphics.</p>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection id="wispa" headline="Wispa Device" sub="App development & embedded">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <p className="text-cyan-100/90">Wispa is a voice‑assistant hardware device with on‑device wake word and a companion app. Work spans firmware prototyping, mic array tuning, and intent routing.</p>
        </div>
      </ParallaxSection>

      <ParallaxSection id="events" headline="University Events" sub="Talks · workshops · fests">
        <Timeline />
      </ParallaxSection>

      <ParallaxSection id="ambassador" headline="Ambassador Activities" sub="Google Gemini Student Ambassador">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <p className="text-cyan-100/90">Community building through sessions, broadcasts, and mentorship. This timeline syncs with public updates as available.</p>
        </div>
      </ParallaxSection>

      <footer className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 flex items-center justify-between">
          <p className="text-cyan-200/70">© {new Date().getFullYear()} Aryan Patel — SVBIT Gandhinagar</p>
          <a href="#top" className="px-4 py-2 rounded-xl bg-white/10 text-white border border-white/10 hover:bg-white/20 transition">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
