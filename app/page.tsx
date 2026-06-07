export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Chrome Extension
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Save and restore browser tab sessions with{' '}
          <span className="text-[#58a6ff]">smart grouping</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          TabVault captures your open tabs, groups them by project or domain, and lets you restore any session in one click — with search and tagging built in.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get TabVault — $9/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Works on Chrome &amp; Edge.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
        {[
          { icon: '🗂️', title: 'Smart Grouping', desc: 'Auto-clusters tabs by domain and browsing patterns.' },
          { icon: '🔍', title: 'Instant Search', desc: 'Find any saved tab or session in milliseconds.' },
          { icon: '🔄', title: 'One-Click Restore', desc: 'Reopen entire sessions exactly as you left them.' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited saved sessions',
              'Smart tab grouping',
              'Search & tagging',
              'Web dashboard sync',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
          <p className="text-[#8b949e] text-xs mt-3">7-day free trial. No credit card required.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          {[
            {
              q: 'How does smart grouping work?',
              a: 'TabVault analyzes tab domains and your browsing patterns to automatically cluster related tabs into named groups — no manual sorting needed.',
            },
            {
              q: 'Does it work with Edge or other Chromium browsers?',
              a: 'Yes. TabVault is built on standard Chrome Extension APIs and works on any Chromium-based browser including Microsoft Edge.',
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Absolutely. Cancel from your account dashboard at any time with no fees or penalties. Your saved sessions remain accessible until the billing period ends.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} TabVault. All rights reserved.
      </footer>
    </main>
  )
}
