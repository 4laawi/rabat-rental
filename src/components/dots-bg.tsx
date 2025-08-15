export function DotsBackground() {
  return (
    <div aria-hidden className="absolute inset-0 z-0 overflow-hidden">
      {/* Dots pattern */}
      <div
        className="h-full w-full"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.10) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "22px 22px, 44px 44px",
          backgroundPosition: "0 0, 11px 11px",
        }}
      />
      {/* Shimmer sweep */}
      <div
        className="pointer-events-none absolute inset-y-0 -left-1/2 right-0 bg-gradient-to-r from-transparent via-amber-300/25 to-transparent"
        style={{ animation: "shimmer 12s linear infinite" }}
      />
      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/70" />
    </div>
  )
}


