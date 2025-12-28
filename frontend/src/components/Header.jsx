import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import zikshanaLogo from '/src/assets/logo-1.png'

const navigation = [
  { name: 'About Us', path: '/' },
  { name: 'Programs', path: '/programs' },
  { name: 'Fellowship', path: '/fellowship' },
  { name: 'Stories', path: '/stories' },
  { name: 'Contact', path: '/contact' }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Disclosure as="nav" className="fixed w-full z-50 top-0 left-0 right-0 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-2 focus:-outline-offset-1 focus:outline-[var(--color-primary)]">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link to="/">
                <img
                  alt="Zikshana Global Foundation"
                  src={zikshanaLogo}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                    className={classNames(
                      location.pathname === item.path
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Donate Button */}
            <button
              onClick={() => navigate('/donate')}
              className="bg-[var(--color-primary)] text-white font-semibold py-2 px-6 rounded-full hover:bg-[var(--color-primary-dark)] transition-all duration-300 hover:shadow-lg"
            >
              DONATE NOW
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.path}
              aria-current={location.pathname === item.path ? 'page' : undefined}
              className={classNames(
                location.pathname === item.path
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default Header
