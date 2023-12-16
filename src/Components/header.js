import React from 'react';

const Header = () => {
  return (
    <header class="text-gray-800 body-font bg-green-500">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="/download.jpeg" alt="Logo" class="h-8 w-8" />
        <span class="ml-3 text-xl">Quaid-i-Azam University</span>
      </a>
      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a href='#' class="mr-5 hover:text-gray-900">Administration</a>
        <a href='#' class="mr-5 hover:text-gray-900">Faculties</a>
        <a href='#' class="mr-5 hover:text-gray-900">Admissions</a>
        <a href='#' class="mr-5 hover:text-gray-900">Life At Campus</a>
      </nav>
      <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">CMS
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
  );
};

export default Header;
