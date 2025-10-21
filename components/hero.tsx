export default function Hero() {
  return (
    <section id="home" className="pt-32 md:pt-48 pb-16 md:pb-32 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
            It's Time for the Tides to Change
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto text-balance leading-relaxed">
            Transform your life with professional therapy and wellness guidance. We provide the tools, support, and
            expertise you need to achieve lasting change.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-base md:text-lg">
            Tell Me More
          </button>
        </div>
      </div>
    </section>
  )
}
