import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'

// Import assets
import zikshanaLogo from '../assets/logo-1.png'
import facebookIcon from '../assets/facebook.png'
import twitterIcon from '../assets/twitter.png'
import instagramIcon from '../assets/instagram.png'
import linkedinIcon from '../assets/linkedin.png'

const navigation = [
  { name: 'About Us', href: '/' },
  { name: 'Programs', href: '/programs' },
  { name: 'Fellowship', href: '/fellowship' },
  { name: 'Stories', href: '/stories' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/people/Zikshana/100064189320421/', icon: facebookIcon },
  { name: 'Twitter', href: 'https://x.com/TeamZikshana?t=U9pf1dvPLGyoAKHExERNnw&s=08', icon: twitterIcon },
  { name: 'Instagram', href: 'https://www.instagram.com/zikshana/', icon: instagramIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zikshana/posts/?feedView=all', icon: linkedinIcon },
]

export default function NavBar() {
  const navigate = useNavigate()

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-[9999] bg-white shadow-md">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link
              to="/"
              className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
            >
              <img
                alt="Zikshana Global Foundation"
                src={zikshanaLogo}
                className="navbar-logo object-contain md:!h-20 lg:!h-24"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {/* Nav Links */}
            <div className="flex gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-[0.95rem] font-medium text-gray-700 transition-colors duration-300 hover:text-purple-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Donate Button */}
            <button
              onClick={() => navigate('/donate')}
              className="rounded-full bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-700"
            >
              DONATE NOW
            </button>

            {/* Social Media Icons */}
            <div className="ml-4 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <img src={social.icon} alt={social.name} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile: Donate Button and Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => navigate('/donate')}
              className="whitespace-nowrap rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-purple-700"
            >
              DONATE NOW
            </button>

            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 border-t border-gray-100 px-4 pb-4 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              className="block border-l-3 border-transparent px-4 py-3 text-base font-medium text-gray-700 transition-all duration-300 hover:border-l-purple-600 hover:bg-purple-50 hover:text-purple-600"
            >
              {item.name}
            </DisclosureButton>
          ))}

          {/* Social Media Icons in Mobile Menu */}
          <div className="flex items-center justify-center gap-5 border-t border-gray-100 pt-4 mt-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-120"
              >
                <img src={social.icon} alt={social.name} className="h-7 w-7" />
              </a>
            ))}
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
