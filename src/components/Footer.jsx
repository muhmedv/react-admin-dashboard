const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className= "bottom-0 left-0 w-full opacity-70 bg-gray-900 text-gray-300 text-center text-sm p-2 mt-2 z-9 h-auto text-opacity-50">
      © {currentYear} <a href="https://github.com/muhmedv" target="_blank" className="text-gray-400">My GitHub</a>. All Rights Reserved
    </footer>
  );
};

export default Footer;