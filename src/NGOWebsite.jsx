import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp, Heart, Book, Globe, Users } from 'lucide-react';

const NGOWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentActiveSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 50 && window.pageYOffset < sectionTop + sectionHeight - 50) {
          currentActiveSection = section.id;
        }
      });
      setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <header className="bg-green-600 text-white p-4 fixed w-full z-50 transition-all duration-300 ease-in-out">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Green Hope NGO</h1>
          <nav className="hidden md:flex space-x-4">
            {['about', 'mission', 'vision', 'work', 'opportunities'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(section); }}
                className={`hover:text-green-200 transition-colors duration-300 ${activeSection === section ? 'border-b-2 border-white' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="bg-green-600 text-white p-4 fixed w-full z-40 mt-16 md:hidden">
          {['about', 'mission', 'vision', 'work', 'opportunities'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(section); }}
              className="block py-2 hover:bg-green-700 transition-colors duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}

      <main className="container mx-auto p-4 pt-24">
        <section id="about" className="mb-24 scroll-mt-24">
          <h2 className="text-4xl font-bold mb-8 text-green-700">About Green Hope NGO</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg">
                Founded over a century ago, Green Hope NGO has been a beacon of hope and change in our community. Our journey began with a simple yet powerful vision: to create a world where every individual has the opportunity to thrive, regardless of their background or circumstances.
              </p>
              <p className="text-lg">
                Over the years, we've touched countless lives through our diverse range of programs and initiatives. From providing education to underprivileged children to implementing sustainable development projects in rural areas, our work spans across various sectors of society.
              </p>
            </div>
            <div className="bg-green-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">Our Impact</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><Heart className="text-red-500 mr-2" /> 1M+ Lives Impacted</li>
                <li className="flex items-center"><Book className="text-blue-500 mr-2" /> 500+ Schools Supported</li>
                <li className="flex items-center"><Globe className="text-green-500 mr-2" /> 50+ Countries Reached</li>
                <li className="flex items-center"><Users className="text-purple-500 mr-2" /> 10,000+ Volunteers</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="mission" className="mb-24 scroll-mt-24">
          <h2 className="text-4xl font-bold mb-8 text-green-700">Our Mission</h2>
          <div className="bg-green-50 p-8 rounded-lg shadow-lg">
            <p className="text-xl mb-6">
              Green Hope NGO is committed to fostering sustainable development and social equity across the globe. Our mission is to empower communities, protect the environment, and create lasting positive change through innovative programs and partnerships.
            </p>
            <p className="text-xl">
              We strive to:
            </p>
            <ul className="list-disc pl-8 mt-4 space-y-2">
              <li>Provide access to quality education for all</li>
              <li>Promote sustainable agricultural practices</li>
              <li>Enhance healthcare services in underserved areas</li>
              <li>Advocate for environmental conservation and climate action</li>
              <li>Foster economic empowerment through skills training and microfinance initiatives</li>
            </ul>
          </div>
        </section>

        <section id="vision" className="mb-24 scroll-mt-24">
          <h2 className="text-4xl font-bold mb-8 text-green-700">Our Vision</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">A World of Equality</h3>
              <p className="text-gray-700">We envision a world where every individual has equal opportunities to thrive, regardless of their socio-economic background or geographical location.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">Sustainable Planet</h3>
              <p className="text-gray-700">Our vision includes a planet where human activities are in harmony with nature, ensuring the well-being of both current and future generations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">Global Solidarity</h3>
              <p className="text-gray-700">We aspire to foster a global community united in its commitment to social justice, mutual understanding, and collective action for the greater good.</p>
            </div>
          </div>
        </section>

        <section id="work" className="mb-24 scroll-mt-24">
          <h2 className="text-4xl font-bold mb-8 text-green-700">Our Work</h2>
          <div className="space-y-8">
            <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">Education Initiatives</h3>
              <p className="text-gray-700">Our flagship program, "Learn for Life," has established 200 schools in rural areas, providing quality education to over 50,000 children annually. We focus on inclusive education, integrating technology and traditional knowledge systems.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">Sustainable Agriculture</h3>
              <p className="text-gray-700">Through our "Green Farms" project, we've trained 10,000 farmers in sustainable agricultural practices, increasing crop yields by 40% while reducing water usage and chemical inputs. This has led to improved food security and economic stability in rural communities.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">Community Health</h3>
              <p className="text-gray-700">Our mobile health clinics have reached over 1 million people in remote areas, providing essential healthcare services, vaccinations, and health education. We've also established 50 community health centers, focusing on maternal and child health.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">Environmental Conservation</h3>
              <p className="text-gray-700">Our "Green Earth" initiative has planted over 5 million trees, restored 100,000 hectares of degraded land, and established 20 community-led conservation areas. We also run awareness programs on climate change and sustainable living practices.</p>
            </div>
          </div>
        </section>

        <section id="opportunities" className="mb-24 scroll-mt-24">
          <h2 className="text-4xl font-bold mb-8 text-green-700">Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">Scholarships</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <Book className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Green Futures Scholarship</h4>
                    <p className="text-gray-700">Full-ride scholarship for underprivileged students pursuing environmental sciences or sustainable development studies.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <Users className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Community Leader Grant</h4>
                    <p className="text-gray-700">Financial support for individuals driving positive change in their communities through innovative social projects.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">Job Openings</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <Globe className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">International Program Coordinator</h4>
                    <p className="text-gray-700">Manage and expand our global initiatives. 5+ years of NGO experience required. Fluency in multiple languages is a plus.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <Heart className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Community Health Specialist</h4>
                    <p className="text-gray-700">Lead our health education programs in rural areas. Medical background preferred. Experience in public health initiatives is a must.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-600 text-white p-8 mt-12">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: info@greenhopengo.org</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Hope Street, Global City, 12345</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-200">Donate</a></li>
              <li><a href="#" className="hover:text-green-200">Volunteer</a></li>
              <li><a href="#" className="hover:text-green-200">Annual Report</a></li>
              <li><a href="#" className="hover:text-green-200">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© 2024 Green Hope NGO. All rights reserved.</p>
          <p>Serving communities for over a century.</p>
        </div>
      </footer>
    </div>
  );
};

export default NGOWebsite;