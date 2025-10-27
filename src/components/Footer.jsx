import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/90">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-300">
          © {new Date().getFullYear()} FameJet Star Entertainment — All rights reserved.
        </div>
        <div className="text-sm text-gray-400">
          <a href="mailto:famejetstar@gmail.com" className="hover:text-orange-400">famejetstar@gmail.com</a>
        </div>
        <div className="text-sm text-gray-400">Delhi, India • 110001</div>
      </div>
    </footer>
  );
}
