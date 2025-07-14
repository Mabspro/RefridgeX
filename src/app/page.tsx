"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">RefridgeX</h1>
              <span className="ml-2 text-sm text-gray-600">by MC Store Fixtures</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 font-medium">Home</Link>
              <Link href="/inventory" className="text-gray-600 hover:text-blue-600">Inventory</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            </nav>
            
            {/* Desktop CTA Button */}
            <button className="btn-primary hidden md:block">Request Quote</button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="text-gray-900 hover:text-blue-600 font-medium px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/inventory" 
                  className="text-gray-600 hover:text-blue-600 px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inventory
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-600 hover:text-blue-600 px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-600 hover:text-blue-600 px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="px-4 py-2">
                  <button className="btn-primary w-full">Request Quote</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                High-Value Commercial Refrigeration & Fixtures
                <span className="text-orange-400"> Nationwide</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Remanufactured and used commercial refrigeration equipment from our 100,000 sq ft warehouse. 
                Over 40 years of combined experience serving grocery stores, restaurants, and convenience stores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary text-lg px-8 py-4">Browse Inventory</button>
                <button className="btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-gray-900">
                  Request Freight Quote
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-800 rounded-lg p-8 industrial-card">
                <div className="text-center">
                  <div className="w-full h-48 bg-gray-600 rounded-lg mx-auto mb-4 overflow-hidden">
                    <img 
                      src="/images/4-door-fron-side-view.jpg" 
                      alt="Multiple 4-Door Commercial Refrigerators" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Featured Equipment</h3>
                  <p className="text-gray-800 text-sm font-semibold">Multiple 4-door units & hundreds more in our warehouse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Filters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="industrial-card rounded-lg p-6 text-center hover:cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Refrigeration</h3>
              <p className="text-gray-600 text-sm">Walk-in coolers, display cases, reach-in units</p>
            </div>
            
            <div className="industrial-card rounded-lg p-6 text-center hover:cursor-pointer">
              <div className="w-16 h-16 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Shelving</h3>
              <p className="text-gray-600 text-sm">Gondola shelving, wire racks, display fixtures</p>
            </div>
            
            <div className="industrial-card rounded-lg p-6 text-center hover:cursor-pointer">
              <div className="w-16 h-16 bg-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Aux Equipment</h3>
              <p className="text-gray-600 text-sm">Compressors, condensers, specialty equipment</p>
            </div>
            
            <div className="industrial-card rounded-lg p-6 text-center hover:cursor-pointer">
              <div className="w-16 h-16 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Auctions</h3>
              <p className="text-gray-600 text-sm">Live auctions, liquidation sales, bulk lots</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why RefridgeX Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose RefridgeX?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Decades of expertise in commercial refrigeration with a massive inventory and nationwide reach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-full max-w-md h-40 rounded-lg mx-auto mb-6 overflow-hidden shadow-lg">
                <img 
                  src="/images/storewide-view.jpg" 
                  alt="100K Sq Ft Warehouse Facility" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">100K Sq Ft Warehouse</h3>
              <p className="text-gray-600">Massive inventory of commercial refrigeration equipment and store fixtures ready for immediate delivery.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vetted Condition</h3>
              <p className="text-gray-600">All equipment is thoroughly inspected and remanufactured to ensure reliable performance for your business.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Nationwide Delivery</h3>
              <p className="text-gray-600">Simple freight quotes and delivery coordination to get your equipment where you need it, when you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Equipment?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Browse our inventory or contact us for a custom quote on the commercial refrigeration equipment you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">Browse All Inventory</button>
            <button className="btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-gray-900">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">RefridgeX</h3>
              <p className="text-gray-400 text-sm">
                High-value commercial refrigeration and store fixtures from MC Store Fixtures & Equipment Co.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/inventory" className="text-gray-400 hover:text-white">Inventory</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                <li><Link href="/auctions" className="text-gray-400 hover:text-white">Auctions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/refrigeration" className="text-gray-400 hover:text-white">Refrigeration</Link></li>
                <li><Link href="/shelving" className="text-gray-400 hover:text-white">Shelving</Link></li>
                <li><Link href="/equipment" className="text-gray-400 hover:text-white">Aux Equipment</Link></li>
                <li><Link href="/fixtures" className="text-gray-400 hover:text-white">Store Fixtures</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Contact Info</h4>
              <div className="text-sm text-gray-400 space-y-2">
                <p>42445 County Road 116<br />Knights Landing, CA 95645</p>
                <p>Phone: (530) 735-6025</p>
                <p>Hours: Mon-Fri 9AM-5PM</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 RefridgeX by MC Store Fixtures & Equipment Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
