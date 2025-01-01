
import React from 'react';
import { Link } from 'react-router-dom';
const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="py-4">
        <div className="container mx-auto px-8 flex justify-between items-center">
          <div className="text-xl">
            Ameesh Reddy Kasu | Architecting Software Solutions
          </div>
          <div className="flex space-x-8">
            <a href="/professional-summary">Professional Summary</a>
            <a href="/projects-summary" className="text-blue-600">Projects Summary</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-8 py-12 max-w-4xl">
        {/* E-Commerce Project */}
        <div className="mb-12 md:mb-16">
  <h2 className="text-xl md:text-2xl text-blue-600 mb-4">E-Commerce Project</h2>
  <div className="bg-white p-4 md:p-6 rounded-lg mb-4">
            <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="gradBlue" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.7"/>
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5"/>
                </linearGradient>
              </defs>
              
              <rect width="800" height="400" fill="#f8fafc"/>
              
              {/* API Layer */}
              <g transform="translate(150, 60)">
                <rect width="500" height="100" rx="10" fill="url(#gradBlue)"/>
                <text 
                  x="250" 
                  y="55" 
                  dominantBaseline="middle" 
                  textAnchor="middle" 
                  fill="white" 
                  fontSize="24" 
                  fontFamily="sans-serif"
                >
                  FastAPI Endpoints
                </text>
              </g>

              {/* Database Layer */}
              <g transform="translate(150, 220)">
                <path d="M 0,30 C 0,10 500,10 500,30 L 500,120 C 500,140 0,140 0,120 Z" fill="url(#gradBlue)"/>
                <ellipse cx="250" cy="30" rx="250" ry="20" fill="#2563eb"/>
                <text 
                  x="250" 
                  y="85" 
                  dominantBaseline="middle" 
                  textAnchor="middle" 
                  fill="white" 
                  fontSize="24" 
                  fontFamily="sans-serif"
                >
                  PostgreSQL Database
                </text>
              </g>

              {/* Connection Lines */}
              <g stroke="#94a3b8" strokeWidth="2">
                <line x1="400" y1="160" x2="400" y2="220" strokeDasharray="6,3"/>
              </g>
            </svg>
          </div>
          <ul className="space-y-2 text-sm md:text-base">
            <li>• Built high-performance RESTful API using FastAPI and PostgreSQL</li>
            <li>• Handled 10,000+ concurrent users with 99.9% uptime</li>
            <li>• Reduced API response time by 65% through optimization</li>
            <li>• Implemented JWT authentication and role-based access</li>
          </ul>
        </div>

        {/* Real-time Chat */}
        <div className="mb-12 md:mb-16">
  <h2 className="text-xl md:text-2xl text-blue-600 mb-4">Real Time Chat System</h2>
  <div className="bg-white p-4 md:p-6 rounded-lg mb-4">
            <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="gradBlue2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.7"/>
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5"/>
                </linearGradient>
              </defs>

              <rect width="800" height="400" fill="#f8fafc"/>

              {/* WebSocket Server */}
              <g transform="translate(250, 50)">
                <rect width="300" height="80" rx="10" fill="url(#gradBlue2)"/>
                <text 
                  x="150" 
                  y="40" 
                  dominantBaseline="middle" 
                  textAnchor="middle" 
                  fill="white" 
                  fontSize="24" 
                  fontFamily="sans-serif"
                >
                  WebSocket Server
                </text>
              </g>

              {/* Message Bubbles */}
              <g transform="translate(100, 180)">
                <rect width="200" height="70" rx="35" fill="#2563eb" opacity="0.8"/>
                <text 
                  x="100" 
                  y="35" 
                  dominantBaseline="middle" 
                  textAnchor="middle" 
                  fill="white" 
                  fontSize="20" 
                  fontFamily="sans-serif"
                >
                  Hello!
                </text>
              </g>

              <g transform="translate(500, 180)">
                <rect width="200" height="70" rx="35" fill="#3b82f6" opacity="0.8"/>
                <text 
                  x="100" 
                  y="35" 
                  dominantBaseline="middle" 
                  textAnchor="middle" 
                  fill="white" 
                  fontSize="20" 
                  fontFamily="sans-serif"
                >
                  Hi there!
                </text>
              </g>

              {/* Redis Cache */}
              <g transform="translate(250, 300)">
                <rect width="300" height="70" rx="8" fill="url(#gradBlue2)"/>
                <text 
                  x="150" 
                  y="35" 
                  dominantBaseline="middle" 
                  textAnchor="middle" 
                  fill="white" 
                  fontSize="24" 
                  fontFamily="sans-serif"
                >
                  Redis Cache
                </text>
              </g>

              {/* Connection Lines */}
              <g stroke="#94a3b8" strokeWidth="3">
                <path d="M 200,180 C 250,150 350,130 400,130" opacity="0.6"/>
                <path d="M 600,180 C 550,150 450,130 400,130" opacity="0.6"/>
              </g>
            </svg>
          </div>
          <ul className="space-y-2 text-sm md:text-base">
            <li>• Developed WebSocket-based messaging using FastAPI</li>
            <li>• Supported 1,000+ concurrent chat sessions</li>
            <li>• Achieved sub-100ms message delivery latency</li>
            <li>• Implemented Redis for efficient message caching</li>
          </ul>
        </div>

        {/* Task Management */}
        <div className="mb-20">
          <h2 className="text-blue-600 text-2xl mb-4">Task Management API</h2>
          <div className="bg-white p-6 rounded-lg mb-6">
            <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="gradBlue3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.7"/>
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5"/>
                </linearGradient>
              </defs>

              <rect width="800" height="400" fill="#f8fafc"/>

              {/* Status Columns */}
              <g transform="translate(40, 40)">
                <rect width="220" height="320" rx="10" fill="#f1f5f9"/>
                <text x="110" y="45" textAnchor="middle" fontSize="22" fontFamily="sans-serif" fill="#2563eb">Todo</text>
                
                <rect x="20" y="70" width="180" height="100" rx="8" fill="url(#gradBlue3)"/>
                <text x="110" y="125" textAnchor="middle" fill="white" fontSize="20" fontFamily="sans-serif">Task #1</text>
              </g>

              <g transform="translate(290, 40)">
                <rect width="220" height="320" rx="10" fill="#f1f5f9"/>
                <text x="110" y="45" textAnchor="middle" fontSize="22" fontFamily="sans-serif" fill="#2563eb">In Progress</text>
                
                <rect x="20" y="70" width="180" height="100" rx="8" fill="url(#gradBlue3)"/>
                <text x="110" y="125" textAnchor="middle" fill="white" fontSize="20" fontFamily="sans-serif">Task #2</text>
              </g>

              <g transform="translate(540, 40)">
                <rect width="220" height="320" rx="10" fill="#f1f5f9"/>
                <text x="110" y="45" textAnchor="middle" fontSize="22" fontFamily="sans-serif" fill="#2563eb">Done</text>
                
                <rect x="20" y="70" width="180" height="100" rx="8" fill="url(#gradBlue3)"/>
                <text x="110" y="125" textAnchor="middle" fill="white" fontSize="20" fontFamily="sans-serif">Task #3</text>
              </g>
            </svg>
          </div>
          <ul className="space-y-2 text-sm md:text-base">
            <li>• Created FastAPI backend with SQLAlchemy and async support</li>
            <li>• Improved team productivity by 45% through automation</li>
            <li>• Reduced task assignment time by 75%</li>
            <li>• Built real-time notification system with WebSockets</li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-12 text-center">
        <h2 className="text-2xl mb-4">Pioneering Software Solutions</h2>
        <div className="space-y-2">
          <p><a href="mailto:akasu1@asu.edu">akasu1@asu.edu</a></p>
          <p><a href="tel:+16028146268">(602) 814 6268</a></p>
          <p>Austin, TX</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectsPage;