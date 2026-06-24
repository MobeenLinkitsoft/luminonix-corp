export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col lg:flex-row items-center gap-16 relative">
        <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
          <div className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 rounded-full px-4 py-1.5 text-xs text-slate-700 mb-8 tracking-wider font-bold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Active Frameworks Online
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Architecting <br className="hidden md:block" /> the digital baseline.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 max-w-xl mb-10 leading-relaxed font-medium">
            Luminonix Byte Corporation provides high-tier structural assets, enterprise publishing frameworks, and precision data strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#services" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all duration-300 text-center shadow-xl shadow-slate-900/20 hover:-translate-y-1">
              Explore Capabilities
            </a>
            <a href="mailto:contact@luminonixbyte.com" className="bg-white border-2 border-gray-200 text-slate-800 px-8 py-4 rounded-xl font-bold text-sm hover:border-slate-300 hover:bg-gray-50 transition-all duration-300 text-center">
              Contact Administration
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative z-10">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
            alt="Corporate Environment" 
            className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl border border-gray-100"
          />
        </div>
      </section>

      {/* 2. TRUST/METRICS STRIP */}
      <section className="w-full border-y border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200 text-center md:text-left">
          <div className="w-full md:px-12">
            <h4 className="text-5xl font-extrabold text-slate-900 mb-2">99.9%</h4>
            <p className="text-xs text-slate-600 tracking-widest uppercase font-bold">Uptime Architecture</p>
          </div>
          <div className="w-full md:px-12 pt-8 md:pt-0">
            <h4 className="text-5xl font-extrabold text-slate-900 mb-2">24/7</h4>
            <p className="text-xs text-slate-600 tracking-widest uppercase font-bold">Global Management</p>
          </div>
          <div className="w-full md:px-12 pt-8 md:pt-0">
            <h4 className="text-5xl font-extrabold text-slate-900 mb-2">Tier-1</h4>
            <p className="text-xs text-slate-600 tracking-widest uppercase font-bold">Data Compliance</p>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US SECTION */}
      <section id="about" className="w-full max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80" alt="Tech Abstract" className="rounded-2xl w-full h-64 object-cover shadow-lg hover:scale-105 transition-transform duration-500" />
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80" alt="Office Setup" className="rounded-2xl w-full h-64 object-cover shadow-lg mt-8 hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">Built on precision. <br/> Scaled with intent.</h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-6 font-medium">
            Luminonix Byte Corporation was established to bridge the gap between complex technical infrastructure and streamlined user experiences. We engineer ecosystems that drive results.
          </p>
          <p className="text-slate-700 text-lg leading-relaxed font-medium">
            Our core focus lies in deploying robust frameworks for publishing, media dissemination, and high-conversion ad routing, ensuring our assets perform at the highest echelon.
          </p>
        </div>
      </section>

      {/* 4. CAPABILITIES GRID */}
      <section id="services" className="w-full bg-slate-900 py-32 rounded-[3rem] my-12 max-w-[95%] mx-auto px-6 text-white overflow-hidden relative shadow-2xl">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">Core Capabilities</h2>
            <p className="text-slate-300 max-w-2xl text-lg md:mx-0 mx-auto font-medium">Comprehensive solutions spanning network infrastructure, media buying, and intellectual property deployment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:bg-slate-700 transition-colors duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Digital Publishing</h3>
              <p className="text-slate-300 text-sm leading-relaxed">End-to-end management of premium literary and educational assets, ensuring high-fidelity delivery.</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:bg-slate-700 transition-colors duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Media Strategy (PPC)</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Data-driven traffic routing, conversion rate optimization, and programmatic ad buying.</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:bg-slate-700 transition-colors duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Database Architecture</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Custom cloud-based storage solutions built for scalability and zero-latency retrieval.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTELLECTUAL PROPERTY & HOLDINGS */}
      <section className="w-full py-32 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">Corporate Holdings</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">Managing an elite portfolio of digital assets, literary properties, and subsidiary operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-10 rounded-3xl shadow-lg">
              <div className="w-14 h-14 bg-slate-900 text-white flex items-center justify-center font-bold text-2xl mb-6 rounded-xl shadow-md">A</div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Art of Ascension Media</h3>
              <p className="text-slate-700 text-base leading-relaxed mb-8">Our premier publishing division dedicated to high-tier developmental frameworks. Currently managing the upcoming release of the flagship title, designed to instill systematic self-discipline and profound structural lifestyle changes.</p>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                Status: Active Development
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-10 rounded-3xl shadow-lg">
              <div className="w-14 h-14 bg-slate-900 text-white flex items-center justify-center font-bold text-2xl mb-6 rounded-xl shadow-md">L</div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Luminonix Consulting Wing</h3>
              <p className="text-slate-700 text-base leading-relaxed mb-8">B2B strategic division handling external infrastructure audits, rigorous media ad-spend allocation, and corporate digital asset restructuring. Ensuring optimal conversions for high-ticket digital funnels.</p>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider border border-blue-200">
                Status: Operational
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="w-full py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div className="border border-gray-200 bg-gray-50 p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-3">What is the primary function of Luminonix Byte Corporation?</h4>
              <p className="text-slate-700 text-base leading-relaxed">We are a registered LLC specializing in digital asset management, high-end content publishing, and sophisticated PPC media buying strategies.</p>
            </div>
            
            <div className="border border-gray-200 bg-gray-50 p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-3">How do you handle client data and privacy?</h4>
              <p className="text-slate-700 text-base leading-relaxed">Data integrity is our highest priority. We comply with stringent global privacy regulations to ensure ad-platform compliance and secure user retention.</p>
            </div>

            <div className="border border-gray-200 bg-gray-50 p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Where is the corporation located?</h4>
              <p className="text-slate-700 text-base leading-relaxed">Luminonix Byte operates as a modern digital entity. We manage cloud-based servers, distributed assets, and remote operations on a global scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="w-full bg-slate-50 py-32 text-center border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">Ready to scale.</h2>
          <p className="text-slate-700 text-xl mb-10 font-medium">Ensure your ad ecosystem is backed by a verified, compliant, and robust corporate infrastructure.</p>
          <a href="mailto:contact@luminonixbyte.com" className="inline-flex items-center gap-2 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1">
            Establish Connection
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </section>

    </div>
  );
}