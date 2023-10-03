import {useMatches, NavLink} from '@remix-run/react';
import Container from './container';
import {CustomButton} from './buttons';
import {FALLBACK_FOOTER_MENU, FALLBACK_HEADER_MENU} from '~/lib/constant';

export function Footer({menu, header}) {
  const {shop, menu: mainMenu} = header;
  const year = new Date().getFullYear();

  // console.log('shop', shop);

  return (
    <footer className="footer px-5 lg:px-0">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <NavLink className="p-1.5" prefetch="intent" to="/" end>
              <span className="sr-only">{shop?.name}</span>
              <img className="h-4 w-auto" src="/images/logo.svg" alt="" />
            </NavLink>
            <h1 className="max-w-sm font-Libre text-2xl tracking-tight text-gray-800 xl:text-4xl">
              Grow the hair you deserve
            </h1>

            <div className="mt-10 flex items-center justify-between">
              <div className="flex -mx-2">
                <a
                  href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="font-Libre text-gray-800 text-2xl">Company</p>

            <div className="flex flex-col items-start mt-5 space-y-5">
              {(mainMenu || FALLBACK_HEADER_MENU).items.map((item) => {
                if (!item.url) return null;

                // if the url is internal, we strip the domain
                const url =
                  item.url.includes('myshopify.com') ||
                  item.url.includes(publicStoreDomain)
                    ? new URL(item.url).pathname
                    : item.url;

                return (
                  <NavLink
                    className="text-black duration-300 hover:underline hover:text-primary"
                    end
                    key={item.id}
                    prefetch="intent"
                    style={activeLinkStyle}
                    to={url}
                  >
                    {item.title}
                  </NavLink>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col h-full justify-between">
            <div>
              <p className="font-Libre text-gray-800 text-2xl">
                Join our newsletter
              </p>

              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-gray-700 bg-gray-50 border rounded-md w-full border-transparent focus:border-transparent focus:ring-0"
                  placeholder="Enter your email"
                />
                <CustomButton text="Subscribe" onClick={() => console.log} />
              </div>
            </div>

            <div className="pt-4">
              <img className="h-8 w-auto" src="/images/payment.png" alt="" />
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300 md:my-8" />
        <div className="md:flex md:items-center md:justify-between md:pb-6">
          <span className="text-base text-gray-500 sm:text-center">
            &copy; {year}
            <NavLink className="px-1" prefetch="intent" to="/" end>
              {shop?.name}.
            </NavLink>
            All Rights Reserved.
          </span>
          <FooterMenu menu={menu} />
          {/* <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                Licensing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-500 hover:underline dark:text-gray-400"
              >
                Contact
              </a>
            </li>
          </ul> */}
        </div>
      </Container>
    </footer>
  );
}

function FooterMenu({menu}) {
  const [root] = useMatches();
  const publicStoreDomain = root?.data?.publicStoreDomain;
  return (
    <nav className="footer-menu" role="navigation">
      {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
        if (!item.url) return null;
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain)
            ? new URL(item.url).pathname
            : item.url;
        const isExternal = !url.startsWith('/');
        return isExternal ? (
          <a href={url} key={item.id} rel="noopener noreferrer" target="_blank">
            {item.title}
          </a>
        ) : (
          <NavLink
            end
            key={item.id}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}
