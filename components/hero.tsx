"use client"

export default function Hero() {
  const handleScroll = () => {
    const element = document.querySelector("#about")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="pt-24 md:pt-32 lg:pt-48 pb-12 md:pb-20 lg:pb-32 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight px-2">
            Experience Tunisia Like Never Before — Secrets Only Locals Know
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto text-balance leading-relaxed px-4">
            Picture yourself wandering colorful medinas, tasting dishes cooked by locals, and riding camels across the Sahara at sunrise. Tunisia isn't just a place you visit—it's a place you live.
          </p>
          <button
            onClick={handleScroll}
            className="bg-white text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-sm sm:text-base md:text-lg touch-manipulation active:scale-95"
          >
            Discover Tunisia
          </button>
        </div>
      </div>
    </section>
  )
}
