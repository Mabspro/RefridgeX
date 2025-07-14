"use client";

import Link from "next/link";
import { useState } from "react";

// Sample inventory data - in a real app this would come from a database
const sampleInventory = [
  {
    id: "REF001",
    title: "Hussmann 6-Door Reach-In Refrigerator",
    category: "Refrigeration",
    condition: "Remanufactured",
    price: "Contact for Quote",
    location: "Knights Landing, CA",
    specs: "72\"W x 32\"D x 82\"H, 115V",
    description: "Commercial reach-in refrigerator with glass doors, LED lighting, and digital temperature control.",
    image: "/placeholder-fridge.jpg"
  },
  {
    id: "SHE002", 
    title: "Gondola Shelving Unit - 4ft Section",
    category: "Shelving",
    condition: "Used - Good",
    price: "Contact for Quote",
    location: "Knights Landing, CA",
    specs: "48\"W x 22\"D x 72\"H, Adjustable shelves",
    description: "Heavy-duty gondola shelving perfect for grocery and retail displays.",
    image: "/placeholder-shelving.jpg"
  },
  {
    id: "REF003",
    title: "Walk-In Cooler Panel System",
    category: "Refrigeration", 
    condition: "Remanufactured",
    price: "Contact for Quote",
    location: "Knights Landing, CA",
    specs: "8' x 10' x 8'H, R-404A refrigerant",
    description: "Complete walk-in cooler system with panels, door, and refrigeration unit.",
    image: "/placeholder-walkin.jpg"
  },
  {
    id: "EQU004",
    title: "Copeland Compressor Unit",
    category: "Aux Equipment",
    condition: "Refurbished",
    price: "Contact for Quote", 
    location: "Knights Landing, CA",
    specs: "5HP, 208-230V/3Ph/60Hz",
    description: "High-efficiency scroll compressor for commercial refrigeration applications.",
    image: "/placeholder-compressor.jpg"
  },
  {
    id: "REF005",
    title: "True 3-Door Display Freezer",
    category: "Refrigeration",
    condition: "Used - Excellent",
    price: "Contact for Quote",
    location: "Knights Landing, CA", 
    specs: "78\"W x 32\"D x 82\"H, -10°F to 0°F",
    description: "Glass door display freezer with LED lighting and automatic defrost.",
    image: "/placeholder-freezer.jpg"
  },
  {
    id: "SHE006",
    title: "Wire Rack Shelving - 5 Tier",
    category: "Shelving",
    condition: "Used - Good",
    price: "Contact for Quote",
    location: "Knights Landing, CA",
    specs: "48\"W x 18\"D x 72\"H, Chrome finish",
    description: "NSF certified wire shelving unit, perfect for storage and display.",
    image: "/placeholder-wire-rack.jpg"
  }
];

const categories = ["All", "Refrigeration", "Shelving", "Aux Equipment", "Auctions"];
const conditions = ["All", "New", "Remanufactured", "Refurbished", "Used - Excellent", "Used - Good"];

export default function Inventory() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-2xl font-bold text-gray-900 cursor-pointer">RefridgeX</h1>
              </Link>
              <span className="ml-2 text-sm text-gray-600">by MC Store Fixtures</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              <Link href="/inventory" className="text-gray-900 hover:text-blue-600 font-medium">Inventory</Link>
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
                  className="text-gray-600 hover:text-blue-600 px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/inventory" 
                  className="text-gray-900 hover:text-blue-600 font-medium px-4 py-2"
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

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Equipment Inventory</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Browse our extensive collection of commercial refrigeration equipment and store fixtures. 
              All items are thoroughly inspected and ready for immediate delivery.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-2xl font-bold text-white">100K+</div>
                <div className="text-sm text-blue-100">Sq Ft Warehouse</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-2xl font-bold text-white">40+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-2xl font-bold text-white">50</div>
                <div className="text-sm text-blue-100">States Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select 
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                title="Filter by category"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
              <select 
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                title="Filter by condition"
              >
                {conditions.map(condition => (
                  <option key={condition} value={condition}>{condition}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input 
                type="text" 
                placeholder="Search equipment..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-end">
              <button className="btn-secondary px-6 py-2">Filter</button>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleInventory.map((item) => (
              <div key={item.id} className="industrial-card rounded-lg overflow-hidden">
                {/* Placeholder Image */}
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-blue-600">{item.id}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.condition === 'New' ? 'bg-green-100 text-green-800' :
                      item.condition === 'Remanufactured' ? 'bg-blue-100 text-blue-800' :
                      item.condition === 'Refurbished' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.condition}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Category:</span>
                      <span className="text-gray-900">{item.category}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Specs:</span>
                      <span className="text-gray-900 text-right">{item.specs}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Location:</span>
                      <span className="text-gray-900">{item.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">{item.price}</span>
                    <button className="btn-primary text-sm px-4 py-2">Request Quote</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex space-x-2">
              <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">Previous</button>
              <button className="px-3 py-2 text-sm bg-blue-600 text-white rounded">1</button>
              <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">2</button>
              <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">3</button>
              <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">Next</button>
            </nav>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Don&apos;t See What You Need?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We have a 100,000 sq ft warehouse with much more inventory. Contact us for custom equipment sourcing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">Contact Us</button>
            <button className="btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-gray-900">
              Request Custom Quote
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
