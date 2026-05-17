# Cari

Singapore caregiver support finder. Give it one message to find every scheme you qualify for.

Cari parses a caregiver's situation, matches eligibility across Singapore caregiving grants and subsidies, and returns a personalised action plan ordered by financial impact.

Built at Ralphthon Singapore, May 2026.

## Demo

Open `index.html` directly, or deploy this repository to Vercel as a static site.

The current prototype includes:

- A landing page for Cari
- A scheme impact report mockup
- A larger video-call bot interface
- Webcam and microphone access through the browser
- Speech-to-text transcript into the chat when supported by the browser
- Cari voice replies using browser speech synthesis, preferring the Daniel voice when available
- A plain-English caregiver chat flow

## Deploying to Vercel

This repo is intentionally minimal. It only needs:

```text
index.html
README.md
```

No build command is required. In Vercel, use the default static deployment settings.

## Browser Notes

Camera and microphone access require a secure browser context. Vercel HTTPS works. Local `localhost` / `127.0.0.1` previews usually work. Direct `file://` previews may limit camera, microphone, or speech recognition depending on the browser.

Speech recognition support varies by browser. If it is unavailable, users can still type into the chat. Voice output uses the browser's built-in `speechSynthesis` API.

## Schemes Covered

- Home Caregiving Grant
- PioneerDAS
- Seniors' Mobility and Enabling Fund
- CHAS
- Caregivers Training Grant
- MDW Levy Concession
- CareShield Life
- MediFund
- ComCare
- ElderFund
- IDAPE
- MediShield Life
- Medisave withdrawals
- Caregiver Support Network
- Age Well SG

## Stack

- Frontend: static HTML, Tailwind CDN, vanilla JavaScript
- Voice: browser SpeechRecognition and SpeechSynthesis APIs
- Deployment: Vercel static site
- Storage: none
- Database: none
