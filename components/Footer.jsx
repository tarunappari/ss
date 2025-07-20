'use client';

import { useState } from 'react';
import Image from 'next/image';

const Footer = () => {
  const [email, setEmail] = useState('');

  const footerContent = {
    sections: [
      {
        title: "Academics",
        links: [
          "On Hand Practice",
          "Theory Knowledge",
          "Offline Learning",
          "Online Learning"
        ]
      },
      {
        title: "Admissions",
        links: [
          "Application Process",
          "Fee Structure",
          "Scholarships",
          "FAQs"
        ]
      },
      {
        title: "Connect With Us",
        socialLinks: [
          { platform: "Facebook", url: "#" },
          { platform: "Twitter", url: "#" },
          { platform: "Instagram", url: "#" },
          { platform: "GitHub", url: "#" },
          { platform: "Dribbble", url: "#" },
          { platform: "Medium", url: "#" }
        ]
      },
      {
        title: "Subscribe to Newsletter",
        newsletter: {
          placeholder: "Your email",
          buttonText: "Subscribe"
        }
      }
    ],
    copyright: {
      year: "2015",
      entity: "SS Institution",
      rights: "All rights reserved.",
      description:
        "A premier technical education institute offering B.Tech, M.Tech, and specialized programming courses"
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const getSocialIcon = (platform) => {
    const iconClass = "w-5 h-5";
    
    switch (platform) {
      case "Facebook":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        );
      case "Twitter":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        );
      case "Instagram":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.875 2.026-1.297 3.323-1.297s2.448.422 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.315 0-.595-.122-.805-.332-.21-.21-.332-.49-.332-.805 0-.315.122-.595.332-.805.21-.21.49-.332.805-.332.315 0 .595.122.805.332.21.21.332.49.332.805 0 .315-.122.595-.332.805-.21.21-.49.332-.805.332z"/>
          </svg>
        );
      case "GitHub":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case "Dribbble":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.273 5.698-.653-.126-1.542-.224-2.402-.126-.091-.207-.182-.414-.288-.609l-.196-.39c.84-.357 1.528-.784 2.113-1.3zM12 2.25c2.4 0 4.6.9 6.3 2.4-.6.6-1.326 1.1-2.1 1.47-.756-1.47-1.722-2.73-2.88-3.78-.42-.315-.84-.6-1.32-.84v-.25zm-1.68.12c.48.24.96.54 1.38.87 1.14 1.02 2.1 2.25 2.82 3.69-.42.18-.87.33-1.35.45-1.29-3.15-3.18-5.73-5.4-7.68.51-.21 1.02-.33 1.55-.33zm-3.6 1.8c2.1 1.8 3.9 4.2 5.1 7.2-1.8.6-3.9.9-6 .9-.6 0-1.2 0-1.8-.06.18-2.7 1.2-5.1 2.7-7.04zm-2.85 8.13c.6.06 1.2.09 1.8.09 2.1 0 4.2-.3 6-.9.6 1.5.9 3.15.9 4.8 0 .6-.06 1.2-.15 1.8-1.8-.6-3.45-1.5-4.8-2.7-1.2-1.05-2.25-2.25-3.15-3.6-.18-.24-.36-.48-.6-.69zm8.7 6.6c.09-.6.15-1.2.15-1.8 0-1.65-.3-3.3-.9-4.8 1.8-.6 3.6-.3 5.1.3-.6 2.4-2.1 4.5-4.35 6.3z"/>
          </svg>
        );
      case "Medium":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/assets/logo.png"
                alt="SS Institution Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-xl font-bold">SS Institution</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {footerContent.copyright.description}
            </p>
            <div className="text-sm text-gray-400">
              <p>Established {footerContent.copyright.year}</p>
            </div>
          </div>

          {/* Academics Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerContent.sections[0].title}</h3>
            <ul className="space-y-2">
              {footerContent.sections[0].links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerContent.sections[1].title}</h3>
            <ul className="space-y-2">
              {footerContent.sections[1].links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerContent.sections[2].title}</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {footerContent.sections[2].socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={social.platform}
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h4 className="text-md font-semibold mb-3">{footerContent.sections[3].title}</h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={footerContent.sections[3].newsletter.placeholder}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm"
                >
                  {footerContent.sections[3].newsletter.buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} {footerContent.copyright.entity}. {footerContent.copyright.rights}
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
