import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script"; // Imported Next.js Script component
import "./globals.css";

// Initialize local fonts
const gilroy = localFont({
  src: [
    { path: "./fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-gilroy",
});

// Initialize secondary Google fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

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
    <html
      lang="en"
      className={`scroll-smooth light ${inter.variable} ${montserrat.variable} ${gilroy.variable}`}
    >
      <head>
        {/* Google tag (gtag.js) for PPC */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-18270182249`}
        />
        <Script
          id="google-ads-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18270182249');
            `,
          }}
        />
      </head>

      <body
        className={`${gilroy.className} bg-white text-slate-600 antialiased flex flex-col min-h-screen selection:bg-blue-100 selection:text-blue-900`}
      >
        {/* Navigation */}
        <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center shadow-md">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <a
                href="/"
                className="text-slate-900 font-bold tracking-widest text-sm"
              >
                LUMINONIX BYTE
              </a>
            </div>

            <div className="hidden md:flex space-x-8 text-xs tracking-widest font-semibold uppercase text-slate-500">
              <a
                href="/#about"
                className="hover:text-slate-900 transition duration-300"
              >
                About
              </a>
              <a
                href="/#services"
                className="hover:text-slate-900 transition duration-300"
              >
                Capabilities
              </a>
              <a
                href="/privacy"
                className="hover:text-slate-900 transition duration-300"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="hover:text-slate-900 transition duration-300"
              >
                Terms
              </a>
            </div>

            <a
              href="mailto:contact@luminonixbyte.com"
              className="hidden md:inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Client Portal
            </a>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-100 bg-gray-50 pt-24 pb-12 mt-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
              <div className="col-span-1 md:col-span-1">
                <a
                  href="/"
                  className="text-slate-900 font-bold tracking-widest text-sm block mb-6"
                >
                  LUMINONIX BYTE
                </a>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                  Engineering scalable digital ecosystems and managing premium
                  corporate assets for the modern enterprise.
                </p>
              </div>

              <div>
                <h4 className="text-slate-900 text-sm font-bold mb-6">
                  Corporate
                </h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li>
                    <a
                      href="/#about"
                      className="hover:text-slate-900 transition"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#services"
                      className="hover:text-slate-900 transition"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-slate-900 transition">
                      Investor Relations
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-slate-900 text-sm font-bold mb-6">Legal</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li>
                    <a
                      href="/privacy"
                      className="hover:text-slate-900 transition"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className="hover:text-slate-900 transition"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-slate-900 transition">
                      Compliance
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-slate-900 text-sm font-bold mb-6">
                  Contact
                </h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li>Global Headquarters</li>
                  <li>contact@luminonixbyte.com</li>
                  <li>1-800-LUM-BYTE</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-slate-400 tracking-wider font-semibold">
                &copy; {new Date().getFullYear()} LUMINONIX BYTE CORPORATION.
                ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
