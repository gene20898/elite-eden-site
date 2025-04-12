'use client';

import Link from 'next/link';
import {Search, User, ShoppingCart, MapPin, Menu} from 'lucide-react';
import {useState} from 'react';
import EliteEden from '@/icons/components/EliteEden';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full">
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo */}
            <Link className="flex flex-shrink-0 flex-col items-center" href="/">
              {/* <h1 className="font-serif text-2xl uppercase">Elite Eden</h1>
              <p className="text-center text-xs">Premium Trees and Plants</p> */}
              <div className="flex items-center gap-2">
                <EliteEden className="h-10 w-10" />
                <h1 className="font-serif text-2xl uppercase">Elite Eden</h1>
              </div>
              <p className="font-primary w-full text-center text-xs">
                Premium Trees and Plants
              </p>
            </Link>

            {/* Mobile Cart Icon */}
            <button className="flex items-center text-sm md:hidden">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>

          {/* Search - Hidden on Mobile, Shown as Full Width Below Header */}
          <div className="hidden w-64 items-center rounded-lg border px-3 py-2 md:flex">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              className="ml-2 flex-1 outline-none"
              placeholder="Search"
              type="text"
            />
          </div>

          {/* Right Icons - Hidden on Mobile */}
          <div className="hidden items-center space-x-6 md:flex">
            <button className="flex items-center text-sm">
              <MapPin className="mr-1 h-5 w-5" />
              Zone
            </button>
            <button className="flex items-center text-sm">
              <User className="mr-1 h-5 w-5" />
              Account
            </button>
            <button className="flex items-center text-sm">
              <ShoppingCart className="mr-1 h-5 w-5" />
              Cart
            </button>
          </div>
        </div>
      </div>

      {/* Categories Menu */}
      <div>
        <div className="mx-auto px-4">
          {/* Desktop Menu */}
          <ul className="hidden justify-center gap-x-12 py-4 md:flex">
            <li>
              <Link className="hover:text-green-700" href="/trees">
                TREES
              </Link>
            </li>
            <li>
              <Link className="hover:text-green-700" href="/shrubs">
                SHRUBS
              </Link>
            </li>
            <li>
              <Link className="hover:text-green-700" href="/perennials">
                PERENNIALS
              </Link>
            </li>
            <li>
              <Link className="text-red-600 hover:text-red-700" href="/on-sale">
                ON SALE
              </Link>
            </li>
            <li>
              <Link className="hover:text-green-700" href="/new-arrivals">
                NEW ARRIVALS
              </Link>
            </li>
            <li>
              <Link className="hover:text-green-700" href="/plant-care">
                PLANT CARE
              </Link>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col space-y-4 py-4">
              <li>
                <Link className="block hover:text-green-700" href="/trees">
                  TREES
                </Link>
              </li>
              <li>
                <Link className="block hover:text-green-700" href="/shrubs">
                  SHRUBS
                </Link>
              </li>
              <li>
                <Link className="block hover:text-green-700" href="/perennials">
                  PERENNIALS
                </Link>
              </li>
              <li>
                <Link
                  className="block text-red-600 hover:text-red-700"
                  href="/on-sale"
                >
                  ON SALE
                </Link>
              </li>
              <li>
                <Link
                  className="block hover:text-green-700"
                  href="/new-arrivals"
                >
                  NEW ARRIVALS
                </Link>
              </li>
              <li>
                <Link className="block hover:text-green-700" href="/plant-care">
                  PLANT CARE
                </Link>
              </li>
              {/* Mobile Menu Additional Links */}
              <li>
                <button className="flex items-center text-sm">
                  <MapPin className="mr-1 h-5 w-5" />
                  Zone
                </button>
              </li>
              <li>
                <button className="flex items-center text-sm">
                  <User className="mr-1 h-5 w-5" />
                  Account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Banner */}
      <div className="bg-primary text-mist w-full py-2 text-center">
        <div className="flex items-center justify-center">
          <p className="px-4 text-center text-sm">
            10% OFF ENTIRE SPRING ORDER! CODE: SPRING10
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
