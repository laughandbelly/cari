const quickFacts = [
  { label: 'Schemes mapped', value: '15+' },
  { label: 'Time to result', value: '~60 sec' },
  { label: 'First-step clarity', value: '100%' }
];

const howItWorks = [
  'Tell Cari your caregiving situation in plain language.',
  'Cari checks likely eligibility across Singapore support schemes.',
  'You get a clear action plan ordered by highest financial impact.'
];

const samplePrompts = [
  'My 78-year-old mum lives with us and needs help walking. Household income is $3,500/month.',
  'My dad is 82 with dementia and needs help with bathing and dressing. Income is $2,800/month.',
  "My wife is 67 post-stroke. We're considering a helper and need support options."
];

export default function App() {
  return (
    <div className="page">
      <header className="hero card">
        <p className="badge">Healthcare support navigator</p>
        <h1>Cari 🌿</h1>
        <p className="subtitle">
          Singapore caregiver support finder that turns one message into a personalised scheme action plan.
        </p>
        <div className="ctaRow">
          <button className="btn btnPrimary">Start now</button>
          <button className="btn btnGhost">View sample report</button>
        </div>
      </header>

      <section className="stats grid3" aria-label="Quick facts">
        {quickFacts.map((fact) => (
          <article key={fact.label} className="card statCard">
            <p className="statValue">{fact.value}</p>
            <p className="statLabel">{fact.label}</p>
          </article>
        ))}
      </section>

      <section className="grid2">
        <article className="card">
          <h2>How Cari works</h2>
          <ol>
            {howItWorks.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>

        <article className="card">
          <h2>Try these examples</h2>
          <ul className="promptList">
            {samplePrompts.map((prompt) => (
              <li key={prompt}>{prompt}</li>
            ))}
          </ul>
        </article>
      </section>

      <footer className="footer card">
        <p>
          Need urgent guidance? Contact <strong>Agency for Integrated Care (AIC)</strong>: 1800-650-6060.
        </p>
      </footer>
    </div>
  );
}