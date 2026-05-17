# Cari 🌿

**Singapore caregiver support finder. Give it one message to find every scheme you qualify for.**

An autonomous agent that parses a caregiver's situation, matches eligibility across 15+ Singapore government grants and subsidies, and returns a personalised action plan ordered by financial impact.

> Built at Ralphthon Singapore, May 2026.

---

## The problem

Singapore has over 30 active caregiving grants and subsidies. Most families never claim them, not because they don't qualify, but because the system is fragmented, jargon-heavy, and nearly impossible to navigate without a social worker.

A 2025 SMU study found that 1 in 7 older Singaporeans are caregivers themselves, nearly half still working full-time. The top unmet need across caregivers: informational gaps.

Cari fixes that in 60 seconds.

---

## How it works

Type one message describing your situation:

> *"My 78-year-old mother lives with us. She has diabetes and needs help walking. Our household income is $3,500/month."*

Cari runs a 4-agent pipeline and returns every scheme you qualify for, with exact application steps.

---

## Agent pipeline

```
User input
    │
    ▼
┌─────────────────┐
│  IntakeParser   │  Extracts structured profile from plain English
│                 │  Age · conditions · income · ADL needs · citizenship
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  SchemeMatcher  │  Reasons over 15+ Singapore schemes
│                 │  Returns eligibility · confidence · monthly value
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  ActionPlanner  │  Builds prioritised action plan
│                 │  Ordered by highest immediate financial impact
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ OutputFormatter │  Writes plain-English report
│                 │  Warm tone · no jargon · mobile-ready
└─────────────────┘
         │
         ▼
  Personalised scheme report
  with total monthly support amount
  and one first step per scheme
```

Each agent runs a separate API call with a specific system prompt and structured JSON output. The orchestrator sequences them, validates output at each step, and retries on failure.

---

## Schemes covered

| Scheme | Type | Max value |
|---|---|---|
| Home Caregiving Grant (HCG) | Monthly cash | $600/mo |
| Pioneer Generation Disability Assistance (PioneerDAS) | Monthly cash | $100/mo |
| Seniors' Mobility and Enabling Fund (SMF) | Equipment subsidy | Up to 90% |
| Community Health Assist Scheme (CHAS) | GP/dental subsidy | Up to $80/visit |
| Caregivers Training Grant (CTG) | Annual training | $400/yr |
| MDW Levy Concession | Monthly levy reduction | $240/mo saved |
| CareShield Life | Long-term care insurance | $662/mo (lifetime) |
| MediFund | Safety net | Case-by-case |
| ComCare | Low-income assistance | Varies |
| ElderFund | ElderShield supplement | Varies |
| IDAPE | Pre-ElderShield seniors | $150–250/mo |
| MediShield Life | Hospital insurance | Automatic |
| Medisave withdrawals | Savings drawdown | $200/mo |
| Caregiver Support Network | Mental health | Free |
| Age Well SG | Community befriending | Free |

---

## Why this is not RAG

Cari does not retrieve documents. The scheme knowledge is structured plain-text context injected into the SchemeMatcher agent prompt. The agents reason about eligibility, plan action sequences, and write personalised output.

This is agent reasoning over structured domain knowledge, not document retrieval and summarisation.

---

## Stack

- **Frontend:** React + Tailwind CSS
- **Agent runtime:** API - `openai-codex` (4 sequential calls)
- **Deployment:** Vercel
- **Storage:** None — all state in memory per session
- **Database:** None

---

## Running locally

```bash
git clone https://github.com/your-username/cari
cd cari
cp .env.example .env
```

Add your API key to `.env`:

```
API_KEY=sk-ant-...
```

Then:

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

---

## Project structure

```
cari/
├── src/
│   ├── App.jsx                  # Main app — landing / loading / results states
│   ├── components/
│   │   ├── InputForm.jsx        # Textarea + example chips + submit
│   │   ├── AgentProgress.jsx    # 4-step animated pipeline progress
│   │   ├── ResultsView.jsx      # Total support figure + scheme cards
│   │   └── SchemeCard.jsx       # Individual scheme card
│   ├── api/
│   │   └── cari.js              # 4-agent orchestrator pipeline
│   └── data/
│       └── schemes.js           # Singapore scheme database (structured JS object)
├── .env.example
├── vercel.json
└── README.md
```

---

## Demo inputs

Three pre-tested inputs you can use to verify the pipeline:

**1. Parent with dementia**
> My dad is 82 with dementia. He lives with us and needs help with bathing and dressing. Our household income is $2,800/month.

**2. Pioneer Generation, mobility needs**
> My mum is 76 and needs a wheelchair and adult diapers. She's a Singapore citizen, Pioneer Generation. We earn $4,000/month.

**3. Spouse post-stroke**
> My wife had a stroke last year. She's 67 and needs help with bathing and walking. I'm still working full-time. We're thinking of hiring a helper.

---

## Impact

Singapore is on track to become a super-aged society by 2030, with 1 in 4 residents aged 65 and above. The government has significantly expanded caregiver support, but awareness and uptake remain low due to system complexity.

Cari's goal after the hackathon: partner with AIC, polyclinics, or community health organisations to deploy this as a first-touch tool for caregivers at the point they need it most.

---

## Universal fallback

Whatever your situation, the single best first call is:

**Agency for Integrated Care (AIC)**
> Hotline: 1800-650-6060

Mon–Fri 8:30am–8:30pm · Sat 8:30am–4pm

Website: aic.sg

---

## License

MIT
