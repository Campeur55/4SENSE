export default function About() {
  return (
    <section id="about" className="py-48 md:py-96 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img src="/therapist-office.png" alt="Therapist" className="rounded-lg shadow-lg w-full max-w-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-12">
            <h2 className="text-5xl md:text-7xl font-bold text-foreground">Hi, I'm Samantha</h2>
            <div className="space-y-8 text-foreground/80 leading-relaxed text-xl md:text-2xl">
              <p>
                With over 10 years of experience in therapeutic practice, I'm dedicated to helping individuals discover
                their path to wellness and personal growth.
              </p>
              <p>
                My approach combines evidence-based techniques with compassionate listening to create a safe space for
                transformation. I specialize in anxiety, depression, life transitions, and personal development.
              </p>
              <p>
                I believe that everyone has the capacity for change and growth. My role is to guide you through that
                journey with expertise, empathy, and genuine care.
              </p>
            </div>
            <button className="bg-primary text-primary-foreground px-10 py-5 rounded-lg font-semibold hover:bg-secondary transition-colors text-xl">
              Learn More About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
