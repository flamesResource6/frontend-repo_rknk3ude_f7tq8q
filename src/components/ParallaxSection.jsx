import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxSection({ id, headline, sub, children, tint = 'from-cyan-500/10 via-fuchsia-500/5 to-purple-500/10' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 1], [0.2, 1, 0.2])

  return (
    <section id={id} ref={ref} className="relative py-28 sm:py-36">
      <motion.div style={{ y, opacity }} className={`absolute inset-0 bg-gradient-to-br ${tint} pointer-events-none`} />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <p className="uppercase tracking-widest text-xs text-cyan-300/80">{sub}</p>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white">{headline}</h2>
        </motion.div>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  )
}
