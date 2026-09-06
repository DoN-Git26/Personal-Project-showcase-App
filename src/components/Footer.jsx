import { useState } from "react";

function Footer() {
  const [showContact, setShowContact] = useState(false);

  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
      <p>&copy; 2026 GamePort Africa. All rights reserved.</p>
      <nav className="space-x-4 mt-2">
        <a href="/support" className="hover:text-yellow-400">Support</a>
        <a href="/privacy" className="hover:text-yellow-400">Privacy Policy</a>
        <a href="/terms" className="hover:text-yellow-400">Terms of Use</a>
        <button
          onClick={() => setShowContact(!showContact)}
          className="ml-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded hover:bg-yellow-300"
        >
          Contact Us
        </button>
      </nav>
      {showContact && (
        <div className="mt-4 bg-gray-800 text-white rounded-lg shadow-lg inline-block p-4">
          <p className="font-semibold">Phone:</p>
          <p className="mb-2">
            <a href="tel:0700000000" className="hover:text-yellow-400">07 00 000 00</a>
          </p>
          <p className="font-semibold">Email:</p>
          <p>
            <a href="mailto:gameportafrica.co.ke" className="hover:text-yellow-400">gameportafrica.co.ke</a>
          </p>
        </div>
      )}
    </footer>
  );
}

export default Footer;
