# Kodez Mendhi Artist — React + Vite

Complete frontend-only mehndi portfolio for **Kodez Mendhi Artist**, Panipat, Haryana.

**Booking WhatsApp:** +91 80825 41418

## Run on your laptop (Windows / macOS / Linux)

1. Install Node.js 22.12+ (or Node.js 24 LTS).
2. Extract this ZIP and open its folder in VS Code.
3. Open a terminal in the folder containing `package.json`.
4. Run:

```bash
npm ci
npm run dev
```

Open the local address printed by Vite (normally http://localhost:3000).

## Production build

```bash
npm run build
npm run preview
```

The ready-to-host website is in `dist/`. Upload that folder to a static host, or deploy the project on Vercel with Framework: Vite, Build command: `npm run build`, Output directory: `dist`.

No backend, database, API keys, environment variables or payment setup are required.

## Included

- React component-based frontend with Vite.
- Custom transparent Kodez Mendhi Artist logo, favicon and matching burgundy/gold identity.
- 30 real, locally included mehndi inspiration photographs with source credits.
- Category filters, progressive gallery loading, favourites (up to six saved on the current device).
- Accessible native photo dialog with keyboard controls and mobile swipe navigation.
- Responsive mobile navigation and fixed Call / WhatsApp / Enquire controls.
- Service selection, FAQ, smooth scrolling and reduced-motion support.
- Two-step enquiry flow: details, then review and send.
- WhatsApp primary contact, with Telegram and email alternatives.
- Form checks for event date, contact details and number of people.
- Page metadata and LocalBusiness structured data for Panipat, Haryana.

## How booking works

The visitor fills in event details, selects inspiration designs, reviews the enquiry, then chooses a messaging app. WhatsApp opens a draft addressed to **918082541418**. The visitor must press Send in WhatsApp. The website does not send automatically, check live availability, store bookings or confirm reservations. Confirm dates and quotes manually in the conversation.

No personal form data is stored in browser storage. Only favourite image IDs are saved on the current device. The site does not upload enquiries to any server.

## Edit your website

- `src/config.js` — brand, location, contact information and occasion options.
- `src/App.jsx` — navigation, hero, services, process, FAQ and footer.
- `src/components/Gallery.jsx` — filters, favourites and photo viewer.
- `src/components/Booking.jsx` — booking form and review screen.
- `src/booking.js` — validation and message formatting.
- `src/photos.json` — image titles, categories, file paths and source credits.
- `src/styles.css` — theme and responsive styles.
- `public/assets/` — all 30 photographs.
- `public/logo.png` — generated transparent brand logo.
- `public/photo-credits.html` — full photography credits.
- `index.html` — title, description and structured metadata.

The gallery is clearly labelled design inspiration. It does not claim other creators' photos as the artist's own work. Replace these with your own portfolio photos when available and update the credits.

## Checks

```bash
npm test
npm run build
```

Verified enquiry destination, message encoding, date/phone/party-size validation, 30 distinct image files, build output and internal assets. Full browser visual QA was not available in this environment.

Created for Krishna Kodez.
