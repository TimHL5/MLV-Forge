export function ScanLines() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-10 animate-scan"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(106, 198, 112, 0.1) 0px, transparent 1px, transparent 2px, rgba(106, 198, 112, 0.1) 3px)',
        }}
      />
    </div>
  )
}
