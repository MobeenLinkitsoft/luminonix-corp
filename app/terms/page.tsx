export default function TermsAndConditions() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold text-zinc-100 mb-8 tracking-tight">Terms and Conditions</h1>
      
      <div className="space-y-8 text-sm text-zinc-400 leading-relaxed font-light">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
        
        <section className="space-y-4">
          <h2 className="text-xl font-medium text-zinc-200">1. Agreement to Terms</h2>
          <p>By accessing this website, you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-zinc-200">2. Intellectual Property</h2>
          <p>The materials, structural designs, and text contained on this website are protected by applicable copyright and trademark law and are the property of Luminonix Byte Corporation.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-zinc-200">3. Disclaimer</h2>
          <p>The materials on Luminonix Byte Corporation's website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-zinc-200">4. Limitations</h2>
          <p>In no event shall Luminonix Byte Corporation or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.</p>
        </section>
      </div>
    </div>
  );
}