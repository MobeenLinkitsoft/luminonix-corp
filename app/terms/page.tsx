export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 bg-white">
      <div className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Terms and Conditions</h1>
        <p className="text-slate-500 font-semibold uppercase tracking-widest text-sm">Effective Date: {new Date().toLocaleDateString()}</p>
      </div>
      
      <div className="space-y-10 text-base text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
          <p>These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Luminonix Byte Corporation (“we,” “us” or “our”), concerning your access to and use of this website as well as any other media form, media channel, mobile website, or publishing asset (including subsidiary imprints) related, linked, or otherwise connected thereto.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Intellectual Property Rights</h2>
          <p>Unless otherwise indicated, the website and its original content, features, and functionality (including but not limited to all information, software, text, displays, images, video, audio, layout, and literary works associated with our publishing wing) are owned by Luminonix Byte Corporation and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. No part of the website and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Representations</h2>
          <p className="mb-4">By using the website, you represent and warrant that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
            <li>You will not access the site through automated or non-human means, whether through a bot, script, or otherwise.</li>
            <li>You will not use the site for any illegal or unauthorized purpose.</li>
            <li>Your use of the site will not violate any applicable law or regulation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitations of Liability</h2>
          <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, our advertising campaigns, or our published materials, even if we have been advised of the possibility of such damages.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Modifications and Interruptions</h2>
          <p>We reserve the right to change, modify, or remove the contents of the site at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the site or any of our publishing assets.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Governing Law</h2>
          <p>These Terms shall be governed by and defined following the laws of the jurisdiction in which Luminonix Byte Corporation is legally registered. Luminonix Byte Corporation and yourself irrevocably consent that the courts of said jurisdiction shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
        </section>
      </div>
    </div>
  );
}