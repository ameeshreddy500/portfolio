// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-blue-600 p-4">
  <div className="container mx-auto flex justify-between items-center">
    <div className="text-white text-xl">
      <Link to="/">Ameesh Reddy Kasu | Architecting Software Solutions</Link>
    </div>
    <div className="flex space-x-8">
      <Link to="/professional-summary" className="text-white">Professional Summary</Link>
      <Link to="/projects-summary" className="text-white">Projects Summary</Link>
      <Link to="/contact" className="text-white">Contact</Link>
    </div>
  </div>
</nav>

      {/* Main Content */}
      <main className="flex-grow bg-blue-600 p-4 md:p-8">
  <div className="container mx-auto flex flex-col md:flex-row items-center h-full">
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
              Building Scalable Software Solutions: Your Software Engineering Expert
            </h1>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <svg className="w-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="600" fill="#ffffff" />
                <g transform="translate(50, 50)">
                  <rect x="300" y="20" width="160" height="80" rx="10" fill="#2563eb" />
                  <text x="380" y="65" textAnchor="middle" fill="white" fontSize="16" fontFamily="Arial">API Gateway</text>
                  
                  <g transform="translate(0, 200)">
                    <rect x="50" y="0" width="140" height="70" rx="8" fill="#3b82f6"/>
                    <text x="120" y="40" textAnchor="middle" fill="white" fontSize="14" fontFamily="Arial">FastAPI Service</text>
                    
                    <rect x="250" y="0" width="140" height="70" rx="8" fill="#3b82f6"/>
                    <text x="320" y="40" textAnchor="middle" fill="white" fontSize="14" fontFamily="Arial">Auth Service</text>
                    
                    <rect x="450" y="0" width="140" height="70" rx="8" fill="#3b82f6"/>
                    <text x="520" y="40" textAnchor="middle" fill="white" fontSize="14" fontFamily="Arial">Data Service</text>
                  </g>
                  
                  <g transform="translate(0, 400)">
                    <path d="M 150 0 C 150 -10 250 -10 250 0 L 250 40 C 250 50 150 50 150 40 Z" fill="#60a5fa"/>
                    <ellipse cx="200" cy="0" rx="50" ry="10" fill="#60a5fa"/>
                    <text x="200" y="30" textAnchor="middle" fill="white" fontSize="14" fontFamily="Arial">PostgreSQL</text>
                    
                    <path d="M 450 0 C 450 -10 550 -10 550 0 L 550 40 C 550 50 450 50 450 40 Z" fill="#60a5fa"/>
                    <ellipse cx="500" cy="0" rx="50" ry="10" fill="#60a5fa"/>
                    <text x="500" y="30" textAnchor="middle" fill="white" fontSize="14" fontFamily="Arial">Redis Cache</text>
                  </g>
                  
                  <g stroke="#94a3b8" strokeWidth="2">
                    <path d="M 380 100 L 120 200" fill="none" strokeDasharray="5,5"/>
                    <path d="M 380 100 L 320 200" fill="none" strokeDasharray="5,5"/>
                    <path d="M 380 100 L 520 200" fill="none" strokeDasharray="5,5"/>
                    <path d="M 120 270 L 200 390" fill="none" strokeDasharray="5,5"/>
                    <path d="M 520 270 L 500 390" fill="none" strokeDasharray="5,5"/>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white p-8 text-center">
        <h2 className="text-2xl mb-4">Software Engineering Excellence</h2>
        <div className="space-y-2">
          <p>
            <a href="mailto:akasu1@asu.edu">akasu1@asu.edu</a>
          </p>
          <p>
            <a href="tel:+16028146268">(602) 814 6268</a>
          </p>
          <p>Austin, TX</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;