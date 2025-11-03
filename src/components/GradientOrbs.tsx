'use client'

import { useScroll, useTransform, motion } from 'framer-motion'

export function GradientOrbs() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -150])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#6AC670]/30 to-[#F2CF07]/30 rounded-full blur-[120px] animate-pulse"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-gradient-to-tr from-[#F2CF07]/30 to-[#6AC670]/30 rounded-full blur-[150px] animate-pulse"
      />
    </div>
  )
}
