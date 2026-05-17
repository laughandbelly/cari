# Cari

Singapore caregiver support finder. Give it one message to find every scheme you qualify for.

![Cari app screenshot](assets/cari-screenshot.svg)

Cari parses a caregiver's situation, matches eligibility across Singapore grants and subsidies, and returns a plain-English action plan ordered by financial impact.

## What Cari Returns

Every caregiver reply is broken into:

1. **What you qualify for**
2. **How much you can save**
3. **What to do next**

Each action plan includes buttons to call AIC, open relevant grant pages, and prepare a referral email.

## Care Team Handoff

Cari can prepare a referral note for organisations the caregiver may need help from, such as AIC, community care teams, social workers, or caregiver support services.

Once an organisation accepts the referral, its members can help with:

- Follow-up emails
- Phone calls
- Grant application guidance
- Caregiver support planning
- Mental health or therapy referrals when caregiving stress is high

Caregiving can feel like having two jobs: a full-time job and a caregiving job. Cari treats emotional support as part of the care plan, not an afterthought.

## Deploying to Vercel

This is a static app. No build command is required.

Required files:

```text
index.html
assets/cari-screenshot.svg
README.md
```

Camera and microphone access work best on HTTPS, which Vercel provides automatically.
