import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-2">
              Arkanul Adelis
            </h3>
            <p className="text-sm">Pengembang Web Profesional</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Kontak</h3>
            <p className="text-sm">Email: arkanuladelis8@email.com</p>
            <p className="text-sm">Telp: +62 857 957 15960</p>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-2">
              Ikuti Saya
            </h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Arkanul Adelis. All rights
            reserved.
          </p>
          <p className="text-sm mt-2">
            Made with <span className="text-red-500">❤️</span> in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
