function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
      <p>&copy; 2026 GamePort Africa. All rights reserved.</p>
      <nav className="space-x-4 mt-2">
        <a href="/support" className="hover:text-yellow-400">Support</a>
        <a href="/privacy" className="hover:text-yellow-400">Privacy Policy</a>
        <a href="/terms" className="hover:text-yellow-400">Terms of Use</a>
      </nav>
    </footer>
  );
}

export default Footer;