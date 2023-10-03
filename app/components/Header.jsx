import {Await, NavLink, useMatches} from '@remix-run/react';
import {Suspense, Fragment, useState} from 'react';
import {Dialog, Disclosure, Popover, Transition} from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {ChevronDownIcon, MagnifyingGlassIcon} from '@heroicons/react/20/solid';
import Container from './container';
import SideModal from './modal/SideModal';
import {CartMain} from './Cart';
import {PredictiveSearchForm, PredictiveSearchResults} from './Search';
import {FALLBACK_HEADER_MENU} from '~/lib/constant';

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Header({header, isLoggedIn, cart}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const {shop, menu} = header;

  function closeAside(event) {
    if (viewport === 'mobile') {
      event.preventDefault();
      window.location.href = event.currentTarget.href;
    }
  }

  return (
    <header className="bg-white fixed z-20 top-0 shadow-md w-full">
      <Container>
        <HeaderMenu
          shop={shop}
          menu={menu}
          setMobileMenuOpen={setMobileMenuOpen}
          setOpenCart={setOpenCart}
          setOpenSearch={setOpenSearch}
          closeAside={closeAside}
          isLoggedIn={isLoggedIn}
          cart={cart}
          viewport="desktop"
        />
      </Container>
      <Dialog
        as="div"
        className="lg:hidden dialog"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-100" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-100 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink
              className="-m-1.5 p-1.5"
              prefetch="intent"
              to="/"
              style={activeLinkStyle}
              end
            >
              <span className="sr-only">{shop?.name}</span>
              <img className="h-10 w-auto" src="/images/logo.png" alt="" />
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
                  if (!item.url) return null;

                  // if the url is internal, we strip the domain
                  const url =
                    item.url.includes('myshopify.com') ||
                    item.url.includes(publicStoreDomain)
                      ? new URL(item.url).pathname
                      : item.url;

                  if (item.title === 'Learn') {
                    return (
                      <Disclosure key={item?.title} as="div" className="-mx-3">
                        {({open}) => (
                          <>
                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                              {item.title}
                              <ChevronDownIcon
                                className={classNames(
                                  open ? 'rotate-180' : '',
                                  'h-5 w-5 flex-none',
                                )}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-2 space-y-2">
                              {products.map((item) => (
                                <Disclosure.Button
                                  key={item.name}
                                  as="a"
                                  href={item.href}
                                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                  {item.name}
                                </Disclosure.Button>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    );
                  }

                  return (
                    <NavLink
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      end
                      key={item.id}
                      onClick={closeAside}
                      prefetch="intent"
                      style={activeLinkStyle}
                      to={url}
                    >
                      {item.title}
                    </NavLink>
                  );
                })}
              </div>
              <div className="py-6">
                <HeaderCtas
                  isLoggedIn={isLoggedIn}
                  setOpenCart={setOpenCart}
                  setOpenSearch={setOpenSearch}
                  cart={cart}
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <SideModal
        title="Bag"
        open={openCart}
        setOpen={setOpenCart}
        component={<CartAside cart={cart} />}
      />
      <SideModal
        title="Search"
        open={openSearch}
        setOpen={setOpenSearch}
        component={<SearchAside />}
      />
    </header>
  );
}

export function HeaderMenu({
  shop,
  menu,
  closeAside,
  viewport,
  isLoggedIn,
  cart,
  setMobileMenuOpen,
  setOpenCart,
  setOpenSearch,
}) {
  const [root] = useMatches();
  const publicStoreDomain = root?.data?.publicStoreDomain;
  // const className = `header-menu-${viewport}`;

  return (
    <nav
      className={`mx-auto flex items-center justify-between p-6 lg:px-8`}
      aria-label="Global"
      role="navigation"
    >
      <div className="flex lg:flex-1">
        <NavLink
          className="-m-1.5 p-1.5"
          prefetch="intent"
          to="/"
          style={activeLinkStyle}
          end
        >
          <span className="sr-only">{shop?.name}</span>
          <img className="h-10 w-auto" src="/images/logo.png" alt="" />
        </NavLink>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <Popover.Group className="hidden lg:flex lg:gap-x-12">
        {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
          if (!item.url) return null;

          // if the url is internal, we strip the domain
          const url =
            item.url.includes('myshopify.com') ||
            item.url.includes(publicStoreDomain)
              ? new URL(item.url).pathname
              : item.url;

          if (item.title === 'Learn') {
            return (
              <Popover key={item?.title} className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  {item.title}
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {products.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <a
                              href={item.href}
                              className="block font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            );
          }

          return (
            <NavLink
              className="text-sm font-semibold leading-6 text-gray-900"
              end
              key={item.id}
              onClick={closeAside}
              prefetch="intent"
              style={activeLinkStyle}
              to={url}
            >
              {item.title}
            </NavLink>
          );
        })}
      </Popover.Group>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <HeaderCtas
          isLoggedIn={isLoggedIn}
          setOpenCart={setOpenCart}
          setOpenSearch={setOpenSearch}
          cart={cart}
        />
      </div>
    </nav>
  );
}

function HeaderCtas({isLoggedIn, setOpenCart, setOpenSearch, cart}) {
  return (
    <Fragment>
      {/* <HeaderMenuMobileToggle /> */}
      {/* <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        {isLoggedIn ? 'Account' : 'Sign in'}
      </NavLink> */}
      <SearchToggle setOpenSearch={setOpenSearch} />
      <CartToggle cart={cart} setOpenCart={setOpenCart} />
    </Fragment>
  );
}

function SearchToggle({setOpenSearch}) {
  return (
    <button
      type="button"
      onClick={() => setOpenSearch(true)}
      className="px-0 lg:px-6"
    >
      <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}

function CartBadge({count, setOpenCart}) {
  return (
    <div className="pt-3 lg:pt-0">
      <button
        type="button"
        onClick={() => setOpenCart(true)}
        className="text-md font-semibold leading-6 text-gray-900"
      >{`Bag (${count})`}</button>
    </div>
  );
}

function CartToggle({cart, setOpenCart}) {
  return (
    <Suspense fallback={<CartBadge count={0} setOpenCart={setOpenCart} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge count={0} setOpenCart={setOpenCart} />;
          return (
            <CartBadge
              count={cart.totalQuantity || 0}
              setOpenCart={setOpenCart}
            />
          );
        }}
      </Await>
    </Suspense>
  );
}

function CartAside({cart}) {
  return (
    <Suspense fallback={<p>Loading cart ...</p>}>
      <Await resolve={cart}>
        {(cart) => {
          return <CartMain cart={cart} layout="aside" />;
        }}
      </Await>
    </Suspense>
  );
}

function SearchAside() {
  return (
    <div className="w-full">
      <br />
      <PredictiveSearchForm>
        {({fetchResults, inputRef}) => (
          <div>
            <input
              name="q"
              onChange={fetchResults}
              onFocus={fetchResults}
              placeholder="Search for..."
              className="w-full border-transparent focus:border-transparent focus:ring-0 text-black text-xl block p-3 placeholder:text-4xl placeholder:font-medium"
              ref={inputRef}
              type="search"
            />
          </div>
        )}
      </PredictiveSearchForm>
      <PredictiveSearchResults />
    </div>
  );
}

function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}
