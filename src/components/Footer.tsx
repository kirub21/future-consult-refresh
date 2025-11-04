import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/' },
  { icon: Twitter, href: 'https://twitter.com/' },
  { icon: Instagram, href: 'https://www.instagram.com/' },
  { icon: Linkedin, href: 'http://linkedin.com/' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SEE Future Consult</h3>
            <p className="text-gray-400">Develop local capacity for local solutions. We are dedicated to the sustainable use of environmental and natural resources for current and future generations.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start"><MapPin className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" /><span>Addis Ababa, Dembel City Center, 12th Floor, Office No. 1237</span></li>
              <li className="flex items-center"><Mail className="w-5 h-5 mr-3 text-green-500" /><a href="mailto:info@seefconsult.com" className="hover:text-white">info@seefconsult.com</a></li>
              <li className="flex items-center"><Phone className="w-5 h-5 mr-3 text-green-500" /><a href="tel:+251115621777" className="hover:text-white">+251-115621777</a></li>
              <li className="flex items-center"><Phone className="w-5 h-5 mr-3 text-green-500" /><a href="tel:+251963066141" className="hover:text-white">+251 963066141</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-3 rounded-full hover:bg-green-600 transition-colors">
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} SEE Future Consult. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}