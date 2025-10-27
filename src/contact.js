import React, { useState } from 'react';
import { ChevronRight, Youtube, Facebook, Instagram } from 'lucide-react';

export default function ContactPage() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Why are my signs different?",
      answer: (
        <>
          <p className="mb-4">
            Your signs are different because{' '}
            <a href="https://masteringthezodiac.com#learnmore" className="text-blue-600 hover:underline">
              true sidereal astrology
            </a>{' '}
            uses the <strong>actual location of the planets in the sky</strong>. Mainstream western astrology (tropical) doesn't use where the planets actually are - it uses a{' '}
            <a href="https://masteringthezodiac.com/sidereal-astrology#vs-tropical" className="text-blue-600 hover:underline">
              seasonal calendar system
            </a>{' '}
            instead.
          </p>
          <p>
            We believe the true sidereal chart is the most foundational chart in astrology. It shows what constellations the planets were actually in at the time of your birth - the same sky our ancestors looked at for thousands of years before simplified calendar systems.
          </p>
        </>
      )
    },
    {
      id: 2,
      question: "Do we use degrees with true sidereal astrology?",
      answer: (
        <>
          <p className="mb-4">
            You can. However, we personally don't use degrees with true sidereal. Since true sidereal uses the <strong>actual uneven sizes of the constellations</strong>, degrees become ambiguous. Degrees are useful when signs are an even 30-degrees, but in true sidereal the signs are different sizes, so degrees don't have practical meaning.
          </p>
          <p>
            If you purchase the{' '}
            <a href="https://masteringthezodiac.com/sidereal-report" className="text-blue-600 hover:underline">
              report
            </a>{' '}
            and would like to see degrees, we can generate your chart with degrees upon request.
          </p>
        </>
      )
    },
    {
      id: 3,
      question: "How is the report different from personal readings?",
      answer: (
        <>
          <p className="mb-4">
            <strong>The Report:</strong> A comprehensive printout of all your placements with detailed interpretations. Perfect for understanding your personality, strengths, and challenges.
          </p>
          <p className="mb-4">
            <strong>Personal Readings:</strong> Focused on your unique life path and how to align with it for greater fulfillment. Provides personalized guidance for working with your chart.
          </p>
          <p>
            Choose the{' '}
            <a href="https://masteringthezodiac.com/sidereal-report" className="text-blue-600 hover:underline">
              report
            </a>{' '}
            for detailed self-knowledge, or a{' '}
            <a href="https://masteringthezodiac.com/sidereal-astrology-readings" className="text-blue-600 hover:underline">
              reading
            </a>{' '}
            for customized life path guidance.
          </p>
        </>
      )
    }
  ];

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-light mb-8">
            Frequently Asked Questions
          </h2>

          {faqs.map((faq) => (
            <div key={faq.id} className="mb-4">
              <div
                className="bg-gray-50 hover:bg-gray-100 p-4 rounded cursor-pointer transition-colors duration-200 flex items-center"
                onClick={() => toggleFaq(faq.id)}
              >
                <ChevronRight
                  className={`w-5 h-5 text-gray-700 mr-3 transition-transform duration-300 flex-shrink-0 ${
                    expandedFaq === faq.id ? 'rotate-90' : ''
                  }`}
                />
                <h3 className="font-bold text-gray-800">{faq.question}</h3>
              </div>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-gray-50 p-6 text-gray-800 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}

          <a
            href="/faq"
            className="block mt-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded transition-colors duration-200"
          >
            <div className="flex items-center">
              <ChevronRight className="w-5 h-5 mr-3" />
              <strong>All frequently asked questions</strong>
            </div>
          </a>
        </div>

        {/* Contact Section */}
        <h1 className="text-5xl md:text-6xl font-extralight text-left mb-16 tracking-wide">
          Contact
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info and Form */}
          <div>
            <p className="mb-4 text-gray-800 leading-relaxed">
              Didn't find the answer to your question in the{' '}
              <a href="/faq" className="text-blue-600 hover:underline">
                FAQ page
              </a>
              ? We are happy to answer any questions you might have.
            </p>
            
            <p className="mb-4 text-gray-800 leading-relaxed">
              E-mail{' '}
              <a href="mailto:contact@masteringthezodiac.com" className="text-blue-600 hover:underline">
                contact@masteringthezodiac.com
              </a>
            </p>

            <p className="mb-4 text-gray-800 leading-relaxed">Or, simply use the form below:</p>

            <iframe
              title="Contact Form"
              src="https://5e794280.sibforms.com/serve/MUIEANZLQdY2awYFM2IIW2LvATymfNrfrf8jP4bVqH28Mu9w22FdbXf8_GINXjB_Ig2FA8JwPrff6jv2_lMMbs9gF-5z_s-8a8jeJIK7ywkUylve_S8qH_6DrCHz7IAE_hMG3J8heGHvaEpUs5EKdsma-_SRO77KqnXKbnjhiR5MTK0MM17LB1H9hOtsPeyNhNbqWuIEuuZ7LlN4"
              className="w-full h-96 border-0 rounded shadow-sm"
              scrolling="auto"
            />
          </div>

          {/* Right Column - Social Links */}
          <div>
            <div className="flex gap-6 mb-12">
              <a
                href="https://www.youtube.com/masteringthezodiac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Youtube className="w-12 h-12" />
              </a>
              <a
                href="https://www.facebook.com/masteringthezodiac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Facebook className="w-12 h-12" />
              </a>
              <a
                href="https://www.instagram.com/masteringthezodiac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Instagram className="w-12 h-12" />
              </a>
            </div>

            <h2 className="text-2xl font-normal mb-4 mt-12">
              <a href="/insiders" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Join Newsletter
              </a>
            </h2>

            <h2 className="text-2xl font-normal mb-4">
              <a href="/partners" target="_blank" rel="nofollow noopener noreferrer" className="text-blue-600 hover:underline">
                Affiliate Program
              </a>
            </h2>

            <h2 className="text-2xl font-normal">
              <a href="https://donate.stripe.com/7sI00WdEAaX250s28y" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Donate
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}