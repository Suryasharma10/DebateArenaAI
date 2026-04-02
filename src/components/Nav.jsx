import React, { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-cyan-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-white text-cyan-600 flex items-center justify-center font-bold text-lg shadow-md">
            D
          </div>
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            Debate-Arena-AI
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          <a href="#" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white"></span>
          </a>

          <a href="#" className="relative group hover:text-gray-200 transition">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all"></span>
          </a>

          <a href="#" className="relative group hover:text-gray-200 transition">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all"></span>
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-white text-cyan-600 px-5 py-2 rounded-full font-semibold shadow-md hover:scale-105 hover:bg-gray-100 transition">
            Start Debate
          </button>
        </div>

        {/* Custom Hamburger (No lucide-react) */}
        <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-lg font-medium">
          <a href="#" className="border-b border-white pb-1">Home</a>
          <a href="#" className="border-b border-white pb-1">About</a>
          <a href="#" className="border-b border-white pb-1">Contact</a>
          <button className="bg-white text-cyan-600 px-4 py-2 rounded-full font-semibold mt-2">
            Start Debate
          </button>
        </div>
      )}
    </nav>
  );
}
