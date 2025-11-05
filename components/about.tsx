export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 md:order-1">
            <img
              src="/therapist-office.png"
              alt="Tunisia experience"
              className="rounded-lg shadow-lg w-full max-w-2xl"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Your Journey Awaits
            </h2>
            <div className="space-y-4 sm:space-y-6 text-foreground/80 leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl">
              <p>
                From hidden coastal villages to vibrant markets, from cooking authentic Tunisian meals to exploring desert oases, every moment is designed to immerse you fully. You'll feel the culture, taste the flavors, and uncover stories most travelers never see.
              </p>
              <p>
                Thousands of travelers have joined our curated experiences and left saying: "I finally felt the real Tunisia." "Every day was a new discovery I'll never forget."
              </p>
              <p>
                Our guides are local experts who know the country intimately. They bring Tunisia to life in ways no standard tour can.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
