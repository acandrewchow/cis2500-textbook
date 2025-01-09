export default function Footer() {
    return (
      <footer className="absolute bottom-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Andrew Chow. All rights reserved.
      </footer>
    );
  }