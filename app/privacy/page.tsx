export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 bg-white">
      <div className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-slate-500 font-semibold uppercase tracking-widest text-sm">Effective Date: {new Date().toLocaleDateString()}</p>
      </div>
      
      <div className="space-y-10 text-base text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction and Scope</h2>
          <p>Luminonix Byte Corporation ("we," "our," or "us") respects your privacy and is fundamentally committed to protecting your personal data. This privacy policy informs you about how we look after your personal data when you visit our website, interact with our publishing assets (including but not limited to the Art of Ascension network), or click on our digital advertisements, and tells you about your privacy rights and how the law protects you.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. The Data We Collect About You</h2>
          <p className="mb-4">Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong>Identity Data:</strong> Includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> Includes billing address, email address, and telephone numbers.</li>
            <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website, products, and services, utilized specifically for routing and ad performance tracking.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Personal Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Cookies and Advertising Pixels</h2>
          <p>To optimize our Pay-Per-Click (PPC) campaigns and evaluate user interaction with our digital holdings, this website utilizes standard web cookies, Facebook Pixels, Google Analytics tags, and similar ad-tracking mechanisms. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. GDPR & CCPA Compliance</h2>
          <p>Depending on your location of residence, you may have rights under the General Data Protection Regulation (GDPR) or the California Consumer Privacy Act (CCPA). This includes the right to request access to, correction of, or erasure of your personal data; the right to object to processing; and the right to data portability. To exercise any of these rights, please contact our administration.</p>
        </section>

        <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-3">6. Contact Administration</h2>
          <p className="text-slate-600">If you have any questions about this privacy policy or our privacy practices, please contact our administrative operations center at: <strong className="text-slate-900">contact@luminonixbyte.com</strong>.</p>
        </section>
      </div>
    </div>
  );
}