export function AnimatedGrid() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-20 animate-grid-move"
        style={{
          backgroundImage: `
            linear-gradient(rgba(106, 198, 112, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(106, 198, 112, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
    </div>
  )
}
