import React, { useState } from 'react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])) // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqData = [
    {
      question: "What is CDMO SEO and why is it different from regular SEO?",
      answer: "CDMO SEO (Contract Development and Manufacturing Organization Search Engine Optimization) is specialized SEO for pharmaceutical companies that provide contract services. It's different because it targets highly specific industry keywords, regulatory compliance content, and B2B decision-makers rather than end consumers. The content needs to address technical specifications, quality standards, and industry regulations that are unique to the pharmaceutical sector."
    },
    {
      question: "How long does it take to see SEO results for pharmaceutical companies?",
      answer: "Typically, pharmaceutical companies can expect to see initial improvements in 3-6 months, with significant results in 6-12 months. However, this timeline depends on factors like current website authority, competition level, content quality, and the specific keywords being targeted. For highly competitive pharmaceutical terms, it may take 12-18 months to achieve top rankings."
    },
    {
      question: "What are the most important SEO factors for CDMO websites?",
      answer: "The key SEO factors for CDMO websites include: 1) Technical SEO (site speed, mobile optimization, security), 2) High-quality, industry-specific content that addresses regulatory requirements, 3) Local SEO for manufacturing facilities, 4) Building authoritative backlinks from pharmaceutical industry websites, 5) Optimizing for long-tail keywords specific to contract manufacturing services, and 6) Ensuring compliance with industry standards and regulations."
    },
    {
      question: "How do you handle the technical complexity of pharmaceutical websites?",
      answer: "We approach pharmaceutical website SEO with specialized knowledge of the industry's technical requirements. This includes optimizing complex service pages, handling technical documentation, managing regulatory compliance content, and ensuring proper schema markup for pharmaceutical services. We also focus on creating user-friendly navigation for technical audiences while maintaining the depth of information that industry professionals require."
    },
    {
      question: "What content strategies work best for pharmaceutical SEO?",
      answer: "Effective pharmaceutical content strategies include: 1) Creating comprehensive service pages with technical specifications, 2) Publishing industry insights and regulatory updates, 3) Developing case studies and success stories, 4) Creating educational content about manufacturing processes, 5) Publishing white papers and technical documentation, and 6) Maintaining a blog focused on industry trends and regulatory changes."
    },
    {
      question: "How do you measure SEO success for pharmaceutical companies?",
      answer: "We track multiple KPIs including: organic traffic growth, keyword rankings for industry-specific terms, lead generation from organic sources, website authority scores, backlink quality and quantity, content engagement metrics, and conversion rates from organic visitors. For pharmaceutical companies, we also monitor rankings for regulatory compliance terms and industry-specific service keywords."
    },
    {
      question: "What's the difference between pharmaceutical SEO and medical SEO?",
      answer: "Pharmaceutical SEO focuses on B2B services, manufacturing capabilities, and regulatory compliance for companies in the pharmaceutical industry. Medical SEO targets healthcare providers and end consumers seeking medical information or services. Pharmaceutical SEO requires deeper technical knowledge, focuses on industry-specific keywords, and targets decision-makers rather than patients. The content strategy and keyword research are fundamentally different."
    },
    {
      question: "How do you stay updated with pharmaceutical industry SEO changes?",
      answer: "We maintain active involvement in pharmaceutical industry forums, attend industry conferences, monitor regulatory changes, and stay updated with search engine algorithm updates. We also have direct experience in the life sciences field, which helps us understand industry trends and adapt our SEO strategies accordingly. Regular training and certification in both SEO and pharmaceutical industry developments ensures we provide cutting-edge solutions."
    },
    {
      question: "Can SEO help with regulatory compliance for pharmaceutical websites?",
      answer: "Yes, SEO can significantly help with regulatory compliance. By optimizing content for regulatory terms and creating comprehensive compliance-focused content, we help pharmaceutical companies demonstrate their adherence to industry standards. This includes optimizing for FDA guidelines, GMP requirements, ISO standards, and other regulatory frameworks. Proper SEO also ensures that compliance information is easily discoverable by regulators and industry professionals."
    },
    {
      question: "What's your approach to link building for pharmaceutical companies?",
      answer: "Our pharmaceutical link building strategy focuses on quality over quantity. We target authoritative industry publications, regulatory bodies, pharmaceutical associations, and industry-specific directories. We create valuable content that naturally attracts links from relevant sources, participate in industry discussions, and build relationships with key industry players. We avoid low-quality directories and focus on sources that add genuine value to the pharmaceutical community."
    }
  ]

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about pharmaceutical SEO, CDMO digital marketing, and our specialized services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform duration-200 ${
                      openItems.has(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openItems.has(index) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our pharmaceutical SEO experts are here to help. 
                Get in touch for personalized advice about your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  Contact Our Experts
                </button>
                <button 
                  onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary"
                >
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
