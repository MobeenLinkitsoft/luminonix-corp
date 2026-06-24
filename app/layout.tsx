import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luminonix Byte Corporation",
  description: "Enterprise Digital Asset Management & Technical Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050505] text-zinc-400 font-sans antialiased flex flex-col min-h-screen selection:bg-zinc-800 selection:text-white">
        
        {/* Detailed Header */}
        <nav className="border-b border-zinc-900 bg-[#050505]/90 backdrop-blur-2xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            {/* Logo area */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-full" />
              </div>
              <a href="/" className="text-zinc-100 font-semibold tracking-widest text-sm">
                LUMINONIX BYTE
              </a>
            </div>
            
            {/* Nav Links */}
            <div className="hidden md:flex space-x-8 text-xs tracking-widest font-medium uppercase text-zinc-500">
              <a href="/#about" className="hover:text-zinc-100 transition duration-300">About</a>
              <a href="/#services" className="hover:text-zinc-100 transition duration-300">Capabilities</a>
              <a href="/privacy" className="hover:text-zinc-100 transition duration-300">Privacy</a>
              <a href="/terms" className="hover:text-zinc-100 transition duration-300">Terms</a>
            </div>

            {/* CTA */}
            <a href="mailto:contact@luminonixbyte.com" className="hidden md:inline-flex items-center justify-center border border-zinc-800 hover:border-zinc-600 text-zinc-300 px-5 py-2 rounded-full text-xs font-medium transition-all duration-300">
              Client Portal
            </a>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Detailed Multi-Column Footer */}
        <footer className="border-t border-zinc-900 bg-[#020202] pt-24 pb-12 mt-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
              
              {/* Brand Column */}
              <div className="col-span-1 md:col-span-1">
                <a href="/" className="text-zinc-100 font-semibold tracking-widest text-sm block mb-6">
                  LUMINONIX BYTE
                </a>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
                  Engineering scalable digital ecosystems and managing premium corporate assets for the modern enterprise.
                </p>
              </div>

              {/* Links Column 1 */}
              <div>
                <h4 className="text-zinc-100 text-sm font-medium mb-6">Corporate</h4>
                <ul className="space-y-4 text-sm text-zinc-500">
                  <li><a href="/#about" className="hover:text-white transition">About Us</a></li>
                  <li><a href="/#services" className="hover:text-white transition">Services</a></li>
                  <li><a href="#" className="hover:text-white transition">Investor Relations</a></li>
                  <li><a href="#" className="hover:text-white transition">Careers</a></li>
                </ul>
              </div>

              {/* Links Column 2 */}
              <div>
                <h4 className="text-zinc-100 text-sm font-medium mb-6">Legal</h4>
                <ul className="space-y-4 text-sm text-zinc-500">
                  <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
                  <li><a href="#" className="hover:text-white transition">Compliance</a></li>
                </ul>
              </div>

              {/* Contact Column */}
              <div>
                <h4 className="text-zinc-100 text-sm font-medium mb-6">Contact</h4>
                <ul className="space-y-4 text-sm text-zinc-500">
                  <li>Global Headquarters</li>
                  <li>contact@luminonixbyte.com</li>
                  <li>1-800-LUM-BYTE</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-zinc-600 tracking-wider">
                &copy; {new Date().getFullYear()} LUMINONIX BYTE CORPORATION. ALL RIGHTS RESERVED.
              </p>
              {/* Social SVG Icons */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition cursor-pointer">
                  <svg className="w-3 h-3 fill-zinc-400" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </div>
                <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition cursor-pointer">
                  <svg className="w-3 h-3 fill-zinc-400" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}