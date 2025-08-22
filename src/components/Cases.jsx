import React from 'react'

const Cases = () => {
  const cases = [
    {
      title: 'PharmaCorp Nederland',
      industry: 'Farmaceutische Productie',
      results: '300% toename in organisch verkeer',
      description: 'Complete SEO en linkbuilding campagne voor een toonaangevende farmaceutische producent in Nederland.',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop',
      tags: ['SEO', 'Linkbuilding', 'Content Marketing']
    },
    {
      title: 'MediTech Solutions',
      industry: 'Medische Apparatuur',
      results: '250% groei in leads',
      description: 'Strategische content marketing en linkbuilding voor een innovatieve medische technologie leverancier.',
      image: 'https://images.unsplash.com/photo-1576091160399-112c8b0a0a1a?w=400&h=300&fit=crop',
      tags: ['Content Marketing', 'SEO', 'Lead Generation']
    },
    {
      title: 'BioPharma CDMO',
      industry: 'Contract Manufacturing',
      results: '400% toename in website autoriteit',
      description: 'Gespecialiseerde CDMO ondersteuning met focus op regulatory compliance en market access.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      tags: ['CDMO Support', 'Regulatory', 'Market Access']
    },
    {
      title: 'VaccineTech Europe',
      industry: 'Vaccin Ontwikkeling',
      results: '180% groei in organisch verkeer',
      description: 'Comprehensive digitale marketing strategie voor een innovatieve vaccin ontwikkelaar.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      tags: ['SEO', 'Content Marketing', 'Industry Expertise']
    }
  ]

  return (
    <section id="cases" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Onze Cases & Resultaten
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bekijk hoe wij farmaceutische bedrijven hebben geholpen om hun online aanwezigheid te versterken en groei te realiseren.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {caseItem.industry}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {caseItem.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {caseItem.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-lg font-semibold text-primary-600 mb-2">
                    Resultaat:
                  </div>
                  <p className="text-gray-700 font-medium">
                    {caseItem.results}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {caseItem.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="btn-secondary w-full">
                  Bekijk Volledige Case
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            Bekijk Alle Cases
          </button>
        </div>

        {/* Testimonials */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Wat Onze Klanten Zeggen
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "PHARMALINK EUROPE heeft onze online zichtbaarheid drastisch verbeterd. Binnen 6 maanden zagen we een toename van 300% in organisch verkeer."
              </p>
              <div className="font-semibold text-gray-900">- Dr. Sarah van der Berg, PharmaCorp</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "De expertise in de farmaceutische sector is ongeëvenaard. Ze begrijpen onze uitdagingen en bieden oplossingen op maat."
              </p>
              <div className="font-semibold text-gray-900">- Mark Johnson, MediTech</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Uitstekende resultaten en professionele service. PHARMALINK EUROPE heeft ons geholpen om onze marktpositie te versterken."
              </p>
              <div className="font-semibold text-gray-900">- Lisa Chen, BioPharma</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cases
