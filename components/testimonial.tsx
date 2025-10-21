export default function Testimonial() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="space-y-6">
          <p className="text-2xl md:text-3xl font-semibold text-foreground italic">
            "We don't have to do all alone. We were never meant to."
          </p>
          <footer className="text-lg text-foreground/70">
            — Brené Brown
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
