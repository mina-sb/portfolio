import React from 'react'

const Projects = () => {
  return (
    <section
      className="w-100 h-auto  lg:h-screen relative 
            overflow-hidden
            block
            z-10
            before:bg-[url('../../public/images/sky-patternn.png')]
            before:bg-repeat	
            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:opacity-75
            before:z-[-5]
            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700  to-slate-900 
    "
    >
      <div className="flex flex-wrap justify-center mt-28">
        <div class="p-4 max-w-sm">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="../../public/images/slidew.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 mt-4 text-base font-bold tracking-tight text-gray-800 dark:text-white">
                  Handmade Ceramics Online Store
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify text-sm">
                An innovative e-commerce platform using React, that enables
                users to explore and shop for products. It features
               cart and wishlist functionality.
              </p>
              <div className="flex justify-between">
                <a
                  href="https://mina-sb.github.io/handmade-ceramic-online-store/"
                  target="_blank"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Live Demo
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/mina-sb/handmade-ceramic-online-store"
                  target="_blank"
                  class="inline-flex items-center ml-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Github Repository
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 max-w-sm">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="../../public/images/untitled.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 mt-4 text-base font-bold tracking-tight text-gray-800 dark:text-white">
                  TravelTracker Web Application
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify text-sm">
                Travel-focused MERN stack web application, enabling users to
                create account and log their visited locations via Google Maps
                integration. 
              </p>
              <div className="flex justify-between">
                <a
                  href="https://mina-sb.github.io/placesFrontend/"
                  target="_blank"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Live Demo
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/mina-sb/placesFrontend"
                  target="_blank"
                  class="inline-flex items-center ml-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Github Repository
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects