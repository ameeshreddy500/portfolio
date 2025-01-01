import React from 'react';
import { Link } from 'react-router-dom';
const AISection = () => (
  <svg className="w-full h-48 mb-4" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563eb" stopOpacity="0.1"/>
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#aiGradient)" rx="8"/>
    
    <g stroke="#2563eb" strokeWidth="2" fill="none" opacity="0.6">
      <path d="M 50,50 L 150,50 L 150,150 L 250,150" />
      <path d="M 100,100 L 200,100 L 200,200" />
      <circle cx="50" cy="50" r="5" fill="#2563eb"/>
      <circle cx="150" cy="50" r="5" fill="#2563eb"/>
      <circle cx="150" cy="150" r="5" fill="#2563eb"/>
      <circle cx="250" cy="150" r="5" fill="#2563eb"/>
      <circle cx="200" cy="200" r="5" fill="#2563eb"/>
    </g>
    
    <g transform="translate(280, 80)">
      <rect width="80" height="100" fill="#1d4ed8" opacity="0.8" rx="4"/>
      <g fill="white" fontSize="10" fontFamily="monospace">
        <text x="10" y="20">def ml():</text>
        <text x="10" y="40">  return</text>
      </g>
    </g>
  </svg>
);

const DataPipelineSection = () => (
  <svg className="w-full h-48 mb-4" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0284c7" stopOpacity="0.1"/>
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.05"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#pipelineGradient)" rx="8"/>
    
    <g transform="translate(50, 100)">
      <path d="M25,0 L75,0 L100,43.3 L75,86.6 L25,86.6 L0,43.3 Z" fill="#0284c7" opacity="0.8"/>
      <path d="M175,0 L225,0 L250,43.3 L225,86.6 L175,86.6 L150,43.3 Z" fill="#0284c7" opacity="0.8"/>
      <path d="M100,43 L150,43" stroke="#0284c7" strokeWidth="3" strokeDasharray="5,5"/>
    </g>
  </svg>
);

const BISection = () => (
    <svg className="w-full h-48 mb-4" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="biGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5"/>
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#f8fafc"/>
      
      {/* Center Container */}
      <g transform="translate(100, 70)">
        {/* Data Flow Lines */}
        <g stroke="#94a3b8" strokeWidth="2">
          <path d="M 50,80 L 150,80" strokeDasharray="6,3"/>
          <path d="M 150,40 L 250,40" strokeDasharray="6,3"/>
          <path d="M 150,120 L 250,120" strokeDasharray="6,3"/>
        </g>
  
        {/* Central Data Hub */}
        <rect x="120" y="40" width="60" height="80" rx="4" fill="url(#biGradient)"/>
        <text x="150" y="85" textAnchor="middle" fill="white" fontSize="14">Data</text>
  
        {/* Left Source */}
        <rect x="20" y="60" width="40" height="40" rx="4" fill="#3b82f6" opacity="0.8"/>
        <text x="40" y="85" textAnchor="middle" fill="white" fontSize="12">DB</text>
  
        {/* Right Visualizations */}
        <g transform="translate(220, 20)">
          {/* Bar Chart Icon */}
          <rect width="40" height="40" rx="4" fill="#3b82f6" opacity="0.8"/>
          <g transform="translate(8, 8)" stroke="white" strokeWidth="2">
            <line x1="0" y1="24" x2="8" y2="16"/>
            <line x1="12" y1="24" x2="12" y2="8"/>
            <line x1="24" y1="24" x2="24" y2="0"/>
          </g>
        </g>
  
        <g transform="translate(220, 100)">
          {/* Line Chart Icon */}
          <rect width="40" height="40" rx="4" fill="#3b82f6" opacity="0.8"/>
          <path d="M 8,32 L 16,16 L 24,24 L 32,8" 
                stroke="white" 
                strokeWidth="2" 
                fill="none"/>
        </g>
      </g>
    </svg>
  );

const EducationSection = () => (
  <svg className="w-full h-48 mb-4" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="eduGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.1"/>
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#eduGradient)" rx="8"/>
    
    <g transform="translate(100, 80)">
      <path d="M0,50 L100,0 L200,50 L100,100 Z" fill="#4f46e5" opacity="0.8"/>
      <rect x="60" y="80" width="80" height="100" fill="#4f46e5" opacity="0.6" rx="8"/>
      <g stroke="#4f46e5" strokeWidth="2" fill="none" opacity="0.4">
        <circle cx="100" cy="50" r="20"/>
        <circle cx="100" cy="50" r="30"/>
      </g>
    </g>
  </svg>
);

const ProfessionalSummary = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="py-4 px-8 bg-white shadow-sm">
  <div className="container mx-auto flex justify-between items-center">
    <div className="text-xl">
      <Link to="/">Ameesh Reddy Kasu | Architecting Software Solutions</Link>
    </div>
    <div className="flex space-x-8">
      <Link to="/professional-summary" className="text-blue-600">Professional Summary</Link>
      <Link to="/projects-summary">Projects Summary</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </div>
</nav>

      <main className="container mx-auto px-8 py-12">
        <h1 className="text-4xl text-blue-600 text-center mb-8">Professional Summary</h1>
        
        <p className="text-center max-w-3xl mx-auto mb-16 text-lg">
          Software Engineer specializing in microservices and API development. 
          Experienced in building scalable solutions using FastAPI, Python, and cloud technologies. 
          Recent Master's in Computer Science graduate with a proven track record at Xnode Inc and Nikola Motors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Xnode */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <AISection />
    <h2 className="text-xl lg:text-2xl text-blue-600 mb-4">Software Engineer AI, Xnode Inc</h2>
    <ul className="space-y-2 text-sm">
      <li>• Engineered ETL pipelines using Python & Apache Airflow, boosting data throughput by 45%</li>
      <li>• Built FastAPI microservices with Azure Functions, reducing inference time by 30%</li>
      <li>• Developed standupbot agent streamlining Agile workflows with Azure DevOps integration</li>
    </ul>
  </div>
 {/* Nikola */}
 <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <DataPipelineSection />
    <h2 className="text-xl lg:text-2xl text-blue-600 mb-4">Software Engineer, Nikola Motors</h2>
    <ul className="space-y-2 text-sm">
      <li>• Enhanced AWS-Glue ETL pipeline efficiency by 35% through Kafka streaming</li>
      <li>• Engineered VHU Data infrastructure with 98% signal accuracy</li>
      <li>• Developed real-time microservices supporting 45% fleet growth</li>
    </ul>
  </div>
  {/* Splash BI */}
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
  <BISection />
  <h2 className="text-xl lg:text-2xl text-blue-600 mb-4">Software Engineer Intern, Splash BI</h2>
  <ul className="space-y-2 text-sm">
    <li>• Implemented FastAPI data integration framework reducing sync latency by 40%</li>
    <li>• Developed dynamic ETL pipeline improving data accuracy by 35%</li>
    <li>• Created automated anomaly detection for enhanced decision-making</li>
  </ul>
</div>

          {/* Education */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <EducationSection />
            <h2 className="text-2xl text-blue-600 mb-4">Masters in Computer Science</h2>
            <p className="text-sm">
              Focused on Software Engineering, Cloud Computing, and API Development. 
              Completed projects in microservices architecture and scalable systems.
            </p>
          </div>
        </div>
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

export default ProfessionalSummary;