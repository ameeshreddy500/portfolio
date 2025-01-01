// Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4">
        <div className="container mx-auto px-8 flex justify-between items-center">
          <div className="text-xl">
            Ameesh Reddy Kasu | Architecting Software Solutions
          </div>
          <div className="flex space-x-8">
            <a href="/professional-summary">Professional Summary</a>
            <a href="/projects-summary">Projects Summary</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="mt-auto py-12 text-center bg-white">
        <h2 className="text-2xl mb-4">Pioneering Software Solutions</h2>
        <div className="space-y-2">
          <p><a href="mailto:akasu1@asu.edu" className="text-blue-600">akasu1@asu.edu</a></p>
          <p><a href="tel:+16028146268" className="text-blue-600">(602) 814 6268</a></p>
          <p>Austin, TX</p>
          <a href="https://linkedin.com/in/ameeshreddykasu" className="text-blue-600">LinkedIn Profile</a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;