import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Brand Name */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-2">
              PHARMALINK
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-600">
              EUROPE
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Expert in CDMO SEO Linkbuilding Services. We help pharmaceutical companies increase online visibility and generate organic traffic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Start Free Consultation
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              View Our Cases
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>100+ Satisfied Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Certified Experts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
