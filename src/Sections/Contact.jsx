import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const handleBack=() => {
    window.location.href='/';
}
const [state, handleSubmit] = useForm("mdkwgwza");

if (state.succeeded) {
  return (
    <div className='relative'>
      <section
        id="contact"
        data-section-name="contact"
        data-scroll
        className="relative mt-0 min-h-screen w-full px-8 lg:px-24 flex items-center bg-gray-50"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-black">Thanks for joining!🎉</h2>
          <p className="text-xl text-gray-600">Your message has been sent successfully. I'll get back to you soon.</p>
          <button onClick={handleBack} className='w-full py-3 bg-blue-600 text-pure font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>Get back</button>
        </div>
      </section>
    </div>
  );
}

return (
  <div className='relative'>
    <section
      id="contact"
      data-section-name="contact"
      data-scroll
      className="relative min-h-screen w-full px-8 lg:px-24 flex items-center bg-gray-50"
    >
      <div className="w-full max-w-6xl mx-auto mt-10">
        <div className="text-left mb-16">
          <h2
            data-scroll
            data-scroll-speed="1"
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="text-black">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Get In Touch
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I'm always interested in new opportunities and collaborations.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  src: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
                  label: 'Email',
                  value: 'kirubakaran003k2@gmail.com',
                  href: 'mailto:kirubakaran003k2@gmail.com'
                },
                {
                  src: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/kirubakarann',
                  href: 'https://linkedin.com/in/kirubakarann'
                },
                {
                  src: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
                  label: 'GitHub',
                  value: 'github.com/kirubakaran2',
                  href: 'https://github.com/kirubakaran2'
                }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-center space-x-4 p-4 bg-pure rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <img src={contact.src} alt={contact.label} className="w-6 h-6" />
                    <div>
                      <p className="text-gray-500 text-sm">{contact.label}</p>
                      <p className="text-gray-900 font-medium">{contact.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-pure rounded-2xl p-8 border border-gray-200 shadow-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="text-black w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full text-black px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-4 bg-blue-600 text-pure font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
)
}

export default Contact
