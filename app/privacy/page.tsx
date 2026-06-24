export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold text-zinc-100 mb-8 tracking-tight">Privacy Policy</h1>
      
      <div className="space-y-8 text-sm text-zinc-400 leading-relaxed font-light">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
        
        <section className="space-y-4">
          <h2 className="text-xl font-medium text-zinc-200">1. Information Collection</h2>
          <p>Luminonix Byte Corporation ("we," "our," or "us") is committed to protecting your privacy. We collect minimal information necessary to provide our services. This may include basic contact information provided voluntarily through communication channels or analytics data utilized strictly for performance monitoring.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-zinc-200">2. Use of Information</h2>
          <p>Any information collected is used solely for the purpose of communicating with clients, optimizing our digital infrastructure, and managing our advertising campaigns. We do not sell, rent, or trade your personal information to third parties.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-zinc-200">3. Cookies and Tracking</h2>
          <p>Our website may use standard functional cookies and basic tracking pixels to measure the effectiveness of our Pay-Per-Click (PPC) advertising campaigns. You may choose to disable cookies through your browser settings.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-zinc-200">4. Contact Us</h2>
          <p>If you have any questions regarding this Privacy Policy, please contact our administrative team at contact@luminonixbyte.com.</p>
        </section>
      </div>
    </div>
  );
}
