import React from 'react'

const WhyUs = () => {
  const usps = [
    {
      icon: (
        <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Farmaceutische Expertise',
      description: 'Wij begrijpen de unieke uitdagingen van de farmaceutische industrie en CDMO sector. Onze strategieën zijn specifiek afgestemd op deze markt.'
    },
    {
      icon: (
        <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Bewezen Resultaten',
      description: 'Gemiddeld 150% toename in organisch verkeer binnen 6 maanden. Meer dan 200 succesvolle campagnes in de farmaceutische sector.'
    },
    {
      icon: (
        <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Persoonlijke Aanpak',
      description: 'Elke klant krijgt een toegewijde account manager en een op maat gemaakte strategie. Geen standaard pakketten, maar persoonlijke oplossingen.'
    },
    {
      icon: (
        <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Snelle Levering',
      description: 'Resultaten binnen 30 dagen zichtbaar. Onze geoptimaliseerde processen zorgen voor snelle implementatie zonder kwaliteitsverlies.'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Waarom Kiezen voor PHARMALINK EUROPE?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wij onderscheiden ons door onze expertise, bewezen resultaten en persoonlijke aanpak in de farmaceutische digitale marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {usps.map((usp, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {usp.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {usp.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {usp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">200+</div>
              <div className="text-gray-600">Succesvolle Campagnes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">150%</div>
              <div className="text-gray-600">Gemiddelde Groei</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Klanttevredenheid</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Beschikbaar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
