import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">
          Hubungi Saya
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-blue-400" />
              <span>arkanuladelis8@email.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-blue-400" />
              <span>+62 857 957 15960</span>
            </div>
            <div className="flex items-center space-x-3">
              <Linkedin className="w-6 h-6 text-blue-400" />
              <a
                href="https://www.linkedin.com/in/arkanul-adelis"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Github className="w-6 h-6 text-blue-400" />
              <a
                href="https://github.com/arkanul-adelis"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nama"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              placeholder="Pesan"
              rows={4}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
