import React from 'react'

const Cases = () => {
  const cases = [
    {
      title: 'PharmaCorp - API Manufacturing',
      description: 'Increased organic traffic by 300% in 6 months through targeted SEO and content marketing strategies.',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop&crop=center',
      tags: ['SEO', 'Content Marketing', 'B2B'],
      results: ['300% Traffic Increase', '45 New Keywords', '25% Conversion Rate']
    },
    {
      title: 'BioPharma Solutions - Drug Development',
      description: 'Established thought leadership through comprehensive content strategy and industry partnerships.',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop&crop=center',
      tags: ['Thought Leadership', 'Link Building', 'Industry SEO'],
      results: ['200+ Quality Backlinks', '15% Domain Authority', '40% Lead Generation']
    },
    {
      title: 'MediTech Labs - Clinical Trials',
      description: 'Optimized website for clinical trial recruitment with targeted local SEO and content optimization.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
      tags: ['Local SEO', 'Clinical Trials', 'Recruitment'],
      results: ['150% Local Visibility', '60% Trial Applications', '8 New Locations']
    },
    {
      title: 'CDMO Partners - Manufacturing Services',
      description: 'Enhanced online presence for contract manufacturing services with industry-specific optimization.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center',
      tags: ['CDMO SEO', 'Service Pages', 'Industry Keywords'],
      results: ['180% Service Inquiries', '35 New Keywords', '25% Cost Reduction']
    }
  ]

  const testimonials = [
    {
      text: "PHARMALINK EUROPE has dramatically improved our online visibility. Within 6 months, we saw a 300% increase in organic traffic and significantly more qualified leads.",
      author: "Dr. Sarah van der Berg",
      company: "PharmaCorp",
      role: "Marketing Director"
    },
    {
      text: "Excellent results and professional service. PHARMALINK EUROPE helped us strengthen our market position and establish thought leadership in the industry.",
      author: "Lisa Chen",
      company: "BioPharma Solutions",
      role: "CEO"
    },
    {
      text: "The team's expertise in pharmaceutical digital marketing is unmatched. They delivered results that exceeded our expectations and helped us reach new markets.",
      author: "Dr. Michael Rodriguez",
      company: "MediTech Labs",
      role: "Clinical Director"
    }
  ]

  return (
    <section id="cases" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories & Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped pharmaceutical companies and CDMOs achieve remarkable results through strategic digital marketing.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {caseStudy.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-primary-600 text-white text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {caseStudy.description}
                </p>
                
                <div className="space-y-2">
                  {caseStudy.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              What Our Clients Say
            </h3>
            <p className="text-gray-600">
              Real feedback from pharmaceutical industry leaders
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cases
