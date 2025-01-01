// ContactPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="py-4">
  <div className="container mx-auto px-8 flex justify-between items-center">
    <div className="text-xl">
      <Link to="/">Ameesh Reddy Kasu | Architecting Software Solutions</Link>
    </div>
    <div className="flex space-x-8">
      <Link to="/professional-summary">Professional Summary</Link>
      <Link to="/projects-summary">Projects Summary</Link>
      <Link to="/contact" className="text-blue-600">Contact</Link>
    </div>
  </div>
</header>

      {/* Main Content */}
      <main className="container mx-auto px-8 py-12 max-w-2xl">
        <h1 className="text-4xl text-blue-600 text-center mb-8">Contact Me</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your message"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 space-y-4 text-center">
            <h2 className="text-2xl text-blue-600">Other Ways to Connect</h2>
            <div>
              <p className="font-medium">Email:</p>
              <a href="mailto:akasu1@asu.edu" className="text-blue-600">akasu1@asu.edu</a>
            </div>
            <div>
              <p className="font-medium">Phone:</p>
              <a href="tel:+16028146268" className="text-blue-600">(602) 814 6268</a>
            </div>
            <div>
              <p className="font-medium">Location:</p>
              <p>Austin, TX</p>
            </div>
            <div>
              <p className="font-medium">LinkedIn:</p>
              <a 
                href="https://linkedin.com/in/ameeshreddykasu" 
                className="text-blue-600"
                target="_blank" 
                rel="noopener noreferrer"
              >
                linkedin.com/in/ameeshreddykasu
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-12 text-center bg-white">
        <h2 className="text-2xl mb-4">Pioneering Software Solutions</h2>
        <div className="space-y-2">
          <p><a href="mailto:akasu1@asu.edu" className="text-blue-600">akasu1@asu.edu</a></p>
          <p><a href="tel:+16028146268" className="text-blue-600">(602) 814 6268</a></p>
          <p>Austin, TX</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;