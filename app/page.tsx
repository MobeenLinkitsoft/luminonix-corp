export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 md:py-48 flex flex-col items-start relative">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-zinc-900/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 border border-zinc-800 rounded-full px-4 py-1.5 text-xs text-zinc-400 mb-8 tracking-wider bg-zinc-900/30 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Systems Online
        </div>
        
        <h1 className="text-5xl md:text-8xl font-medium tracking-tighter text-zinc-100 mb-8 leading-[1.05]">
          Architecting <br className="hidden md:block" /> the digital baseline.
        </h1>
        
        <p className="text-lg md:text-2xl text-zinc-500 max-w-3xl mb-12 font-light leading-relaxed">
          Luminonix Byte Corporation provides high-tier structural assets, enterprise publishing frameworks, and precision data strategies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#services" className="bg-zinc-100 text-[#050505] px-8 py-4 rounded font-medium text-sm hover:bg-white transition-colors duration-300 text-center shadow-[0_0_40px_rgba(255,255,255,0.05)]">
            Explore Capabilities
          </a>
          <a href="mailto:contact@luminonixbyte.com" className="bg-transparent border border-zinc-700 text-zinc-300 px-8 py-4 rounded font-medium text-sm hover:bg-zinc-900 transition-colors duration-300 text-center">
            Contact Administration
          </a>
        </div>
      </section>

      {/* 2. TRUST/METRICS STRIP */}
      <section className="w-full border-y border-zinc-900 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-zinc-900 text-center md:text-left">
          <div className="w-full md:px-8">
            <h4 className="text-4xl font-medium text-zinc-100 mb-1">99.9%</h4>
            <p className="text-xs text-zinc-500 tracking-widest uppercase">Uptime Architecture</p>
          </div>
          <div className="w-full md:px-8 pt-8 md:pt-0">
            <h4 className="text-4xl font-medium text-zinc-100 mb-1">24/7</h4>
            <p className="text-xs text-zinc-500 tracking-widest uppercase">Global Resource Management</p>
          </div>
          <div className="w-full md:px-8 pt-8 md:pt-0">
            <h4 className="text-4xl font-medium text-zinc-100 mb-1">Tier-1</h4>
            <p className="text-xs text-zinc-500 tracking-widest uppercase">Data Security Compliance</p>
          </div>
        </div>
      </section>

      {/* 3. GLOBAL INFRASTRUCTURE */}
      <section className="w-full py-32 border-b border-zinc-900 relative overflow-hidden bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-zinc-100 mb-6">Global Deployment</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-16 text-lg">Our assets are distributed across a decentralized content delivery network, ensuring zero-latency access and uninterrupted operational capacity worldwide.</p>
          
          <div className="relative w-full max-w-4xl mx-auto aspect-video border border-zinc-800 rounded-xl bg-zinc-900/30 overflow-hidden flex items-center justify-center">
            {/* Minimalist Grid Map Visual */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            {/* Simulated Data Nodes */}
            <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse"></div>
            <div className="absolute top-[45%] left-[70%] w-2 h-2 bg-zinc-400 rounded-full animate-pulse delay-75"></div>
            <div className="absolute top-[60%] left-[40%] w-2 h-2 bg-zinc-500 rounded-full animate-pulse delay-150"></div>
            <div className="absolute top-[25%] left-[80%] w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse delay-300"></div>
            
            <p className="z-10 text-zinc-600 font-mono text-sm tracking-widest uppercase">Network Status: Nominal</p>
          </div>
        </div>
      </section>

      {/* 4. ABOUT US SECTION */}
      <section id="about" className="w-full max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-zinc-100 mb-6">Built on precision. <br/> Scaled with intent.</h2>
          <p className="text-zinc-500 leading-relaxed mb-6">
            Luminonix Byte Corporation was established to bridge the gap between complex technical infrastructure and streamlined user experiences. We do not just build digital products; we engineer ecosystems.
          </p>
          <p className="text-zinc-500 leading-relaxed">
            Our core focus lies in deploying robust frameworks for publishing, media dissemination, and high-conversion ad routing, ensuring our assets perform at the highest echelon of digital standards.
          </p>
        </div>
        <div className="w-full md:w-1/2 aspect-square md:aspect-[4/3] bg-zinc-900/50 border border-zinc-800 rounded-lg flex items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
           <div className="w-32 h-32 border border-zinc-700 rounded-full flex items-center justify-center z-10 bg-[#050505]">
              <div className="w-16 h-16 border border-zinc-500 rounded-full" />
           </div>
        </div>
      </section>

      {/* 5. SERVICES / CAPABILITIES GRID */}
      <section id="services" className="w-full border-t border-zinc-900 bg-[#0a0a0a] py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-zinc-100 mb-4">Core Capabilities</h2>
            <p className="text-zinc-500 max-w-2xl text-lg">Comprehensive solutions spanning network infrastructure, media buying, and intellectual property deployment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <div className="group">
              <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-zinc-500 transition-colors">
                <svg className="w-5 h-5 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-xl font-medium text-zinc-100 mb-3 tracking-tight">Digital Publishing</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">End-to-end management of premium literary and educational assets, ensuring high-fidelity delivery and cross-platform formatting.</p>
            </div>

            <div className="group">
              <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-zinc-500 transition-colors">
                <svg className="w-5 h-5 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="text-xl font-medium text-zinc-100 mb-3 tracking-tight">Media Strategy (PPC)</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Data-driven traffic routing, conversion rate optimization, and programmatic ad buying to ensure optimal asset capitalization.</p>
            </div>

            <div className="group">
              <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-zinc-500 transition-colors">
                <svg className="w-5 h-5 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-zinc-100 mb-3 tracking-tight">IP Curation</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Securing, managing, and scaling intellectual property brands to maintain high market authority and corporate value.</p>
            </div>

            <div className="group">
              <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-zinc-500 transition-colors">
                <svg className="w-5 h-5 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
              </div>
              <h3 className="text-xl font-medium text-zinc-100 mb-3 tracking-tight">Database Architecture</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Custom cloud-based storage solutions built for scalability, zero-latency retrieval, and advanced encryption standards.</p>
            </div>

            <div className="group">
              <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-zinc-500 transition-colors">
                <svg className="w-5 h-5 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-xl font-medium text-zinc-100 mb-3 tracking-tight">Web Engineering</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Development of responsive, high-fidelity corporate portals and landing architectures utilizing modern frameworks.</p>
            </div>

            <div className="group">
              <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-zinc-500 transition-colors">
                <svg className="w-5 h-5 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-xl font-medium text-zinc-100 mb-3 tracking-tight">Performance Analytics</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Deep-dive telemetry and user metric analysis to refine corporate strategy and decrease cost-per-acquisition metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTELLECTUAL PROPERTY & HOLDINGS (Publishing Nod) */}
      <section className="w-full py-32 border-t border-zinc-900 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-zinc-100 mb-4">Corporate Holdings</h2>
              <p className="text-zinc-500 max-w-xl text-lg">Managing an elite portfolio of digital assets, literary properties, and subsidiary operations.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-lg hover:bg-zinc-900/40 transition-colors">
              <div className="w-10 h-10 bg-zinc-100 text-black flex items-center justify-center font-bold text-lg mb-6 rounded-sm">A</div>
              <h3 className="text-2xl font-medium text-zinc-100 mb-3">Art of Ascension Media</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">Our primary publishing imprint focused on high-tier self-development literature, habit-forming educational frameworks, and non-fiction developmental guides.</p>
              <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest">Status: Active Development</div>
            </div>

            <div className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-lg hover:bg-zinc-900/40 transition-colors">
              <div className="w-10 h-10 bg-zinc-100 text-black flex items-center justify-center font-bold text-lg mb-6 rounded-sm">L</div>
              <h3 className="text-2xl font-medium text-zinc-100 mb-3">Luminonix Consulting Wing</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">B2B strategic division handling external infrastructure audits, media ad-spend allocation, and corporate digital asset restructuring.</p>
              <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest">Status: Operational</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. APPROACH / METHODOLOGY */}
      <section className="w-full py-32 border-t border-zinc-900 relative overflow-hidden bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="text-xs text-zinc-500 tracking-widest uppercase mb-4">Corporate Methodology</div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-zinc-100 mb-8 leading-tight">We eliminate friction between complex algorithms and human engagement.</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 mt-1 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full"></span>
                </div>
                <div>
                  <h4 className="text-zinc-200 font-medium mb-1">Minimalist by Design</h4>
                  <p className="text-sm text-zinc-500">We believe in subtracting the unnecessary so the core value of an asset speaks for itself.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 mt-1 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full"></span>
                </div>
                <div>
                  <h4 className="text-zinc-200 font-medium mb-1">Data-Backed Logic</h4>
                  <p className="text-sm text-zinc-500">Every design choice, traffic route, and publishing schedule is determined by empirical data.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 bg-[#020202] border border-zinc-800 rounded-lg p-6 font-mono text-xs text-zinc-500 shadow-2xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <p><span className="text-purple-400">const</span> <span className="text-blue-400">entity</span> = <span className="text-yellow-300">"Luminonix Byte"</span>;</p>
            <p><span className="text-purple-400">let</span> <span className="text-blue-400">status</span> = <span className="text-yellow-300">"Operational"</span>;</p>
            <br/>
            <p><span className="text-purple-400">function</span> <span className="text-green-300">initiateProtocol</span>() {'{'}</p>
            <p className="pl-4">console.<span className="text-blue-300">log</span>(<span className="text-yellow-300">"Routing active campaigns..."</span>);</p>
            <p className="pl-4"><span className="text-purple-400">return</span> optimizeFlow(entity);</p>
            <p>{'}'}</p>
          </div>
        </div>
      </section>

      {/* 8. CORPORATE GOVERNANCE / LEADERSHIP */}
      <section className="w-full border-t border-zinc-900 py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-zinc-100 mb-6">Corporate Governance</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-16 text-lg">Guided by rigorous operational standards and a commitment to sustained digital excellence.</p>
          
          <div className="inline-flex flex-col items-center p-8 border border-zinc-800 rounded-lg bg-zinc-900/10">
             <div className="w-20 h-20 bg-zinc-800 rounded-full mb-6 flex items-center justify-center border border-zinc-700">
               <svg className="w-8 h-8 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
             </div>
             <h3 className="text-xl font-medium text-zinc-100 mb-1">Executive Board</h3>
             <p className="text-zinc-500 text-sm mb-4">Luminonix Byte Corporation LLC</p>
             <div className="w-12 h-[1px] bg-zinc-700 mb-4"></div>
             <p className="text-zinc-400 text-xs uppercase tracking-widest">Registered Entity</p>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION (Crucial for Ad Warmup) */}
      <section className="w-full border-t border-zinc-900 py-32 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-zinc-100 mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-zinc-800 pb-6">
              <h4 className="text-lg font-medium text-zinc-200 mb-2">What is the primary function of Luminonix Byte Corporation?</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">We are a registered LLC specializing in digital asset management, high-end content publishing (including self-development materials), and sophisticated PPC media buying strategies.</p>
            </div>
            
            <div className="border-b border-zinc-800 pb-6">
              <h4 className="text-lg font-medium text-zinc-200 mb-2">How do you handle client data and privacy?</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">Data integrity is our highest priority. We comply with standard global privacy regulations. Detailed information can be found on our dedicated Privacy Policy page.</p>
            </div>

            <div className="border-b border-zinc-800 pb-6">
              <h4 className="text-lg font-medium text-zinc-200 mb-2">Do you provide external consulting?</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">Yes. While we primarily manage internal portfolios, we selectively accept external consulting contracts for enterprise-level digital architecture and ad-routing optimization.</p>
            </div>

            <div className="pb-6">
              <h4 className="text-lg font-medium text-zinc-200 mb-2">Where is the corporation located?</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">Luminonix Byte operates as a decentralized digital entity with our primary corporate registration structured as an LLC. We manage cloud-based servers and remote operations globally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CALL TO ACTION */}
      <section className="w-full border-t border-zinc-900 bg-gradient-to-b from-[#050505] to-[#0a0a0a] py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-zinc-100 mb-6">Ready to scale.</h2>
          <p className="text-zinc-500 text-lg mb-10">Ensure your ad ecosystem is backed by a verified, compliant, and robust corporate infrastructure.</p>
          <a href="mailto:contact@luminonixbyte.com" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded font-medium hover:bg-zinc-200 transition-colors duration-300">
            Establish Connection
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </section>

    </div>
  );
}