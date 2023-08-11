'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/flickr.png';

export default function Nav() {
  // useState to manage the dropdown menu. It will have links to the
  // challenge instructions as well as my GitHub profile & source code
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setToggleDropdown(false);
  };

  return (
    <div className="flex-between w-full mb-5 pt-3">
      <Link href="/" className="flex gap-2 pt-3 flex-center">
        <Image
          src={Logo}
          alt="Logo"
          width={120}
          height={90}
          className="object-contain"
        />
        <p className="max-sm:hidden italic font-semibold text-xs text-blue-600 tracking-wide">
          by Alejandro Rodríguez Hernández
        </p>
      </Link>
      <div className="flex relative">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => setToggleDropdown((prev) => !prev)}
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          {toggleDropdown && (
            <div className="absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-white min-w-[210px] flex flex-col gap-2 justify-center items-center z-10">
              <Link
                href="https://github.com/MayorCachapa"
                target='_blank'
                onClick={() => {
                    handleToggleDropdown();
                }}
                className="dropdown_link"
              >
                My profile
              </Link>
              <Link
                href="https://github.com/miyagami-com/coding-cases/blob/main/Full-Stack.md"
                target='_blank'
                onClick={() => {
                    handleToggleDropdown();
                }}
                className="dropdown_link"
              >
                Instructions
              </Link>
              <Link
                href="https://github.com/MayorCachapa/NX-FlickrApp"
                target='_blank'
                onClick={() => {
                  handleToggleDropdown();;
                }}
                className="mt-5 w-full rounded-full bg-sky-700 py-1.5 px-5 text-slate-50 transition-all hover:bg-slate-50 hover:text-slate-700 hover:border text-center text-sm font-inter flex items-center justify-center"
              >
                See the code
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
